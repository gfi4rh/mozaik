import winston from 'winston';
import path    from 'path';
import chalk   from 'chalk';
import Bus     from './Bus';
import express from 'express';
import server  from './server';
import CoreApi from './CoreApi';


class Mozaik {
    constructor(config) {

        const format =  winston.format.combine(
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf(
                info => `[${new Date(info.timestamp).toISOString().replace(/T/, ' ').replace(/\..+/, '')}] ${info.level}: ${info.message}`
            ))

        const logger = winston.createLogger({
            transports: [
                new winston.transports.Console({
                    format : winston.format.combine(
                        winston.format.colorize(),
                        format
                    )
                }),
                new winston.transports.File({
                    filename : `/logs/info-${new Date().toISOString().replace(/\T.+/, '')}-0.log`,
                    format : winston.format.combine(
                        winston.format.uncolorize(),
                        format
                    ),
                    maxsize : 1024 * 1024 * 100
                })
            ]
        })

        this.logger = logger;

        this.config = config;

        this.profile = config.profile

        this.messages = config.messages

        this.serverConfig = {
            host: config.host,
            port: config.port
        };

        this.config.appTitle         = this.config.appTitle         || 'Mozaïk';
        this.config.assetsBaseUrl    = this.config.assetsBaseUrl    || '';
        this.config.useWssConnection = !!this.config.useWssConnection;
        this.config.apisPollInterval = this.config.apisPollInterval || 15000;

        this.baseDir = (config.baseDir || process.cwd()) + path.sep;
        this.rootDir = path.resolve(__dirname);

        this.bus = Bus(this);
        
        this.bus.registerApi('mozaik', CoreApi);
    }

    /**
     * @param  {Express} app
     */
    startServer(app) {
        app = app || express();

        server(this, app);
    }

    /**
     * @param {Object} config The convict config schema to validate against
     */
    loadApiConfig(config) {
        // load and validate config
        config.load(this.config.api);

        try {
            config.validate();
        } catch (e) {
            this.logger.error(chalk.red(e.message));
            process.exit(1);
        }
    }
}


export default Mozaik;

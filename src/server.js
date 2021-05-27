import express from 'express';
import swig    from 'swig';
import chalk   from 'chalk';
import path    from 'path';
import _       from 'lodash';
import { checkIdentity } from './registration'
import { readMessage, changeMessage } from './message'

/**
 * @param {Mozaik} mozaik
 * @param {Express} app
 */
export default function (mozaik, app) {

    const config = mozaik.serverConfig;

    mozaik.logger.log('info', chalk.yellow(`Serving static contents from ${mozaik.baseDir}build`));
    app.use(express.static(`${mozaik.baseDir}/build`));
    app.use(express.json());
    app.use(express.urlencoded());

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', path.join(mozaik.rootDir, 'templates'));
    app.set('view cache', false);
    swig.setDefaults({
        cache: false
    });

    app.get('/', (req, res) => {
        res.render('index', {
            env:           mozaik.config.env,
            appTitle:      mozaik.config.appTitle,
            assetsBaseUrl: mozaik.config.assetsBaseUrl
        });
    });

    app.get('/message/:id', (req, res) => {
        const id  = req.params['id']
        res.send({msg : readMessage(id)})
    })

    app.post('/writemessage/:id', (req, res) => {
        const id = req.params['id']
        const { new_msg } = req.body
        changeMessage(id, new_msg)
        res.send({msg : readMessage(id)})
    })

    app.post('/login', (req, res) => {
        const { username, password } = req.body
        const auth = (username && password) ? checkIdentity(username, password) : null
        res.send({auth : auth})
    })

    app.get('/config', (req, res) => {
        res.send(_.omit(mozaik.config, 'api'));
    });

    const server = app.listen(config.port, config.host, () => {
        mozaik.logger.info(chalk.yellow(`Mozaïk server listening at http://${config.host}:${config.port}`));
    });

    const WebSocketServer = require('ws').Server;
    const wss             = new WebSocketServer({ server: server });

    let currentClientId = 0;

    wss.on('connection', (ws) => {
        const clientId = ++currentClientId;

        mozaik.bus.addClient(ws, clientId);

        ws.on('message', (request) => {
            mozaik.bus.clientSubscription(clientId, JSON.parse(request));
        });

        ws.on('close', () => {
            mozaik.bus.removeClient(clientId);
        });
    });
};

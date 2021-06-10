import Reflux           from 'reflux';
import _                from 'lodash';
import DashboardActions from './../actions/DashboardActions';
import ConfigStore      from './ConfigStore';


var _dashboards      = [];
var _currentIndex    = 0;
var paused           = false;
var connected        = false;
var _config          = null;
var _timer           = null;


const DashboardStore = Reflux.createStore({
    init() {
        this.listenTo(DashboardActions.setDashboards,     this.setDashboards);
        this.listenTo(DashboardActions.previousDashboard, this.previousDashboard);
        this.listenTo(DashboardActions.nextDashboard,     this.nextDashboard);
        this.listenTo(DashboardActions.pause, this.pause);
        this.listenTo(DashboardActions.restart, this.restart);
        this.listenTo(DashboardActions.paused, this.paused);
        this.listenTo(DashboardActions.login, this.login);
        this.listenTo(DashboardActions.logout, this.logout);
        this.listenTo(DashboardActions.connected, this.connected);
        this.listenTo(ConfigStore,                        this.setConfig);
    },
    setConfig(config) {
        _config = _.pick(config, 'rotationDuration');
        this.start();
    },
    start() {
        if (_config.rotationDuration && _dashboards.length > 1 && _timer === null) {
            _timer = setInterval(() => {
                if(!paused) {
                    this.nextDashboard();
                }
            }, _config.rotationDuration);
        }
    },
    paused(){
        return paused;
    },
    pause(){
        paused = true; 
    },

    restart(){
        paused = false;
    },

    connected(){
        return connected;
    },

    login(){
        connected = true;
    },

    logout(){
        connected = false;
    },

    previousDashboard() {
        _currentIndex--;
        this.trigger(_currentIndex);
    },

    nextDashboard() {
        if (_currentIndex < _dashboards.length - 1) {
            _currentIndex++;
        } else {
            _currentIndex = 0;
        }

        this.trigger(_currentIndex);
    },

    setDashboards(dashboards) {
        _.forEach(dashboards, (dashboard, index) => {
            dashboard.index = index;
        });

        _dashboards   = dashboards;
        _currentIndex = 0;

        this.start();

        this.trigger(_currentIndex);
    },

    currentIndex() {
        return _currentIndex;
    }
});


export default DashboardStore;

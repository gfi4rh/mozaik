import Reflux from 'reflux';


const DashboardActions = Reflux.createActions([
    'setDashboards',
    'previousDashboard',
    'nextDashboard',
    'restart',
    'pause',
    'paused'
]);


export default DashboardActions;

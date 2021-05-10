import Reflux from 'reflux';


const DashboardActions = Reflux.createActions([
    'setDashboards',
    'previousDashboard',
    'nextDashboard',
    'startRotation',
    'stopRotation'
]);


export default DashboardActions;

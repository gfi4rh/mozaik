import Reflux from 'reflux-react-16';


const DashboardActions = Reflux.createActions([
    'setDashboards',
    'previousDashboard',
    'nextDashboard',
    'startRotation'
]);


export default DashboardActions;

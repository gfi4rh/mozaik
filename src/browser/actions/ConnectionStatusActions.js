import Reflux from 'reflux-react-16';


const ConnectionStatusActions = Reflux.createActions([
    'connecting',
    'connected',
    'disconnected',
    'delaying',
    'failed'
]);


export default ConnectionStatusActions;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _                               from 'lodash';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux-react-16';
import NotificationsStore              from '../stores/NotificationsStore';
import NotificationsItem               from './NotificationsItem.jsx';


class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = { notifications: [] };
    }

    componentWillMount() {
        this.listenTo(NotificationsStore, this.onNotificationsUpdate);
    }

    onNotificationsUpdate(notifications) {
        this.setState({ notifications });
    }

    render() {
        const { notifications } = this.state;

        return (
            <div className="notifications">
                {notifications.map(notification => (
                    <NotificationsItem
                        key={`notification.${notification.id}`}
                        notification={notification}
                    />
                ))}
            </div>
        );
    }
}

Notifications.displayName = 'Notifications';

Notifications.propTypes = {};

reactMixin(Notifications.prototype, ListenerMixin);


export default Notifications;

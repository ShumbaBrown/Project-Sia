import React from 'react';
import ReactDOM from 'react-dom';

    /*
    Display of information pertaining to a 
    user's current achievement(s)
    and accomplishments
    */

function initializePushNotifications() {
	return Notification.requestPermission(function(result)) {
		return result;
	}
}


export {
	initializePushNotifications
};

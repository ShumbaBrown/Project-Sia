import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

    /*
    Display of information pertaining to a 
    user's current achievement(s)
    and accomplishments
    */


const requestPushNotifications = async () => {
	
	const permission = await window.Notification.requestPermission();
	// possible values are 'granted','denied', or 'default'
	console.log(Notification.permission);
	if (permission !== 'granted') {
		throw new Error('Permission not granted for Notification');
	}
}

const showLocalNotification  = (title, body, swRegistration) => {
	const options = {
		body,
	}
	swRegistration.showNotification(title, options);
}

const check  = () => {
	if (!('serviceWorker' in navigator)) {
		throw new Error('No service Worker support!')
	}
	if (!('PushManager' in window)) {
		throw new Error('No Push API Support!')
	}
}

const main = async () => {
	check();
	const swRegistration = await serviceWorker.register();
	// calls standard sw function, not sw(config)
	const permission = await requestPushNotifications();

}

main();
export {
	requestPushNotifications,
	check,
	main
};

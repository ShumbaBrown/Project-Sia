import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*********************************

    The Notifications API allows notifications to 
    be defined:

    ------------
	Notification!
	here is a notification
	(TAB)
	------------

    navigator.serviceWorker.ready.then(function(serviceWorker) {
	serviceWorker.showNotification(title,options);
    })
*********************************/

function sendNotification() {
	// const img = specific notification image
	const text = "here is a notification";
	const title = "Title";
	const options = {
		body: text,
		//image: img
		actions: [{action: "Detail", title: "View", icon: "https://via.placeholder.com/128/ff0000"}]
	};

	navigator.serviceWorker.ready.then(function(serviceWorker) {
		serviceWorker.showNotification(title, options);
	});
}

export {
	sendNotification
}
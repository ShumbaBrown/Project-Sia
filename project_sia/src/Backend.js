import React from 'react';
import ReactDOM from 'react-dom';
import firestore from "firebase/firestore";
import * as firebase from 'firebase';
import event from './event';

class Backend extends React.Component {
    constructor() {
      super();
      // const db = firebase.firestore();

      // Sample event.
      const sample_event = new event(123, "Hack n", "Description", "LKD", "1AM",
        "2AM", ['Freshman', 'Computer Science']);

      // Add sample event to database.
      this.addEvent(sample_event);
      // Console log all events in database.
      console.log(this.getEvents());
    }

    // Firestore data converter: events
    eventsConverter = {
      toFirestore: function(event) {
        return {
          name: event.name,
          description: event.description,
          location: event.location,
          start_date_time: event.start_date_time,
          end_date_time: event.end_date_time,
        }
      },
      fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        // TODO: add other fields.
        return new event(data.name, data.description, data.location,
          data.start_date_time, data.end_date_time)
      }
    }

    addEvent(event) {
      const db = firebase.firestore();
      // Set with eventsConverter
      db.collection("events").doc()
        .withConverter(this.eventsConverter)
        .set(event);
    }

    getEvents() {
      const db = firebase.firestore();
      db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data().name}`);
          // TODO: return event object.
          // return new Event(doc.data().id, doc.data().name, doc.data().description,
          //   doc.data().location, doc.data().start_date_time, doc.data().end_date_time, [])
        });
      });
    }

    render() {
      return ( < p > Backend: Hello world! < /p>);
      }
    }
    export default Backend;

import React from 'react';
import ReactDOM from 'react-dom';
import firestore from "firebase/firestore";
import * as firebase from 'firebase';
import event from './event';

class Backend extends React.Component {
    constructor() {
      super();
      // const db = firebase.firestore();

      // // Sample event.
      // const sample_event = new event("123", "Test", "Description", "LKD", "1AM",
      //   "2AM", ['Freshman', 'Computer Science']);
      // // Add sample event to database.
      // this.addEvent(sample_event);
      // Console log all events in database.
      console.log(this.getEvents());
      // // Deleting an event.
      // this.deleteEvent("DZnDK60o9JDRXkG6pyFi")
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

    async addEvent(event) {
      const db = firebase.firestore();
      // Set with eventsConverter
      var add_event = await db.collection("events").doc()
        .withConverter(this.eventsConverter)
        .set(event);

      console.log("Event successfully added!");
    }

    deleteEvent(event_id) {
      const db = firebase.firestore();
      db.collection("events").doc(event_id).delete().then(function() {
        console.log("Event successfully deleted!");
      }).catch(function(error) {
        console.error("Error deleting event with id ", error);
      });
    }


    async getEvents() {
      const db = firebase.firestore();
      let events = []
      await db.collection("events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data().name}`);
          // TODO: return event object.
          events.push(new event(doc.id, doc.data().name, doc.data().description,
            doc.data().location, doc.data().start_date_time, doc.data().end_date_time, []))
        });

      });

      return events;
    }

    // getBostonAreaWeather = functions.https.onRequest(async (request, response) => {
    //   try {
    //     const querySnapshot = await firebase.firestore().collection("events").get()
    //     const promises = []
    //     querySnapshot.forEach((doc) => {
    //       promises.push(`${doc.id} => ${doc.data().name}`)
    //     })
    //     const snapshots = await Promise.all(promises)
    //     const results = []
    //     snapshots.forEach(snap => {
    //       const data = snap.data()
    //       results.push(data)
    //     })
    //
    //     response.send(results)
    //   } catch (error) {
    //     console.error(error)
    //     response.status(500).send(error)
    //   }
    // })

    render() {
      return ( < p > Backend: Hello world! < /p>);
      }
    }
    export default Backend;

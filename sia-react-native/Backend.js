import React from 'react';
import Firebase from './Firebase'
import event from './classes/event.js'
import user from './classes/user.js'
import eventList from './classes/eventList'

class Backend extends React.Component {
  constructor() {
    super();
  }

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
    const db = Firebase.firestore();
    // Set with eventsConverter
    var add_event = await db.collection("events").doc()
      .withConverter(this.eventsConverter)
      .set(event);

    console.log("Event successfully added!");
  }

  deleteEvent(event_id) {
    const db = Firebase.firestore();
    db.collection("events").doc(event_id).delete().then(function() {
      console.log("Event successfully deleted!");
    }).catch(function(error) {
      console.error("Error deleting event with id ", error);
    });
  }

  async getEvents() {
    const db = Firebase.firestore();
    let events = []
    await db.collection("events").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().name}`);
        events.push(new event(doc.id, doc.data().name, doc.data().description,
          doc.data().location, doc.data().start_date_time, doc.data().end_date_time, []))
      });


    });
    // console.log(new eventList(events))
    return new eventList(events);
  }
  // Usage 
  // import Backend from '../Backend.js'
  // backend = new Backend;
  // backend.getEvents().then((value) => console.log(value));

  userConverter = {
    toFirestore: function(user) {
      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        age: user.age,
        gender: user.gender,
        classification: user.classification,
        major: user.major,
        interest_tags: user.interest_tags,
      }
    },
    fromFirestore: function(snapshot, options) {
      const data = snapshot.data(options);
      return new user(data.id, data.first_name, data.last_name, data.email,
        data.age, data.gender, data.classification, data.major, data.interest_tags)
    }
  }

  async addUser(user) {
    const db = Firebase.firestore();
    var add_user = await db.collection("users").doc()
      .withConverter(this.userConverter)
      .set(user);

    console.log("User successfully added!");
  }

  async getCurrentUser() {
    let user = Firebase.auth().currentUser;
    const db = Firebase.firestore();
    await db.collection("users").doc(user.uid)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log(doc.data())
          return new user(doc.data().id, doc.data().first_name, doc.data().last_name, doc.data().email_address,
            doc.data().age, doc.data().gender, doc.data().classification, doc.data().major, doc.data().interest_tags)
        } else {
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
  }

  convertForUpdate (user) {
    return {
      first_name: user.first_name,
      last_name: user.last_name,
      age: user.age,
      gender: user.gender,
      classification: user.classification,
      major: user.major,
      interest_tags: user.interest_tags,
    }
  }

  async updateUser(user) {
    let current_user = Firebase.auth().currentUser;
    const db = Firebase.firestore();
    var add_user = await db.collection("users").doc(current_user.uid)
      .update(this.convertForUpdate(user));
    console.log("User successfully updated!");
  }

  deleteUser(user_id) {
    const db = Firebase.firestore();
    db.collection("users").doc(user_id).delete().then(function() {
      console.log("User successfully deleted!");
    }).catch(function(error) {
      console.error("Error deleting user with id ", error);
    });
  }

}
export default Backend;

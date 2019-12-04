import React from 'react';
import ReactDOM from 'react-dom';


class userEventsManager {
    /*
    Responsible for obtaining relevant user data/tags such as classification, major,
    age, etc. required to identify relevant events. Also fetches obtained
    achievements.
    Will require database access for user information
    */
    fetchUserData() {
    
    }
    
    
    /*
    Responsible for filtering event list based on provided user tags.
    */
    filterEvents() {
        
    }
    
    /*
    Identifies from filtered events which event has an upcoming deadline/start
    date.
    Will require access to device date/time.
    */
    checkDeadlines() {
        
    }
    
    /*
    Marks an user selected event as high-priority, separating it from the normal
    list of events.
    */
    bookmarkEvent() {
        
    }
}
export default userEventsManager;
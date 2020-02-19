import React from 'react';
import ReactDOM from 'react-dom';

/*Event class is responsible for all scenarios that are of interest to the
student.
Includes common information such as name and venue.
Also classifies item with tags, allowing filtered searches.
Example tags: "Freshman", "Computer Science"
*/
class event {
    constructor(id = 'UNSET',
        name = 'UNSET',
        description = 'UNSET',
        location = 'UNSET',
        start_date_time = 'UNSET',
        end_date_time = 'UNSET',
        tags = []) {

        this.id = id;
        this.name = name;
        this.description = description;

        //Consisting of room number (if applicable), street no, city, and state
        this.location = location;

        //Date/Time Range of event
        //For unique, single occurence events such as deadlines, the start and end.
        //times are equal
        this.start_date_time = start_date_time;
        this.end_date_time = end_date_time;

        //List of interests/topics used to sort the event by relevancy.
        this.tags = tags;
    }
    toString() {
        return this.name; // TODO: complete function
    }
}
export default event;

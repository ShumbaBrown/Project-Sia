import React from 'react';
import ReactDOM from 'react-dom';

//Event class is responsible for all scenarios that are of interest to the
//student.
//Includes common information such as name and venue.
//Also classifies item with tags, allowing filtered searches.
//Example tags: "Freshman", "Computer Science" 
class event {

    id = -1
    name = 'UNSET'
    description = 'UNSET'

    //Consisting of room number (if applicable), street no, city, and state
    location = 'UNSET'

    //Date/Time Range of event
    //For unique, single occurence events such as deadlines, the start and end.
    //times are equal
    start_date_time = 'UNSET'
    end_date_time = 'UNSET'

    //List of interests/topics used to sort the event by relevancy.
    tags = []
}
export default event;
import event from './event';

/*Event list class holds a collection of events and tackles
functions performed on an event collection.
Examples include event searching, event addition, etc.
*/
class eventList {
    constructor(events = []) {
        //Initializes list as previous set of events.
        //Otherwise it is initialized as an empty array.
        this.events = events;
    }

    addEvent(given_event) {
        this.events.push(given_event);
    }

    removeEventByID(event_id) {
        let removal_id = -1;
        //cycles through event list for matching unique ID
        for(let event_cycler = 0; event_cycler < this.events.length; event_cycler++) {
            if(this.events[event_cycler].id == event_id) {
                removal_id = event_cycler;
                break;
            }
        }
        if(removal_id != -1) {
            //remove event from list if the ID is found
            this.events.splice(removal_id,1);
            //returns success code
            return 0;
        }
        else {
            //returns failure code
            return -1;
        }

    }

    getEventByID(event_id) {
        let finder_id = -1;
        //cycles through event list for matching unique ID
        for(let event_cycler = 0; event_cycler < this.events.length; event_cycler++) {
            if(this.events[event_cycler].id == event_id) {
                finder_id = event_cycler;
                break;
            }
        }
        if(finder_id != -1) {
            //returns event item and flag marking success
            return [this.events[finder_id], true];
        }
        else {
            //returns empty event and flag marking failure
            return [new event(), false];
        }
    }
}
export default eventList;
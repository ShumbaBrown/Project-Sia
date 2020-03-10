/* Statistic class is responsible for tracking/logging
a user's action.
Eg. Number of events created
*/

class statistic {
    constructor(
        id = -1,
        name = "UNSET",
        description = "UNSET",
        isBoolean = false,
        flag = false,
        quantity = 0) {
        
        //provides labels for the statistic that the user is able to see
        this.id = id;
        this.name = name;
        this.description = description;

        //provides a marker for the statistics which determines if
        //not statistics is a checkbox or counter
        this.isBoolean = isBoolean;

        this.flag = flag;
        this.quantity = quantity;
    }

    //changes the statistic's flag. Sets to true by default
    changeFlag(end_state = true) {
        this.flag = end_state;
        return;
    }

    //increments the statistic's quantity. Adds one by default
    increment(modifier = 1) {
        this.quantity = this.quantity + modifier;
        return;
    }
}
export default statistic;
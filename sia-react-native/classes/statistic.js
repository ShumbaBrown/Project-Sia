/* Statistic class is responsible for tracking/logging
a user's action.
Eg. Number of events created
*/

const statistic_types = {
    BOOLEAN: 0,
    QUANTITY: 1,
    ARR: 2
}

class statistic {
    constructor(
        id = -1,
        name = "UNSET",
        description = "UNSET",
        statistic_type = 0,
        flag = false,
        quantity = 0,
        arr = []) {
        
        //provides labels for the statistic that the user is able to see
        this.id = id;
        this.name = name;
        this.description = description;

        //provides a marker for the statistics which determines if
        //not statistics is a checkbox or counter
        this.statistic_type = statistic_type;

        this.flag = flag;
        this.quantity = quantity;
        this.arr = arr;
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

    addToList(item = '') {
        this.arr.push(item);
    }

    removeFromList(item = '',instances = 1) {
        for(let item_cycler = 0; item_cycler < this.arr.length; item_cycler++) {
            //removes a requested number of instances of an item from the arr
            if((this.arr[item_cycler] == item) && instances > 0) {
                this.arr.splice(item_cycler,1);
                instances--;
                item_cycler--;
            }
        }

        //identify if all requested instances were sucessfully removed
        if(instances == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    isItemInList(item = '') {
        for(let item_cycler = 0; item_cycler < this.arr.length; item_cycler++) {
            //return immediately if match is found
            if(this.arr[item_cycler] == item) {
                return true;
            }
        }

        //state that item was not found in list
        return false;
    }
}
export default statistic;
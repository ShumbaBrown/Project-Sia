import statistic from "./statistic";


/*Statistics class holds a collection of statistics.
Logged for the purpose of mapping achievements.
Prone to growth once achievements become more concrete.
*/
class statisticList {
    constructor(given_statistics = []) {
        this.statistics = given_statistics;
    }

    addStatistic(given_statistic) {
        this.statistics.push(given_statistic);
    }

    removeStatisticByID(statistic_id) {
        let removal_id = -1;
        //cycles through event list for matching unique ID
        for(let statistic_cycler = 0; statistic_cycler < this.statistics.length; statistic_cycler++) {
            if(this.statistics[statistic_cycler].id == statistic_id) {
                removal_id = statistic_cycler;
                break;
            }
        }
        if(removal_id != -1) {
            //remove event from list if the ID is found
            this.statistics.splice(removal_id,1);
            //returns success code
            return 0;
        }
        else {
            //returns failure code
            return -1;
        }

    }

    getStatisticByID(statistic_id) {
        let finder_id = -1;
        //cycles through event list for matching unique ID
        for(let statistic_cycler = 0; statistic_cycler < this.statistics.length; statistic_cycler++) {
            if(this.statistics[statistic_cycler].id == statistic_id) {
                finder_id = statistic_cycler;
                break;
            }
        }
        if(finder_id != -1) {
            //returns event item and flag marking success
            return [this.statistics[finder_id], true];
        }
        else {
            //returns empty event and flag marking failure
            return [new statistic(), false];
        }
    }
}
export default statisticList;
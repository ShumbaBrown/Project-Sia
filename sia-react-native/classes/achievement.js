import statisticList from './statisticList';
/*Achievement class is responsible for storing all attributes
used to identify and reward a user an "achievement". This process
typically involves mapping a pre-defined statisticList state to a user's
current statisticList state.
*/

class achievement {
    constructor(id = -1,
        name = "UNSET",
        description = "UNSET",
        state_requirements = new statisticList()) {
        this.id = id;
        //info relating to achievement to be displayed to the user
        this.name = name;
        this.description = description;

        //state the user's statistics must fulfill so that they
        //can obtain the achievement
        this.state_requirements = state_requirements;
        }

    //checks to see if user meets the requirements to obtain
    //this achievement.
    areRequirementsMet(user_statistic_list) {
        for(let state_req_index = 0; 
            state_req_index < this.state_requirements.statistics.length; 
            state_req_index++) 
        {
            for(let user_stat_index = 0; 
                user_stat_index < user_statistic_list.statistics.length;
                user_stat_index++)
            {
                let user_stat = user_statistic_list.statistics[user_stat_index];
                let achievement_stat = this.state_requirements.statistics[state_req_index];

                if(user_stat.id == achievement_stat.id) {
                    switch(achievement_stat.statistic_type) {
                        case 0:
                            if(achievement_stat.flag != user_stat.flag) {
                                return false;
                            }
                            break;

                        case 1:
                            if(achievement_stat.quantity > user_stat.quantity) {
                                return false;
                            }
                            break;

                        case 2:
                            for(let stat_arr_index = 0; 
                                stat_arr_index < achievement_stat.arr.length;
                                stat_arr_index++) 
                            {
                                if(!(user_stat.isItemInList(achievement_stat.arr[stat_arr_index]))) {
                                    return false;
                                }
                            }
                            break;
                    }
                }
            }
        }
        return true;
    }
}
export default achievement;

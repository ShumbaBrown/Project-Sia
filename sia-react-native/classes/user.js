import statisticList from "./statisticList";
import statistic from "./statistic";

/*User class is describes all attributes of an app user.
Includes common information full name and related email address.
Can readily be edited by the user; contains numerous getter/setter functions.
*/
class user {
  constructor(id = -1,
    first_name = "UNSET",
    last_name = "UNSET",
    email = "UNSET",
    age = -1,
    gender = "UNSET",
    classification = "UNSET",
    major = "UNSET",
    interest_tags = [],
    statLibrary = this._generateDefaultStatistics(),
    achievements = []
    ) {
    this.id = id;

    //Collects typical user information for display/UX purposes
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;

    //Collects information used to identify/filter relevant events
    this.age = age;
    this.gender = gender;
    this.classification = classification;
    this.major = major;

    //Collects additional interests of the user to further identify
    // and filter events.
    this.interest_tags = interest_tags;

    //Tracks user state and rewards them for a list of milestones
    this.statLibrary = statLibrary;
    this.achievements = achievements;

    return;
  }

  addInterestTag(new_interest_tag) {
    (this.interest_tags).push(new_interest_tag);
    return;
  }

  deleteInterestTag(requested_interest_tag) {
    for(let tag_cycler = 0; tag_cycler < this.interest_tags.length; tag_cycler++) {
      if(this.interest_tags[tag_cycler] == requested_interest_tag) {
        this.interest_tags.splice(tag_cycler,1);
        return 0;
      }
    }

    return 1;
  }

  getInterestTags() {
    return this.interest_tags;
  }

  updateAchievements(achievement_library=[]) {
    this.achievements = [];
    for(let ach_cycler = 0; ach_cycler < achievement_library.length; ach_cycler++) {
      let cur_achievement = achievement_library[ach_cycler];

      if(cur_achievement.areRequirementsMet(this.statLibrary)) {
        this.achievements.push(cur_achievement);
      }
    }
  }

  _generateDefaultStatistics() {
    let default_statistics = new statisticList();
    //Statistic responsible for tracking the events
    //attended by the user via ID
    default_statistics.addStatistic(
      new statistic(
        1,
        "Events Attended",
        "IDs of all attended events.",
        2,
        false,
        0,
        []
      )
    );

    return default_statistics;
  }
}
export default user;

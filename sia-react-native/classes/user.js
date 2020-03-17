import statisticList from "./statisticList";

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
    interest_tags = []) {
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
    (this.interest_tags).add(new_interest_tag);
    return;
  }

  deleteInterestTag(requested_interest_tag) {
    if (this.interest_tags.has(requested_interest_tag)) {
      (this.interest_tags).delete(requested_interest_tag);
    }
    return;
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
}
export default user;

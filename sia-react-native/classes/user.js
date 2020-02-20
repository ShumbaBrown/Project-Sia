/*User class is describes all attributes of an app user.
Includes common information full name and related email address.
Can readily be edited by the user; contains numerous getter/setter functions.
*/
class user {
  constructor(id = "UNSET",
    first_name = "UNSET",
    last_name = "UNSET",
    email = "UNSET",
    age = -1,
    gender = "UNSET",
    classification = "UNSET",
    major = "UNSET",
    interest_tags = new Set()) {
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
    return;
  }

  setFirstName(first_name) {
    this.first_name = first_name;
    return;
  }

  getFirstName() {
    return this.first_name;
  }

  setLastName(last_name) {
    this.last_name = last_name;
    return;
  }

  getLastName() {
    return this.last_name;
  }

  setEmail(email) {
    this.email = email;
    return;
  }

  getEmail() {
    return this.email;
  }

  setAge(age) {
    this.age = age;
    return;
  }

  getAge() {
    return this.age;
  }

  setGender(gender) {
    this.gender = gender;
    return;
  }

  getGender() {
    return this.gender;
  }

  setClassification(classification) {
    this.classification = classification;
    return;
  }

  getClassification() {
    return this.classification;
  }

  setMajor(major) {
    this.major = major;
    return;
  }

  getMajor() {
    return this.major;
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
}
export default user;

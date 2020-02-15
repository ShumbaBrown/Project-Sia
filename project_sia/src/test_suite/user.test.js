import React from 'react';
import ReactDOM from 'react-dom';
import user from '../user';

describe("User initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_user = new user();
    
        const expected_user = {
            first_name:"UNSET",
            last_name:"UNSET",
            email_address:"UNSET",
            age:-1,
            gender:"UNSET",
            classification:"UNSET",
            major:"UNSET",
            interest_tags: new Set()
        };

        expect(generated_user).toEqual(expected_user);
    });
    
    it("declares an object based on passed parameters", () => {

        const generated_user = new user(
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            new Set(["HobbyA","HobbyB"])
            );

    
        const expected_user = {
            first_name:"Bob",
            last_name:"Johnson",
            email_address:"bob.john@sample.com",
            age:34,
            gender:"Male",
            classification:"Senior",
            major:"Computer Science",
            interest_tags:new Set(["HobbyA","HobbyB"])
        };
    
        expect(generated_user).toEqual(expected_user);
    });
    
});

describe("User getter tests",() => {
    const generated_user = new user(
        "Bob",
        "Johnson",
        "bob.john@sample.com",
        34,
        "Male",
        "Senior",
        "Computer Science",
        new Set(["HobbyA","HobbyB"])
        );

    it("gets first name", () => {
        expect(generated_user.getFirstName()).toEqual("Bob");
    });

    it("gets last name", () => {
        expect(generated_user.getLastName()).toEqual("Johnson");
    });

    it("gets email address", () => {
        expect(generated_user.getEmailAddress()).toEqual("bob.john@sample.com");
    });

    it("gets age", () => {
        expect(generated_user.getAge()).toEqual(34);
    });

    it("gets gender", () => {
        expect(generated_user.getGender()).toEqual("Male");
    });

    it("gets classification", () => {
        expect(generated_user.getClassification()).toEqual("Senior");
    });

    it("gets major", () => {
        expect(generated_user.getMajor()).toEqual("Computer Science");
    });

    it("gets interest tags", () => {
        expect(generated_user.getInterestTags()).toEqual(new Set(["HobbyA","HobbyB"]));
    });

    
    
});

describe("User setter tests",() => {
    const generated_user = new user();

    it("sets first name", () => {
        generated_user.setFirstName("SampleFName");
        expect(generated_user.getFirstName()).toEqual("SampleFName");
    });

    it("sets last name", () => {
        generated_user.setLastName("SampleLName");
        expect(generated_user.getLastName()).toEqual("SampleLName");
    });

    it("sets email address", () => {
        generated_user.setEmailAddress("sample@sample.com")
        expect(generated_user.getEmailAddress()).toEqual("sample@sample.com");
    });

    it("sets age", () => {
        generated_user.setAge(17)
        expect(generated_user.getAge()).toEqual(17);
    });

    it("sets gender", () => {
        generated_user.setGender("Female")
        expect(generated_user.getGender()).toEqual("Female");
    });

    it("sets classification", () => {
        generated_user.setClassification("Junior")
        expect(generated_user.getClassification()).toEqual("Junior");
    });

    it("sets major", () => {
        generated_user.setMajor("Mechanical Engineering")
        expect(generated_user.getMajor()).toEqual("Mechanical Engineering");
    });    
});

describe("User interest tags tests",() => {
    it("adds to interest tags", () => {
        const generated_user = new user();
        expect(generated_user.getInterestTags()).toEqual(new Set([]));

        generated_user.addInterestTag("SampleA");
        expect(generated_user.getInterestTags()).toEqual(new Set(["SampleA"]));
        
        generated_user.addInterestTag("SampleB");
        expect(generated_user.getInterestTags()).toEqual(new Set(["SampleA","SampleB"]));
    });


    it("delete interest tags", () => {

        const generated_user = new user();
        generated_user.addInterestTag("SampleA");
        generated_user.addInterestTag("SampleB");
        generated_user.addInterestTag("SampleC");
        expect(generated_user.getInterestTags()).toEqual(new Set(["SampleA","SampleB","SampleC"]));

        generated_user.deleteInterestTag("SampleB");
        expect(generated_user.getInterestTags()).toEqual(new Set(["SampleA","SampleC"]));
        
        generated_user.deleteInterestTag("SampleC");
        expect(generated_user.getInterestTags()).toEqual(new Set(["SampleA"]));
    });
    
});

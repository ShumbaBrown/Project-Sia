import user from '../../../sia-react-native/classes/user';
import statistic from '../../../sia-react-native/classes/statistic';
import statisticList from '../../../sia-react-native/classes/statisticList.js';
import achievement from '../../../sia-react-native/classes/achievement';

describe("User initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_user = new user();

        let default_parameters = new statisticList([
            new statistic(
                1,
                "Events Attended",
                "IDs of all attended events.",
                2,
                false,
                0,
                []
              )]
        );
    
        const expected_user = {
            id: -1,
            first_name:"UNSET",
            last_name:"UNSET",
            email:"UNSET",
            age:-1,
            gender:"UNSET",
            classification:"UNSET",
            major:"UNSET",
            interest_tags: [],
            statLibrary: default_parameters,
            achievements: []
        };

        expect(generated_user).toEqual(expected_user);
    });
    
    it("declares an object based on passed parameters", () => {
        const statistic_a = new statistic(
            1,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            2,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );

        const expected_achievement = {
            id: 123,
            name: 'Sample',
            description: 'Sample desc',
            state_requirements: [
                new statistic(
                    256,
                    "Sample Stat A",
                    "Given Description A",
                    1,
                    false,
                    1,
                    []
                ),
                new statistic(
                    985,
                    "Sample Stat B",
                    "Given Description B",
                    0,
                    true,
                    0,
                    []
                )
            ]
        };

        const generated_user = new user(
            53,
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            ["HobbyA","HobbyB"],
            new statisticList([statistic_a,statistic_b]),
            [expected_achievement]
            );

    
        const expected_user = {
            id: 53,
            first_name:"Bob",
            last_name:"Johnson",
            email:"bob.john@sample.com",
            age:34,
            gender:"Male",
            classification:"Senior",
            major:"Computer Science",
            interest_tags: ["HobbyA","HobbyB"],
            statLibrary: new statisticList([statistic_a,statistic_b]),
            achievements: [expected_achievement]
        };
    
        expect(generated_user).toEqual(expected_user);
    });
    
});

describe("User interest tags tests",() => {
    it("adds to interest tags", () => {
        const generated_user = new user();
        expect(generated_user.getInterestTags()).toEqual([]);

        generated_user.addInterestTag("SampleA");
        expect(generated_user.getInterestTags()).toEqual(["SampleA"]);
        
        generated_user.addInterestTag("SampleB");
        expect(generated_user.getInterestTags()).toEqual(["SampleA","SampleB"]);
    });


    it("delete interest tags", () => {

        const generated_user = new user();
        generated_user.addInterestTag("SampleA");
        generated_user.addInterestTag("SampleB");
        generated_user.addInterestTag("SampleC");
        expect(generated_user.getInterestTags()).toEqual(["SampleA","SampleB","SampleC"]);

        let response = generated_user.deleteInterestTag("SampleB");
        expect(generated_user.getInterestTags()).toEqual(["SampleA","SampleC"]);
        expect(response).toEqual(0);

        response = generated_user.deleteInterestTag("SampleC");
        expect(generated_user.getInterestTags()).toEqual(["SampleA"]);
        expect(response).toEqual(0);
    });

    it("flags invalid removal requests", () => {
        const generated_user = new user();

        let response = generated_user.deleteInterestTag("SampleA");
        expect(generated_user.getInterestTags()).toEqual([]);
        expect(response).toEqual(1);


        generated_user.addInterestTag("SampleA");
        generated_user.addInterestTag("SampleB");
        expect(generated_user.getInterestTags()).toEqual(["SampleA","SampleB"]);

        response = generated_user.deleteInterestTag("SampleC");
        expect(generated_user.getInterestTags()).toEqual(["SampleA","SampleB"]);
        expect(response).toEqual(1);
    });
});

describe("User achievements tests",() => {
    const sample_user_state = new statisticList(
        [
            new statistic(
                1,
                "Backup Email Set",
                "Tracks if user has a backup email",
                0,
                true,
                0,
                []
            ),
            new statistic(
                2,
                "Profile Picture Changed",
                "Tracks if user changed their profile picture",
                0,
                true,
                0,
                []
            ),
            new statistic(
                3,
                "Events Made",
                "Tracks how many events are created",
                1,
                false,
                1,
                []
            ),
            new statistic(
                4,
                "Clicks Made",
                "Tracks Number of clicks in the app",
                1,
                false,
                899,
                []
            )
        ]
    )

    const sample_achievement_a = new achievement(
        1,
        "Got Your Back",
        "Awarded for setting a backup email.",
        new statisticList(
            [
                new statistic(
                    1,
                    "Backup Email Set",
                    "Tracks if user has a backup email",
                    0,
                    true,
                    0,
                    []
                )
        ])
    );
    
    const sample_achievement_b = new achievement(
        2,
        "Looking Fabulous",
        "Awarded for changing your profile pic from default",
        new statisticList(
            [
                new statistic(
                    2,
                    "Profile Picture Changed",
                    "Tracks if user changed their profile picture",
                    0,
                    true,
                    0,
                    []
                )
        ])
    );
    
    
    const sample_achievement_c = new achievement(
        3,
        "Busy Body",
        "Awarded for making at least 5 events",
        new statisticList(
            [
                new statistic(
                    3,
                    "Events Made",
                    "Tracks how many events are created",
                    1,
                    false,
                    5,
                    []
                )
        ])
    );

    it("successfully generates an achievements list", () => {
        let achievements_library = [sample_achievement_a,sample_achievement_b,sample_achievement_c];

        const sample_user = new user(
            53,
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            ["HobbyA","HobbyB"],
            sample_user_state,
            []
            );

        const expected_user = new user(
            53,
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            ["HobbyA","HobbyB"],
            sample_user_state,
            [sample_achievement_a,sample_achievement_b]
            );

        sample_user.updateAchievements(achievements_library);

        expect(sample_user).toEqual(expected_user);
    });

    it("sucessfully updates an achievement list", () => {
        let achievements_library = [sample_achievement_a,sample_achievement_b,sample_achievement_c];

        const sample_user = new user(
            53,
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            ["HobbyA","HobbyB"],
            sample_user_state,
            [sample_achievement_c]
            );

        const expected_user = new user(
            53,
            "Bob",
            "Johnson",
            "bob.john@sample.com",
            34,
            "Male",
            "Senior",
            "Computer Science",
            ["HobbyA","HobbyB"],
            sample_user_state,
            [sample_achievement_a,sample_achievement_b]
            );

        sample_user.updateAchievements(achievements_library);

        expect(sample_user).toEqual(expected_user);
    });
});

import achievement from '../../../sia-react-native/classes/achievement';
import statistic from '../../../sia-react-native/classes/statistic';
import statisticList from '../../../sia-react-native/classes/statisticList';

describe("Achievement initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_achievement = new achievement();
    
        const expected_achievement = {
            id: -1,
            name: 'UNSET',
            description: 'UNSET',
            state_requirements: new statisticList(),
        };

        expect(generated_achievement).toEqual(expected_achievement);
    });
    
    it("declares an object based on passed parameters", () => {
        const generated_achievement = new achievement(
            123,
            'Sample',
            'Sample desc',
            [
                new statistic(
                    256,
                    "Sample Stat A",
                    "Given Description A",
                    1,
                    false,
                    3,
                    []
                ),
                new statistic(
                    985,
                    "Sample Stat B",
                    "Given Description B",
                    0,
                    true,
                    0,
                    [],
                ),
                new statistic(
                    777,
                    "Sample Stat C",
                    "Given Description C",
                    2,
                    false,
                    0,
                    [1,2,3],
                )
            ]
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
                    3,
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
                ),
                new statistic(
                    777,
                    "Sample Stat C",
                    "Given Description C",
                    2,
                    false,
                    0,
                    [1,2,3]
                )
            ]
        };
    
        expect(generated_achievement).toEqual(expected_achievement);
    });
});

describe("Achievement verification tests", () => {
    const sample_user_state = new statisticList(
        [
            new statistic(
                1,
                "Events Created",
                "Tracks user made events",
                1,
                false,
                5,
                []
            ),
            new statistic(
                2,
                "Backup Email Set",
                "Tracks if user has a backup email",
                0,
                true,
                0,
                []
            ),
            new statistic(
                3,
                "Major Set",
                "Tracks if user has set a major",
                0,
                false,
                0,
                []
            ),
            new statistic(
                4,
                "Clicks Made",
                "Tracks number of clicks in the app",
                1,
                false,
                17,
                []
            ),
            new statistic(
                5,
                "Events Attended",
                "Tracks which events the user attended",
                1,
                false,
                0,
                [1,3,5,7]
            )
        ]
    )


    it("Identifies if a quantity state passes", () => {
        const sample_achievement = new achievement(
            51,
            "Busy Body",
            "Awarded for making 5 or more events.",
            new statisticList(
                [
                    new statistic(
                        1,
                        "Events Created",
                        "Tracks user made events",
                        1,
                        false,
                        5,
                        []
                    )
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(true);
    });

    it("Identifies if a quantity state fails", () => {
        const sample_achievement = new achievement(
            51,
            "Busy Body",
            "Awarded for making 7 or more events.",
            new statisticList(
                [
                    new statistic(
                        1,
                        "Events Created",
                        "Tracks user made events",
                        1,
                        false,
                        7,
                        []
                    )
            ])
        );

        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });

    it("Identifies if a boolean state passes", () => {
        const sample_achievement = new achievement(
            71,
            "Got Your Back",
            "Awarded for setting a backup email.",
            new statisticList(
                [
                    new statistic(
                        2,
                        "Backup Email Set",
                        "Tracks if user has a backup email",
                        0,
                        true,
                        0,
                        []
                    )
            ])
        );

        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(true);
    });
        
    it("Identifies if a boolean state fails", () => {
        const sample_achievement = new achievement(
            71,
            "Got Your Back",
            "Awarded for setting a backup email.",
            new statisticList(
                [
                    new statistic(
                        2,
                        "Backup Email Set",
                        "Tracks if user has a backup email",
                        0,
                        false,
                        0,
                        []
                    )
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });
    
    it("Identifies if a array type stat passes", () => {
        const sample_achievement = new achievement(
            71,
            "Keynote Keeper",
            "Awarded for attending all keynote events.",
            new statisticList(
                [
                    new statistic(
                        5,
                        "Events Attended",
                        "Tracks which events the user attended",
                        2,
                        false,
                        0,
                        [1,3,5]
                    )
            ])
        );

        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(true);
    });
        
    it("Identifies if a array type stat mismatches", () => {
        const sample_achievement = new achievement(
            72,
            "Ceremony Caller",
            "Awarded for attending all school ceremonies.",
            new statisticList(
                [
                    new statistic(
                        5,
                        "Events Attended",
                        "Tracks which events the user attended",
                        2,
                        false,
                        0,
                        [1,3,4,9]
                    )
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });
    
    
    it("Passes when all states are matched", () => {
        const sample_achievement = new achievement(
            71,
            "Logged and Loaded",
            "Awarded for setting your email... but not much else.",
            new statisticList(
                [
                    new statistic(
                        2,
                        "Backup Email Set",
                        "Tracks if user has a backup email",
                        0,
                        true,
                        0,
                        []
                    ),
                    new statistic(
                        3,
                        "Major Set",
                        "Tracks if user has set a major",
                        0,
                        false,
                        0,
                        []
                    ),
                    new statistic(
                        4,
                        "Clicks Made",
                        "Tracks number of clicks in the app",
                        1,
                        false,
                        3,
                        []
                    ),
                    new statistic(
                        5,
                        "Events Attended",
                        "Tracks which events the user attended",
                        2,
                        false,
                        0,
                        [1,3,5]
                    ),
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(true);
    });
    
    it("Fails when at least one state isn't fulfilled", () => {
        const sample_achievement = new achievement(
            71,
            "Fully Prepped",
            "Awarded for setting your profile an using the app.",
            new statisticList(
                [
                    new statistic(
                        2,
                        "Backup Email Set",
                        "Tracks if user has a backup email",
                        0,
                        true,
                        0,
                        []
                    ),
                    new statistic(
                        3,
                        "Major Set",
                        "Tracks if user has set a major",
                        0,
                        true,
                        0,
                        []
                    ),
                    new statistic(
                        4,
                        "Clicks Made",
                        "Tracks number of clicks in the app",
                        1,
                        false,
                        999,
                        []
                    ),
                    new statistic(
                        5,
                        "Events Attended",
                        "Tracks which events the user attended",
                        2,
                        false,
                        0,
                        [1,2,3]
                    ),
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });
});
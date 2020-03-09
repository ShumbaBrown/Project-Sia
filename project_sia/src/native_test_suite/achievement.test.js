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
                {
                    id: 256,
                    name: "Sample Stat A",
                    description: "Given Description A",
                    isBoolean: false,
                    flag: false,
                    quantity: 3
                },
                {
                    id: 985,
                    name: "Sample Stat B",
                    description: "Given Description B",
                    isBoolean: true,
                    flag: true,
                    quantity: 0
                }
            ]
        );
    
        const expected_achievement = {
            id: 123,
            name: 'Sample',
            description: 'Sample desc',
            state_requirements: [
                {
                    id: 256,
                    name: "Sample Stat A",
                    description: "Given Description A",
                    isBoolean: false,
                    flag: false,
                    quantity: 3
                },
                {
                    id: 985,
                    name: "Sample Stat B",
                    description: "Given Description B",
                    isBoolean: true,
                    flag: true,
                    quantity: 0
                }
            ]
        };
    
        expect(generated_achievement).toEqual(expected_achievement);
    });
});

describe("Achievement verification tests", () => {
    const sample_user_state = new statisticList(
        [
            {
                id: 1,
                name: "Events Created",
                description: "Tracks user made events",
                isBoolean: false,
                flag: false,
                quantity: 5
            },
            {
                id: 2,
                name: "Backup Email Set",
                description: "Tracks if user has a backup email",
                isBoolean: true,
                flag: true,
                quantity: 0
            },
            {
                id: 3,
                name: "Major Set",
                description: "Tracks if user has set a major",
                isBoolean: true,
                flag: false,
                quantity: 0
            },
            {
                id: 4,
                name: "Clicks Made",
                description: "Tracks Number of clicks in the app",
                isBoolean: false,
                flag: false,
                quantity: 17
            }
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
                        false,
                        false,
                        5
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
                        false,
                        false,
                        7
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
                        true,
                        true,
                        0
                    )
            ])
        );
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
                        true,
                        false,
                        0
                    )
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });
    
    it("Passed when all states are matched", () => {
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
                        true,
                        true,
                        0
                    ),
                    new statistic(
                        3,
                        "Major Set",
                        "Tracks if user has set a major",
                        true,
                        false,
                        0
                    ),
                    {
                        id: 4,
                        name: "Clicks Made",
                        description: "Tracks Number of clicks in the app",
                        isBoolean: false,
                        flag: false,
                        quantity: 3
                    }

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
                        true,
                        true,
                        0
                    ),
                    new statistic(
                        3,
                        "Major Set",
                        "Tracks if user has set a major",
                        true,
                        true,
                        0
                    ),
                    {
                        id: 4,
                        name: "Clicks Made",
                        description: "Tracks Number of clicks in the app",
                        isBoolean: false,
                        flag: false,
                        quantity: 0
                    }
            ])
        );
        expect(sample_achievement.areRequirementsMet(sample_user_state)).toEqual(false);
    });
});
import statistic from '../../../sia-react-native/classes/statistic';

describe("Statistic initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_statistic = new statistic();

        const expected_statistic = {
            name: "UNSET",
            description: "UNSET",
            isBoolean: false,
            flag: false,
            quantity: 0
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("declares a object based on passed parameters", () => {
        const generated_statistic = new statistic(
            "Sample Stat",
            "Given Description",
            true,
            true,
            5
        );

        const expected_statistic = {
            name: "Sample Stat",
            description: "Given Description",
            isBoolean: true,
            flag: true,
            quantity: 5
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });
});

describe("Quantity Statistic Modification",() => {
    it("successfully increments by default value", () => {
        let generated_statistic = new statistic(
            "Events Created",
            "Number of events this user has made",
            false,
            false,
            0
        );

        generated_statistic.increment();

        const expected_statistic = {
            name: "Events Created",
            description: "Number of events this user has made",
            isBoolean: false,
            flag: false,
            quantity: 1
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("successfully increments by passed value", () => {
        let generated_statistic = new statistic(
            "Events Created",
            "Number of events this user has made",
            false,
            false,
            0
        );

        generated_statistic.increment(4);

        const expected_mid_statistic = {
            name: "Events Created",
            description: "Number of events this user has made",
            isBoolean: false,
            flag: false,
            quantity: 4
        };

        

        expect(generated_statistic).toEqual(expected_mid_statistic);

        generated_statistic.increment(2);

        const expected_end_statistic = {
            name: "Events Created",
            description: "Number of events this user has made",
            isBoolean: false,
            flag: false,
            quantity: 6
        };

        expect(generated_statistic).toEqual(expected_end_statistic);
    });
});

describe("Checkbox Statistic Modification",() => {
    it("successfully flags with default value", () => {
        let generated_statistic = new statistic(
            "Backup Email Established",
            "Identifies if you have set up a backup email",
            true,
            false,
            0
        );

        generated_statistic.changeFlag();

        const expected_statistic = {
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            isBoolean: true,
            flag: true,
            quantity: 0
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("successfully flags with passed value", () => {
        let generated_statistic = new statistic(
            "Backup Email Established",
            "Identifies if you have set up a backup email",
            true,
            false,
            0
        );

        generated_statistic.changeFlag();

        const expected_mid_statistic = {
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            isBoolean: true,
            flag: true,
            quantity: 0
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);
        
        generated_statistic.changeFlag(false);

        const expected_end_statistic = {
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            isBoolean: true,
            flag: false,
            quantity: 0
        };

        expect(generated_statistic).toEqual(expected_end_statistic);
    });
});
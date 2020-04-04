import statistic from '../../../sia-react-native/classes/statistic';

describe("Statistic initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_statistic = new statistic();

        const expected_statistic = {
            id: -1,
            name: "UNSET",
            description: "UNSET",
            statistic_type: 0,
            flag: false,
            quantity: 0,
            arr: []
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("declares a object based on passed parameters", () => {
        const generated_statistic = new statistic(
            123,
            "Sample Stat",
            "Given Description",
            1,
            true,
            5,
            [1,2]
        );

        const expected_statistic = {
            id: 123,
            name: "Sample Stat",
            description: "Given Description",
            statistic_type: 1,
            flag: true,
            quantity: 5,
            arr: [1,2],
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });
});

describe("Checkbox Statistic Modification",() => {
    it("successfully flags with default value", () => {
        let generated_statistic = new statistic(
            123,
            "Backup Email Established",
            "Identifies if you have set up a backup email",
            0,
            false,
            0,
            []
        );

        generated_statistic.changeFlag();

        const expected_statistic = {
            id: 123,
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            statistic_type: 0,
            flag: true,
            quantity: 0,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("successfully flags with passed value", () => {
        let generated_statistic = new statistic(
            123,
            "Backup Email Established",
            "Identifies if you have set up a backup email",
            0,
            true,
            0,
            []
        );

        generated_statistic.changeFlag();

        const expected_mid_statistic = {
            id: 123,
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            statistic_type: 0,
            flag: true,
            quantity: 0,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);
        
        generated_statistic.changeFlag(false);

        const expected_end_statistic = {
            id: 123,
            name: "Backup Email Established",
            description: "Identifies if you have set up a backup email",
            statistic_type: 0,
            flag: false,
            quantity: 0,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_end_statistic);
    });
});

describe("Quantity Statistic Modification",() => {
    it("successfully increments by default value", () => {
        let generated_statistic = new statistic(
            123,
            "Events Created",
            "Number of events this user has made",
            1,
            false,
            5,
            []
        );

        generated_statistic.increment();

        const expected_statistic = {
            id: 123,
            name: "Events Created",
            description: "Number of events this user has made",
            statistic_type: 1,
            flag: false,
            quantity: 6,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_statistic);
    });

    it("successfully increments by passed value", () => {
        let generated_statistic = new statistic(
            123,
            "Events Created",
            "Number of events this user has made",
            1,
            false,
            5,
            []
        );

        generated_statistic.increment(4);

        const expected_mid_statistic = {
            id: 123,
            name: "Events Created",
            description: "Number of events this user has made",
            statistic_type: 1,
            flag: false,
            quantity: 9,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);

        generated_statistic.increment(2);

        const expected_end_statistic = {
            id: 123,
            name: "Events Created",
            description: "Number of events this user has made",
            statistic_type: 1,
            flag: false,
            quantity: 11,
            arr: [],
        };

        expect(generated_statistic).toEqual(expected_end_statistic);
    });
});

describe("Array/List Statistic Modification",() => {
    it("successfully adds items to the arr", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            []
        );

        generated_statistic.addToList(11);

        const expected_mid_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [11],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);

        generated_statistic.addToList(15);
        generated_statistic.addToList(17);
        generated_statistic.addToList(19);

        const expected_final_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [11,15,17,19],
        };

        expect(generated_statistic).toEqual(expected_final_statistic);
    });
    
    it("successfully removes a single item", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            [1,2,3,4,5]
        );
        
        let message = generated_statistic.removeFromList(3);

        const expected_mid_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,4,5],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);
        expect(message).toEqual(true);

        message = generated_statistic.removeFromList(4);

        const expected_final_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,5],
        };

        expect(generated_statistic).toEqual(expected_final_statistic);
        expect(message).toEqual(true);
    });

    it("successfully removes multiple instances of an item", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            [1,2,4,4,3,4,1]
        );
        
        let message = generated_statistic.removeFromList(4,2);

        const expected_mid_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,3,4,1],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);
        expect(message).toEqual(true);

        message = generated_statistic.removeFromList(1,2);

        const expected_final_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [2,3,4],
        };

        expect(generated_statistic).toEqual(expected_final_statistic);
        expect(message).toEqual(true);
    });

    it("successfully identifies when it cannot remove enough instances", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            [1,2,3,4,5]
        );
        
        let message = generated_statistic.removeFromList(9);

        const expected_mid_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,3,4,5],
        };

        expect(generated_statistic).toEqual(expected_mid_statistic);
        expect(message).toEqual(false);

        message = generated_statistic.removeFromList(4,2);

        const expected_final_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,3,5],
        };

        expect(generated_statistic).toEqual(expected_final_statistic);
        expect(message).toEqual(false);
    });

    it("successfully identifies if an item is in its list", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            [1,2,3,4,5]
        );
        
        let message = generated_statistic.isItemInList(2);

        const expected_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,3,4,5],
        };

        expect(generated_statistic).toEqual(expected_statistic);
        expect(message).toEqual(true);
    });

    it("successfully identifies if an item is not in its list", () => {
        let generated_statistic = new statistic(
            123,
            "Events Attended",
            "Identifies which events the user has attended",
            2,
            false,
            0,
            [1,2,3,4,5]
        );
        
        let message = generated_statistic.isItemInList(9);

        const expected_statistic = {
            id: 123,
            name: "Events Attended",
            description: "Identifies which events the user has attended",
            statistic_type: 2,
            flag: false,
            quantity: 0,
            arr: [1,2,3,4,5],
        };

        expect(generated_statistic).toEqual(expected_statistic);
        expect(message).toEqual(false);
    });
});
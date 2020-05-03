import statistic from '../../../sia-react-native/classes/statistic';
import statisticList from '../../../sia-react-native/classes/statisticList.js';


describe("Statistic List initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_statistic_list = new statisticList();
    
        const expected_statistic_list = {
            statistics: []
        };

        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });
    
    it("declares an object based on passed parameters", () => {
        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            985,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );
            const statistic_c = new statistic(
                777,
                "Sample Stat C",
                "Given Description C",
                2,
                false,
                0,
                [1,2,3]
                );

        const generated_statistic_list = new statisticList([statistic_a,statistic_b,statistic_c]);
    
        const expected_statistic_list = {
            statistics: [
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
    
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });
});

describe("Statistic List modification tests",() => {
    it("can successfully add to the statistic list", () => {
        const generated_statistic_list = new statisticList();

        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        
            const expected_statistic_list = {
                statistics: [
                    new statistic(
                        256,
                        "Sample Stat A",
                        "Given Description A",
                        1,
                        false,
                        3,
                        []
                    )
                ]
            };

        generated_statistic_list.addStatistic(statistic_a)
        
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });

    
    it("can successfully remove a statistic by ID", () => {
        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            985,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );

        const generated_statistic_list = new statisticList([statistic_a,statistic_b]);

        let response = generated_statistic_list.removeStatisticByID(256);
        

        const expected_statistic_list = {
            statistics: [
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
        
        expect(response).toEqual(0);
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });

    it("can successfully indicate when it cannot remove by id", () => {
        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            985,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );

        const generated_statistic_list = new statisticList([statistic_a,statistic_b]);

        let response = generated_statistic_list.removeStatisticByID(123);

        const expected_statistic_list = {
            statistics: [
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
                )
            ]
        };
        
        expect(response).toEqual(-1);
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });

    it("can successfully get a statistic by id", () => {
        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            985,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );


        const generated_statistic_list = new statisticList([statistic_a,statistic_b]);

        let response = generated_statistic_list.getStatisticByID(256);

        let expected_response = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        

            const expected_statistic_list = {
                statistics: [
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
                    )
                ]
            };
        

        expect(response.length).toEqual(2);
        expect(response[0]).toEqual(expected_response);
        expect(response[1]).toEqual(true);
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });

    it("can successfully indicate when it cannot get id", () => {
        const statistic_a = new statistic(
            256,
            "Sample Stat A",
            "Given Description A",
            1,
            false,
            3,
            []
            );
        const statistic_b = new statistic(
            985,
            "Sample Stat B",
            "Given Description B",
            0,
            true,
            0,
            []
            );


        const generated_statistic_list = new statisticList([statistic_a,statistic_b]);

        let response = generated_statistic_list.getStatisticByID(123);

        const expected_statistic_list = {
            statistics: [
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
                )
            ]
        };

        expect(response.length).toEqual(2);
        expect(response[0]).toEqual(new statistic());
        expect(response[1]).toEqual(false);
        expect(generated_statistic_list).toEqual(expected_statistic_list);
    });
});
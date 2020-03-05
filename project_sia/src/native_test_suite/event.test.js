import event from '../../../sia-react-native/classes/event';

describe("Event initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_event = new event();
    
        const expected_event = {
            id: -1,
            name: 'UNSET',
            description: 'UNSET',
            location: 'UNSET',
            start_date_time: new Date(),
            end_date_time: new Date(),
            tags: []
        };

        expect(generated_event).toEqual(expected_event);
    });
    
    it("declares an object based on passed parameters", () => {
        const generated_event = new event(
            123,
            'Sample',
            'Sample desc',
            'Sample location',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
    
        const expected_event = {
            id: 123,
            name: 'Sample',
            description: 'Sample desc',
            location: 'Sample location',
            start_date_time: new Date('March 15, 2012 9:31:00'),
            end_date_time: new Date('March 17, 2012 9:53:00'),
            tags: ['Freshman','Computer Science']
        };
    
        expect(generated_event).toEqual(expected_event);
    });
});

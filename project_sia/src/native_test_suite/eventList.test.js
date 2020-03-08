import event from '../../../sia-react-native/classes/event';
import eventList from '../../../sia-react-native/classes/eventList';

describe("Event List initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_event_list = new eventList();
    
        const expected_event_list = {
            events: []
        };

        expect(generated_event_list).toEqual(expected_event_list);
    });
    
    it("declares an object based on passed parameters", () => {
        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        const event_b = new event(
            456,
            'Sample B',
            'Sample desc B',
            'Sample location B',
            new Date('March 19, 2012 9:31:00'),
            new Date('March 20, 2012 9:53:00'),
            ['Senior','Mechanical Engineering']
            );

        const generated_event_list = new eventList([event_a,event_b]);
    
        const expected_event_list = {
            events: [
                {
                    id: 123,
                    name: 'Sample A',
                    description: 'Sample desc A',
                    location: 'Sample location A',
                    start_date_time: new Date('March 15, 2012 9:31:00'),
                    end_date_time: new Date('March 17, 2012 9:53:00'),
                    tags: ['Freshman','Computer Science']
                },
                {
                    id: 456,
                    name: 'Sample B',
                    description: 'Sample desc B',
                    location: 'Sample location B',
                    start_date_time: new Date('March 19, 2012 9:31:00'),
                    end_date_time: new Date('March 20, 2012 9:53:00'),
                    tags: ['Senior','Mechanical Engineering']
                }
            ]
        };
    
        expect(generated_event_list).toEqual(expected_event_list);
    });
});

describe("Event List modification tests",() => {
    it("can successfully add to the event list", () => {
        const generated_event_list = new eventList();

        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        
            const expected_event_list = {
                events: [
                    {
                        id: 123,
                        name: 'Sample A',
                        description: 'Sample desc A',
                        location: 'Sample location A',
                        start_date_time: new Date('March 15, 2012 9:31:00'),
                        end_date_time: new Date('March 17, 2012 9:53:00'),
                        tags: ['Freshman','Computer Science']
                    }
                ]
            };

        generated_event_list.addEvent(event_a)
        
        expect(generated_event_list).toEqual(expected_event_list);
    });

    
    it("can successfully remove an event by ID", () => {
        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        const event_b = new event(
            456,
            'Sample B',
            'Sample desc B',
            'Sample location B',
            new Date('March 19, 2012 9:31:00'),
            new Date('March 20, 2012 9:53:00'),
            ['Senior','Mechanical Engineering']
            );

        const generated_event_list = new eventList([event_a,event_b]);

        let response = generated_event_list.removeEventByID(123);
        

        const expected_event_list = {
            events: [
                {
                    id: 456,
                    name: 'Sample B',
                    description: 'Sample desc B',
                    location: 'Sample location B',
                    start_date_time: new Date('March 19, 2012 9:31:00'),
                    end_date_time: new Date('March 20, 2012 9:53:00'),
                    tags: ['Senior','Mechanical Engineering']
                }
            ]
        };
        
        expect(response).toEqual(0);
        expect(generated_event_list).toEqual(expected_event_list);
    });

    it("can successfully indicate when it cannot remove by id", () => {
        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        const event_b = new event(
            456,
            'Sample B',
            'Sample desc B',
            'Sample location B',
            new Date('March 19, 2012 9:31:00'),
            new Date('March 20, 2012 9:53:00'),
            ['Senior','Mechanical Engineering']
            );

        const generated_event_list = new eventList([event_a,event_b]);

        let response = generated_event_list.removeEventByID(789);

        const expected_event_list = {
            events: [
                {
                    id: 123,
                    name: 'Sample A',
                    description: 'Sample desc A',
                    location: 'Sample location A',
                    start_date_time: new Date('March 15, 2012 9:31:00'),
                    end_date_time: new Date('March 17, 2012 9:53:00'),
                    tags: ['Freshman','Computer Science']
                },
                {
                    id: 456,
                    name: 'Sample B',
                    description: 'Sample desc B',
                    location: 'Sample location B',
                    start_date_time: new Date('March 19, 2012 9:31:00'),
                    end_date_time: new Date('March 20, 2012 9:53:00'),
                    tags: ['Senior','Mechanical Engineering']
                }
            ]
        };
        
        expect(response).toEqual(-1);
        expect(generated_event_list).toEqual(expected_event_list);
    });

    it("can successfully get an event by id", () => {
        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        const event_b = new event(
            456,
            'Sample B',
            'Sample desc B',
            'Sample location B',
            new Date('March 19, 2012 9:31:00'),
            new Date('March 20, 2012 9:53:00'),
            ['Senior','Mechanical Engineering']
            );

        const generated_event_list = new eventList([event_a,event_b]);

        let response = generated_event_list.getEventByID(123);

        let expected_response = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        

        const expected_event_list = {
            events: [
                {
                    id: 123,
                    name: 'Sample A',
                    description: 'Sample desc A',
                    location: 'Sample location A',
                    start_date_time: new Date('March 15, 2012 9:31:00'),
                    end_date_time: new Date('March 17, 2012 9:53:00'),
                    tags: ['Freshman','Computer Science']
                },
                {
                    id: 456,
                    name: 'Sample B',
                    description: 'Sample desc B',
                    location: 'Sample location B',
                    start_date_time: new Date('March 19, 2012 9:31:00'),
                    end_date_time: new Date('March 20, 2012 9:53:00'),
                    tags: ['Senior','Mechanical Engineering']
                }
            ]
        };
        

        expect(response.length).toEqual(2);
        expect(response[0]).toEqual(expected_response);
        expect(response[1]).toEqual(false);
        expect(generated_event_list).toEqual(expected_event_list);
    });

    it("can successfully indicate when it cannot get id", () => {
        const event_a = new event(
            123,
            'Sample A',
            'Sample desc A',
            'Sample location A',
            new Date('March 15, 2012 9:31:00'),
            new Date('March 17, 2012 9:53:00'),
            ['Freshman','Computer Science']
            );
        const event_b = new event(
            456,
            'Sample B',
            'Sample desc B',
            'Sample location B',
            new Date('March 19, 2012 9:31:00'),
            new Date('March 20, 2012 9:53:00'),
            ['Senior','Mechanical Engineering']
            );

        const generated_event_list = new eventList([event_a,event_b]);

        let response = generated_event_list.getEventByID(789);

        const expected_event_list = {
            events: [
                {
                    id: 123,
                    name: 'Sample A',
                    description: 'Sample desc A',
                    location: 'Sample location A',
                    start_date_time: new Date('March 15, 2012 9:31:00'),
                    end_date_time: new Date('March 17, 2012 9:53:00'),
                    tags: ['Freshman','Computer Science']
                },
                {
                    id: 456,
                    name: 'Sample B',
                    description: 'Sample desc B',
                    location: 'Sample location B',
                    start_date_time: new Date('March 19, 2012 9:31:00'),
                    end_date_time: new Date('March 20, 2012 9:53:00'),
                    tags: ['Senior','Mechanical Engineering']
                }
            ]
        };

        expect(response.length).toEqual(2);
        expect(response[0]).toEqual(new event());
        expect(response[1]).toEqual(false);
        expect(generated_event_list).toEqual(expected_event_list);
    });
});


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
        expect(response[1]).toEqual(true);
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

        //date-time excluded due to different generation states during
        //test run times
        let new_event = jasmine.objectContaining({
            id: -1,
            name: 'UNSET',
            description: 'UNSET',
            location: 'UNSET',
            tags: []
        })

        expect(response.length).toEqual(2);
        expect(response[0]).toEqual(new_event);
        expect(response[1]).toEqual(false);
        expect(generated_event_list).toEqual(expected_event_list);
    });
});

describe("Event List filtering tests",() => {
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
        ['Senior','Mechanical Engineering','Sports']
        );
    const event_c = new event(
        789,
        'Sample C',
        'Sample desc C',
        'Sample location C',
        new Date('March 10, 2012 9:31:00'),
        new Date('March 11, 2012 9:53:00'),
        ['Senior','Computer Science','Sports']
        );
    const event_d = new event(
        183,
        'Sample D',
        'Sample desc D',
        'Sample location D',
        new Date('March 27, 2012 9:31:00'),
        new Date('March 29, 2012 9:53:00'),
        ['Sophomore','Computer Science']
        );
    const event_e = new event(
        938,
        'Sample E',
        'Sample desc E',
        'Sample location E',
        new Date('March 22, 2012 9:31:00'),
        new Date('March 30, 2012 9:53:00'),
        ['Junior','Biology']
        );

    const generated_event_list = new eventList([event_a,event_b,event_c,event_d,event_e]);
    
    it("can successfully obtain a filtered list of events", () => {
        const search_tags = ["Sports"];
        
        const expected_filtered_list = [event_b,event_c];
        const generated_filtered_list = generated_event_list.filterEventListByTags(search_tags);
        
        expect(generated_filtered_list).toEqual(expected_filtered_list);
    });

    it("can successfully sort a list by number of overlaps", () => {
        const search_tags = ["Senior","Computer Science","Sports"];
        
        const expected_filtered_list = [event_c,event_b,event_a,event_d];
        const generated_filtered_list = generated_event_list.filterEventListByTags(search_tags);
        
        expect(generated_filtered_list).toEqual(expected_filtered_list);
    });

    it("returns an empty list of no events match the tags", () => {
        const search_tags = ["Graduate","Arts"];
        
        const expected_filtered_list = [];
        const generated_filtered_list = generated_event_list.filterEventListByTags(search_tags);
        
        expect(generated_filtered_list).toEqual(expected_filtered_list);
    });
});
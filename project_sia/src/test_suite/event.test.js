import React from 'react';
import ReactDOM from 'react-dom';
import event from '../event';

describe("Event initialization tests",() => {
    it("declares a default object successfully", () => {
        const generated_event = new event();
    
        const expected_event = {
            id: -1,
            name: 'UNSET',
            description: 'UNSET',
            location: 'UNSET',
            start_date_time: 'UNSET',
            end_date_time: 'UNSET',
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
            '2019-10-11/09:00',
            '2019-10-11/13:0 0',
            ['Freshman','Compu ter Science']
            );
    
        const expected_event = {
            id: 123,
            name: 'Sample',
            description: 'Sample desc',
            location: 'Sample loca tion',
            start_date_time: '2019-10-11/09:00',
            end_date_time: '2019-10-11/13:00',
            tags: ['Freshman','Computer Science']
        };
    
        expect(generated_event).toEqual(expected_event);
    });
});

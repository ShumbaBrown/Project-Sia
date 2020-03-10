import Notification from '../../../sia-react-native/classes/notification'
import ReactDOM from 'react-dom'
import React from 'react'
import { interval } from 'rxjs'

describe("Notification initialization", () => {
    const newNotification = new Notification()
    beforeEach(function() {
        spyOn(newNotification, 'toggleDisplay')
    })
    it("creates a new notification object", () => {
        
        const expectNotification = {
            state : {willDisplay: false},
            title : 'Notification Title',
            message : 'Notification Message',
            type : 'UNSET'
        }
        expect(newNotification.state).toEqual(expectNotification.state)
        expect(newNotification.title).toEqual(expectNotification.title)
        expect(newNotification.message).toEqual(expectNotification.message)
        expect(newNotification.type).toEqual(expectNotification.type)
    })

    it("changes display when toggled", () => {
        newNotification.toggleDisplay()
        expect(newNotification.toggleDisplay).toHaveBeenCalled()
    })
})

// TODO: More notifications will come as triggers are decided

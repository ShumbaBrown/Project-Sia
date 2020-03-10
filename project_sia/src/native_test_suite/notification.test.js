import Notification from '../../../sia-react-native/notification/notification'
import { interval } from 'rxjs'

describe("Notification initialization", () => {
    it("creates a new notification object", () => {
        const newNotification = new Notification()
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
})

// TODO: More notifications will come as triggers are decided
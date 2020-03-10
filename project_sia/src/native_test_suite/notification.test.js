import Notification from '../../../sia-react-native/classes/notification'
import { interval } from 'rxjs'

describe("Notification initialization", () => {
    it("creates a new notification object", () => {
        const newNotification = new Notification()

        const expectNotification = {
            state : {willDisplay: false, tags: []},
            title : 'Notification Title',
            message : 'Notification Message',
            type : 'UNSET'
        }
        expect(newNotification).toEqual(expectNotification)
    })
})
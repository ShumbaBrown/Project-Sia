import ActionButton from 'react-native-action-button';
import EventCard from "./EventCard";
import event from '../classes/event.js'
import events from '../classes/eventList.js'

/*Event list class holds a collection of events and tackles
functions performed on an event collection.
Examples include event searching, event addition, etc.
*/

class EventListFront extends React.Component {

    handleAddEvent = () => {
        this.props.navigation.navigate('form')
    };

    render() {
        return [
            <FlatList
                key="flatlist"
                style={styles.list}
                data={this.state.events}
                renderItem={({ item, separators }) => (<EventCard event={item} />)}
                keyExtractor={item => item.id}
            />,
            <ActionButton
                key="fab"
                buttonColor="rgba(231,76,60,1)"
                onPress={this.handleAddEvent}
            />,
        ];
    }
}


const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 5,
    },
});



export default EventListFront;

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
class Links extends Component {
    render() {
        return (
            <View style={styles.shadow}>
                <View style={{
                    backgroundColor: "#15202A", width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderRadius: 10, borderWidth: 1,
                    borderColor: '#38444C', marginBottom: 10
                }}>
                    <View style={{ flex: 2 }}>
                        <Image
                            style={{ flex: 1, width: null, height: null, borderRadius: 5, resizeMode: 'cover' }}
                            source={require('../../assets/link.png')} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>

                        <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>{this.props.name}</Text>


                    </View>
                </View>
            </View>
        );
    }
}
export default Links;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }
});

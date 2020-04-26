import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class SampEvents extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#15202A", height: 160, width: 160, marginLeft: 20, borderWidth: 1, borderRadius: 10, borderColor: '#38444C' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, borderRadius: 10, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 15 }}>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default SampEvents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

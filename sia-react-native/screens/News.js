import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class News extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>News</Text>
            </View>
        );
    }
}
export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15202A'
    }
});

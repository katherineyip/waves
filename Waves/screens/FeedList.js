import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import CompactList from '../components/CompactList';

function FeedList({navigation, route}) {
    return (
        <SafeAreaView style={styles.container}>
            <CompactList navigation={navigation} route={route}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FeedList;
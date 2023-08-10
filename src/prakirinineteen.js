import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform, Pressable, Alert, Animated } from 'react-native';

const PrakiriNineteenTest = ({ navigation }) => {


    const [choice, setChoice] = useState('')


    const [presentation, setPresentatiomn] = useState([
        {
            id: 1,
            name: 'Pause and allow them to speak'
        },
        {
            id: 2,
            name: 'Politely address the interruption'
        },
        {
            id: 3,
            name: 'Respond with understanding'
        },
        {
            id: 4,
            name: 'Express appreciation and continue'
        }
    ])
    const clickedButtonHandler = (value) => {
        setChoice(value);
    }
    return (

        <View style={Platform.OS === 'web' ? styles.webView : styles.containerWrapper}>

            <View style={{ marginLeft: 10 }}>
                <View style={styles.headingWrapper}>
                    <View style={styles.rowWrapper}>
                        <Image source={require('../src/assets/icons/image92.png')} style={styles.headingLeftImage} />
                        <Text style={styles.headingContainer}>Prakriti Test</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('PrakiriNinthTest')}>
                        <Image source={require('../src/assets/icons/close.png')} style={styles.headingLeftImage} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.progressBarOuterWrapper}>
                        <Text style={styles.progressPercentWrapper}>0% completed</Text>
                        <View style={styles.rightWrapper}>
                            <Image resizeMode='contain' source={require('./assets/icons/schedule_black.png')} style={styles.rightImage} />
                            <Text style={styles.minutesTextWrapper}>60 minutes</Text>
                        </View>

                    </View>
                    <View style={styles.progressBar}>
                        <Animated.View style={[StyleSheet.absoluteFill, styles.progressData]} />
                    </View>

                </View>
                <View >
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Image source={require('../src/assets/icons/24487858_69600821.png')} style={styles.headingCenterImage} />
                    </View>
                    <View style={{ marginTop: 20, marginRight: 10, }}>
                        <Text style={styles.levelHeading}>What is your response when someone kindly interrupts you during a conversation?</Text>

                    </View>

                    <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                        {
                            presentation.map((item) => {
                                return (
                                    <TouchableOpacity key={item.id} style={[styles.buttonWrapper, { backgroundColor: choice == item.name ? '#2073D3' : '#fff', }]} onPress={(e) => clickedButtonHandler(item.name)}>
                                        <Text style={[styles.buttonText, { color: choice == item.name ? '#fff' : '#2073D3', fontFamily: choice == item.name ? 'Poppins-SemiBold' : 'Poppins-Regular' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    containerWrapper: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    headingContainer: {
        fontSize: 18,
        color: '#363636',
        fontFamily: 'Poppins-Medium'
    },
    webView: {
        flex: 1,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 450,
        marginTop: 10,
    },
    headingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10,
    },
    rowWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headingLeftImage: {
        height: 35,
        width: 35
    },
    headingCenterImage: {
        height: 157,
        width: 157
    },
    levelHeading: {
        fontSize: 16,
        color: '#363636',
        fontFamily: 'Poppins-SemiBold'
    },

    buttonText: {
        color: '#2073D3',
        fontSize: 14,
        fontFamily: 'Poppins-Medium'
    },
    buttonWrapper: {
        borderWidth: 1,
        marginTop: 10,
        borderColor: '#2073D3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBarOuterWrapper: { justifyContent: 'space-between', flexDirection: 'row', marginBottom: 6 },
    progressPercentWrapper: { fontSize: 12, fontFamily: 'Poppins-Medium', color: '#B0B0B0' },
    rightWrapper: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    rightImage: { height: 15, width: 15 },
    minutesTextWrapper: { fontSize: 9, fontFamily: 'Poppins-Medium', color: '#B0B0B0', marginLeft: 5 },
    progressBar: {
        height: 10,
        width: '98%',
        borderColor: '#BFD3EF',
        borderWidth: 2,
        borderRadius: 10
    },
    progressData: {
        backgroundColor: "#2073D3", width: '5%',
        borderRadius: 10

    },


});

export default PrakiriNineteenTest;
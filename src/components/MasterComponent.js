import React, { Component } from "react"
import { View, Text, StyleSheet } from 'react-native'

export default class MasterComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Master</Text>
            </View>
        )
    }
}
import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Suggestion() {

    const [suggestion, setSuggestion] = useState([
        {
            id: 1,
            image: require('./../../assets/images/Home - Audio Listing/Container 26.png'),
        },
        {
            id: 2,
            image: require('./../../assets/images/Home - Audio Listing/Container 27.png'),
        },
    ]);

    return (
        <View style={{
            marginTop: 20
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 10
            }}>Suggestion for you</Text>
            <FlatList
                data={suggestion}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        <Image source={item.image} style={{
                            marginRight: 10,
                        }} />
                    </View>
                )}
            />
        </View>
    )
}
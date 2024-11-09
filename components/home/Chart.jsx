import { View, Text, Touchable, Pressable, Image, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function Chart() {

    const [chart, setChart] = useState([
        {
            id: 1,
            image: require('./../../assets/images/Home - Audio Listing/Container 31.png'),
        },
        {
            id: 2,
            image: require('./../../assets/images/Home - Audio Listing/Container 32.png'),
        },
        {
            id: 3,
            image: require('./../../assets/images/Home - Audio Listing/Container 33.png'),
        },
    ])

    return (
        <View style={{
            marginTop: 20,
        }} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }} >
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10
                }}>Chart</Text>
                <Pressable>
                    <Text style={{
                        color: 'gray'
                    }}>See all</Text>
                </Pressable>
            </View>
            <FlatList
                data={chart}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{
                        marginRight: 10,
                        width: 150,
                        justifyContent: 'center',
                    }}>
                        <Image source={item.image}
                        />
                        <Text style={{
                        }}>Daily chart-toppers update</Text>
                    </View>
                )}
            />
        </View>
    )
}
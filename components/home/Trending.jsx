import { View, Text, Pressable, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

export default function Trending() {

    const [trending, setTrending] = useState([
        {
            id: 1,
            nameAlbum: 'ME',
            nameArtist: 'Jessica Gonzalez',
            image: require('./../../assets/images/Home - Audio Listing/Image 45.png'),
        },
        {
            id: 2,
            nameAlbum: 'Magna nost',
            nameArtist: 'Brian Thomas',
            image: require('./../../assets/images/Home - Audio Listing/Image 46.png'),
        },
        {
            id: 3,
            nameAlbum: 'ME',
            nameArtist: 'Jessica Gonzalez',
            image: require('./../../assets/images/Home - Audio Listing/Image 47.png'),
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
                data={trending}
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
                            color: 'black',
                            fontWeight: 'bold'
                        }}>{item.nameAlbum}</Text>
                        <Text style={{
                            color: 'gray',
                        }}>{item.nameArtist}</Text>
                    </View>
                )}
            />
        </View>
    )
}
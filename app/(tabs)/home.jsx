import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/home/Header'
import Title from '../../components/home/Title'
import Suggestion from '../../components/home/Suggestion'
import Chart from '../../components/home/Chart'
import Trending from '../../components/home/Trending'
import Artist from '../../components/home/Artist'


export default function Home() {
    return (
        <View style={{
            padding: 20,
            marginTop: 20,
        }}>
            {/* header */}
            <Header />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false} >
                {/* title */}
                <Title />

                {/* suggestion */}
                <Suggestion />

                {/* chart */}

                <Chart />

                {/* trending */}

                <Trending />

                {/* artists */}

                <Artist />
            </ScrollView>
        </View>
    )
}
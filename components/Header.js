import { ImageBackground, ScrollView, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const background = {
    uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
}

const Header = () => {

    const types = [
        {
            id: '0',
            name: "IMAX",
        },
        {
            id: '1',
            name: "4DX",
        },
        {
            id: "2",
            name: "PXL",
        },
        {
            id: "3",
            name: "GOLD",
        },
        {
            id: "4",
            name: "PLAYHOUSE",
        },
        {
            id: "5",
            name: "ICE",
        },
        {
            id: "6",
            name: "LUXE",
        },
        {
            id: "7",
            name: "ONYX",
        }
    ]
    return (
        <View>
            <ImageBackground source={background} style={styles.background}>
                <Pressable style={styles.newReleaseModle}>
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'gray' }}>Releasing in 1 day</Text>


                    <View style={styles.centerTextandButtonForModal}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>VIKARANT RONA</Text>
                            <Text style={{ fontSize: 16, fontWeight: '400', color: 'gray', marginTop: 4 }}>U/A • KANNADA</Text>
                        </View>

                        <Pressable style={styles.bookButtonForModal}>
                            <Text style={{ fontSize: 14, fontWeight: '650', textAlign: "center" }} >BOOK NOW</Text>
                        </Pressable>
                    </View>


                    <Text style={{ marginTop: 8, fontSize: 15, fontWeight: "500" }}>Fantasy, Thriller, Action</Text>
                </Pressable>
            </ImageBackground>

            <View style={{ marginTop: 110 }}>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    {types.map((item, index) => (
                        <View style={styles.theaterTypeNames} key={index}>
                            <Text>{item.name}</Text>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </View>


    )
}

export default Header

const styles = StyleSheet.create({
    background: {
        height: 170,
        aspectRatio: 5 / 2,
    },
    newReleaseModle: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 130,
        padding: 10,
        borderRadius: 6,
        top: 140,
        left: 20,
        width: '85%'
    },
    bookButtonForModal: {
        backgroundColor: '#ffc40c',
        padding: 10,
        borderRadius: 6,
        marginRight: 10,
    },
    centerTextandButtonForModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    theaterTypeNames:{
        margin: 10,
        padding: 10,
        borderRadius: 6,
        borderColor: 'gray',
        borderWidth: 1,
    }
})
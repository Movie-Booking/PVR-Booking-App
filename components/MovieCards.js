import { StyleSheet, View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import movies from '../data/movies'
import Header from './Header'
import { useNavigation } from '@react-navigation/native'

const MovieCard = () => {
    const navigation = useNavigation();
    const moviesdata = movies;
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={Header}
                numColumns={2}
                data={moviesdata}
                renderItem={({ item }) => (
                    <Pressable style= {{margin:10 ,marginHorizontal:15}}> 
                        <Image style={styles.moviePoster} source={{ uri: item.image }} />
                        <Text style={{ fontSize: 16, fontWeight: "600", width: 170, marginTop: 10 }}>{item.name.substring(0,16)}</Text>
                        <Text style={{ marginTop: 4, fontSize: 15, color: "gray" }} > U/A • {item.language}</Text>
                        <Text style={{ marginTop: 4, fontSize: 14, fontWeight: "500" }}>{item.genre}</Text>
                        <Pressable style={styles.bookButton} onPress={()=> navigation.navigate('Movie', {name: item.name})}>
                            <Text style={{fontSize:14, fontWeight:'500', textAlign: 'center', color: 'white'}}>BOOK</Text>
                        </Pressable>
                    </Pressable>

                )}
            />
        </View>

    );
}

export default MovieCard

const styles = StyleSheet.create({
    moviePoster: {
        width: 160,
        height: 240,
        borderRadius: 6
    },
    bookButton: {
        backgroundColor: '#DC3558',
        padding: 10,
        borderRadius: 6,
        marginRight: 10,
        marginTop: 10,
        width: 100,
    },
})
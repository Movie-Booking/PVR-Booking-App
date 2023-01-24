import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0",flex:1}}>
      <Header/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
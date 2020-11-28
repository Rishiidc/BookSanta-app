import React from 'react'
import LottieView from 'lottie-react-native'
export default class santa extends React.Component {
    render(){
        return(
            <LottieView source = {require('../assets/Lotti gif.json')} style = {{width: "60%"}} autoPlay loop></LottieView>
        )
    }
}
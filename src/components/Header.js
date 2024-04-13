// // import libraries

// import { Text ,View} from "react-native";

// //create component
// const Header=()=>{
//     const {textStyling,viewStyle} = styles;

//     return(
//         <View style = {viewStyle}>
//             <Text style = {textStyling}>Cars</Text>
//         </View>
//     )
// }

// const styles = {
//     textStyling:{
//         fontSize:22
//     },
//     viewStyle:{
//                 backgroundColor:'gainsboro',
//                 height:70,
//                 justifyContent:'center',
//                 alignItems:'center'
//     }
// }

// // make available this component to other component
// export default Header

// Header.js

import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyling, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
};

const styles = {
    textStyling: {
        fontSize: 22,
    },
    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default Header;
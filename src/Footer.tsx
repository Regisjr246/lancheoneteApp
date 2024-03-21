import React from "react";
import {Image, StyleSheet, TouchableOpacity, View } from "react-native";



function Footer(): React.JSX.Element {
    
    return (




<View style={styles.footer}>

<TouchableOpacity>
    <Image source={require('./assets/images/home.png')} style={styles.footerIcon} />
</TouchableOpacity>

<TouchableOpacity>
    <Image source={require('./assets/images/menu.png')} style={styles.footerIcon} />
</TouchableOpacity>

<TouchableOpacity>
    <Image source={require('./assets/images/shop.png')} style={styles.footerIcon} />
</TouchableOpacity>

<TouchableOpacity>
    <Image source={require('./assets/images/user.png')} style={styles.footerIcon} />
</TouchableOpacity>

</View>)}


const styles=StyleSheet.create({
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingVertical: 10,
        
    },
    footerIcon: {
        width: 40,
        height: 40
    },
});


export default Footer;
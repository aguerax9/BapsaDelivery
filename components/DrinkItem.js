import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class DrinkItem extends React.Component {

    render() {
        const drink = this.props.drink;
        return(
            <View style={styles.main_container}>
                <Image 
                    style={styles.image}
                    source={drink.poster_path}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.name_text}>{drink.name}</Text>
                        <Text style={styles.degre_text}>{drink.degre}%</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text
                            style={styles.description_text}
                            numberOfLines={6}
                        >
                            {drink.overview}
                        </Text>
                    </View>
                    <View style={styles.owner_container}>
                        <Text style={styles.owner_text}>{drink.brasseur}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 200,
        flexDirection: 'row',
    },
    image: {
        height: 190,
        width: 120,
        // backgroundColor: 'gray',
    },
    content_container: {
        flex: 1,
        margin: 5,
        paddingLeft: 5,
        backgroundColor: '#F4F4F4',
    },
    header_container: {
        flex: 3,
        flexDirection: 'row',
    },
    name_text: {
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 20,
    },
    degre_text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#666666',
    },
    description_container: {
        flex: 7,
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
    },
    owner_container: {
        flex: 2,
    },
    owner_text: {
        textAlign: 'right',
    },
});
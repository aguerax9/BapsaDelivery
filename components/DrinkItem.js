import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class DrinkItem extends React.Component {

    render() {
        const { film } = this.props;
        console.log(film.poster_path)
        return(
            <TouchableOpacity style={styles.main_container} onPress={() => {}}>
                <Image style={styles.image} 
                        source={film.poster_path}
                />
                <View style={styles.info_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.name}</Text>
                        <Text style={styles.vote_text}>{film.degre}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{film.brasseur}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 200,
        flexDirection: 'row',
        marginBottom: 5,
    },
    image: {
        height: 200,
        width: 120,
        backgroundColor: 'gray',
    },
    info_container: {
        flex: 1,
        padding: 5,
    },
    header_container: {
        flex: 3,
        flexDirection: 'row',
    },
    title_text: {
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 20,
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666',
    },
    description_container: {
        flex: 7,
    },
    description_text: {
        fontSize: 15,
        fontStyle: 'italic',
        color: '#666666',
    },
    date_container: {
        flex: 1,
    },
    date_text: {
        textAlign: 'right',
    },
    favorite_image: {
        height: 25,
        width: 25,
        marginRight: 5,
    }
});
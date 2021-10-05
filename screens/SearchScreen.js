import React, { useContext, useState } from 'react';
import { 
    Button,
    FlatList,
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
} from 'react-native';

import drinks from '../helpers/DrinkData';
import DrinkItem from '../components/DrinkItem';

class SearchScreen extends React.Component {
    render() {
        return(
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Nom de la boisson" />
                <Button title="Rechercher" onPress={() => {}} />
                <FlatList
                    data={drinks}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <DrinkItem drink={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 40,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 5,
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
    }
});

export default SearchScreen;
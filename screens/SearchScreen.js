import React, { useContext, useState } from 'react';
import { 
    Button, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
} from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';

const SearchScreen = () => {

    const { user, logout } = useContext(AuthContext);
    const [beerColor, setBeerColor] = useState('');
    const [whiskyColor, setWhiskyColor] = useState('');
    const [vodkaColor, setVodkaColor] = useState('');
    const [sodaColor, setSodaColor] = useState('');

    return(
        <ScrollView style={styles.main_container}>
            <View style={styles.menu_section}>
                <TouchableOpacity>
                    <Text style={styles.text_menu_item}>Bière</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text_menu_item}>Whisky</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text_menu_item}>Vodka</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text_menu_item}>Soda</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    menu_section: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 30, // to verify
    },
    text_menu_item: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: 'grey'
    }
});

export default SearchScreen;
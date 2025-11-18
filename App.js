// //exercise 3

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SectionList,
//   Image,
//   TouchableOpacity,
//   Alert,
//   SafeAreaView,
// } from 'react-native';

// const POKEMON_SECTIONS = [
//   {
//     title: 'Electric',
//     color: '#f7df5b',
//     icon: '⚡',
//     data: [
//       // Example cardNumbers — replace with actual card numbers you want
//       { id: 'pikachu', name: 'Pikachu', cardNumber: 1 },
//       { id: 'voltorb', name: 'Voltorb', cardNumber: 2 },
//     ],
//   },
//   {
//     title: 'Fire',
//     color: '#f4a261',
//     icon: '🔥',
//     data: [
//       { id: 'charmander', name: 'Charmander', cardNumber: 4 },
//       { id: 'growlithe', name: 'Growlithe', cardNumber: 5 },
//     ],
//   },
//   {
//     title: 'Water',
//     color: '#7ec8e3',
//     icon: '💧',
//     data: [
//       { id: 'squirtle', name: 'Squirtle', cardNumber: 7 },
//       { id: 'mudkip', name: 'Mudkip', cardNumber: 12 },
//     ],
//   },
// ];

// export default function App() {
//   const onAddPokemon = () => {
//     Alert.alert('Add Pokemon', 'Add Pokemon button (to be implemented)');
//   };

//   const onPressPokemon = (pokemon) => {
//     Alert.alert(pokemon.name, `You clicked ${pokemon.name} (card #${pokemon.cardNumber})`);
//   };

//   const renderItem = ({ item }) => {
//     // Use the URL pattern given in your task. Adjust cardNumber as needed.
//     const imageUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`;

//     return (
//       <TouchableOpacity style={styles.itemContainer} onPress={() => onPressPokemon(item)}>
//         <View style={styles.itemLeft}>
//           <Text style={styles.pokemonName}>{item.name}</Text>
//         </View>

//         <View style={styles.itemRight}>
//           <Image source={{ uri: imageUrl }} style={styles.pokemonImage} resizeMode="contain" />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const renderSectionHeader = ({ section }) => (
//     <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
//       <Text style={styles.sectionIcon}>{section.icon}</Text>
//       <Text style={styles.sectionTitle}>{section.title.toUpperCase()}</Text>
//     </View>
//   );

//   const itemSeparator = () => <View style={styles.itemSeparator} />;

//   return (
//     <SafeAreaView style={styles.safe}>
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.addButton} onPress={onAddPokemon}>
//           <Text style={styles.addButtonText}>ADD POKEMON</Text>
//         </TouchableOpacity>

//         <SectionList
//           sections={POKEMON_SECTIONS}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           renderSectionHeader={renderSectionHeader}
//           ItemSeparatorComponent={itemSeparator}
//           contentContainerStyle={styles.listContent}
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: { flex: 1, backgroundColor: '#fff' },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   // Add button (full width visually like the example)
//   addButton: {
//     backgroundColor: '#4f8ef7',
//     margin: 12,
//     paddingVertical: 10,
//     borderRadius: 6,
//     alignItems: 'center',
//     elevation: 2,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontWeight: '700',
//     letterSpacing: 1,
//   },

//   listContent: {
//     paddingHorizontal: 8,
//     paddingBottom: 28,
//   },

//   // Section header band
//   sectionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     borderRadius: 4,
//     marginTop: 12,
//     borderColor: '#e0e0e0',
//     borderWidth: 1,
//   },
//   sectionIcon: {
//     fontSize: 20,
//     marginRight: 8,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '800',
//     color: '#333',
//   },

//   // Item card
//   itemContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f4f8', // pale panel like example
//     paddingVertical: 18,
//     paddingHorizontal: 16,
//     marginTop: 8,
//     borderRadius: 2,
//     borderColor: '#d6d6d6',
//     borderWidth: 1,
//   },
//   itemLeft: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingRight: 12,
//   },
//   pokemonName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#222',
//   },
//   itemRight: {
//     width: 120,
//     height: 90,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pokemonImage: {
//     width: 300,
//     height: 100,
//     borderRadius: 6,
//     backgroundColor: '#fff',
//   },

//   // thin divider line between items
//   itemSeparator: {
//     height: 1,
//     backgroundColor: '#cfcfcf',
//     marginHorizontal: 6,
//   },
// });

//exercise 4

// App.js
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Alert,
} from 'react-native';

const COFFEE_SECTIONS = [
    {
        title: 'Hot Coffees',
        color: '#6f4e37',
        icon: '☕',
        data: [
            {
                id: 'latte',
                name: 'Caffe Latte',
                img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
            },
            {
                id: 'espresso',
                name: 'Espresso',
                img: 'https://kopikita.id/wp-content/uploads/2022/12/espresso-vs-expresso.jpg',
            },
        ],
    },
    {
        title: 'Iced Coffees',
        color: '#2a9d8f',
        icon: '🧊',
        data: [
            {
                id: 'iced_latte',
                name: 'Iced Latte',
                img: 'https://myeverydaytable.com/wp-content/uploads/ICEDLATTE_0_4.jpg',
            },
            {
                id: 'cold_brew',
                name: 'Cold Brew',
                img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
            },
        ],
    },
];

/**
 * ImageWithFallback
 * - shows an ActivityIndicator while loading
 * - on error, shows a simple fallback box
 */
function ImageWithFallback({ uri, style }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (error) {
        return (
            <View style={[style, styles.imageFallback]}>
                <Text style={styles.fallbackText}>Image unavailable</Text>
            </View>
        );
    }

    return (
        <View style={style}>
            <Image
                source={{ uri }}
                style={[StyleSheet.absoluteFill, { width: undefined, height: undefined }]}
                resizeMode="cover"
                onLoadEnd={() => setLoading(false)}
                onError={() => {
                    setLoading(false);
                    setError(true);
                }}
            />
            {loading && (
                <View style={[StyleSheet.absoluteFill, styles.loaderContainer]}>
                    <ActivityIndicator size="small" />
                </View>
            )}
        </View>
    );
}

export default function App() {
    const onPressItem = (item) => {
        Alert.alert(item.name, `You tapped ${item.name}`);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemRow} onPress={() => onPressItem(item)}>
            <View style={styles.itemText}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>Coffee description here</Text>
            </View>

            <ImageWithFallback uri={item.img} style={styles.itemImage} />
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
            <Text style={styles.sectionIcon}>{section.icon}</Text>
            <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Text style={styles.appTitle}>Coffee Drinks</Text>

                <SectionList
                    sections={COFFEE_SECTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    contentContainerStyle={styles.listContent}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#ffffff' },
    container: { flex: 1, paddingHorizontal: 12, backgroundColor: '#fff8f3' },

    appTitle: {
        fontSize: 26,
        fontWeight: '800',
        color: '#3b2f2f',
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 8,
    },

    listContent: { paddingBottom: 28, paddingTop: 6 },

    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginTop: 14,
        marginBottom: 6,
    },
    sectionIcon: { fontSize: 18, marginRight: 8 },
    sectionTitle: { fontSize: 16, fontWeight: '700', color: '#ffffff' },

    itemRow: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 8,
        elevation: 1,
    },

    itemText: { flex: 1, paddingRight: 10 },
    itemTitle: { fontSize: 18, fontWeight: '700', color: '#2b2b2b' },
    itemSubtitle: { fontSize: 12, color: '#757575', marginTop: 4 },

    itemImage: {
        width: 120,
        height: 80,
        borderRadius: 8,
        overflow: 'hidden', // important so Image respects borderRadius on Android
        backgroundColor: '#eee',
    },

    imageFallback: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
    },
    fallbackText: {
        color: '#666',
        fontSize: 12,
    },
    loaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    separator: { height: 8 },
});


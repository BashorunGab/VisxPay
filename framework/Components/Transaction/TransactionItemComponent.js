import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

const TransactionItemComponent = ({ transaction }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Text>
                    h
                </Text>
            </View>
            <View>
                <View style={styles.middleText}>
                    <Text style={{
                        marginRight:10
                    }}>
                        {transaction.name}
                        </Text>
                    <View >
                        <Text style={{
                            borderWidth: 1,
                            backgroundColor: 'black',
                            color:'white',
                            borderRadius: 20,
                            paddingVertical: 2,
                            paddingHorizontal: 6
                        }}>{transaction.amount}</Text>
                    </View>
                </View>
                <View>
                    <Text>Payment Id: {transaction.id}</Text>
                </View>
            </View>
            <View style={{
                borderRadius: 10,
                borderColor: "black",

            }}>
                <Text style={styles.timeBtn}>{transaction.time}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    timeBtn: {
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 20,
        paddingVertical: 10

    },
    imageContainer: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 400
    },
    middleText:{
        flex: 1,
        flexWrap:'nowrap',
        flexDirection: 'row'
    }
});

export default TransactionItemComponent


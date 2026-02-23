import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react'

export default function LojaCard({ loja }) {
    return (
        <TouchableOpacity style={Styles.card}>
            <Image source={{ uri: loja.imagem }} style={styles.Image}/>
            <View style={styles.info}>
            <Text style={styles.nome}>{loja.nome}</Text>
            <Text style={styles.categoria}>{loja.categoria}</Text>
            <Text style={styles.distancia}>{loja.distancia}</Text>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        blackgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        elevation: 3, //sombra no Android
        shadowColor: '#000', //sombra no IOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    info: {
        marginLeft: 15,
        justifyContent: 'center',
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    categoria: {
        color: '#666',
        fontSize: 14,
    },
    distancia: {
        color: '#27ae60',
        fontSize: 12,
    },
})

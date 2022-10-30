import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CardProduct = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.segundocont}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.subtitulo}>
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="fire" size={40} color="red" />
            {props.subtitulo}
          </IconComponentProvider>
        </Text>
        <Text style={styles.preco}>{props.preco}</Text>
      </View>
      <View>
        <Image style={styles.imagem} source={props.imagens} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "start",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  segundocont: {
    marginLeft: 13,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titulo: {
    fontSize: 23,
    fontWeight: "800",
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#C8C8C8",
    padding: 3,
  },

  imagem: {
    width: 110,
    height: 110,
    marginRight: 15,
  },

  preco: {
    color: "orange",
    fontSize: 30,
    fontWeight: "800",
  },
});
export default CardProduct;

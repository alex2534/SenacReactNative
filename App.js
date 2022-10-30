import { StatusBar } from "expo-status-bar";
import { StyleSheet,View} from "react-native";
import CardProduct from "./components/CardProduct"



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CardProduct titulo="Beef Burger" subtitulo="70 calorias" preco={"$12.00"}
imagens={{uri:"https://media.istockphoto.com/photos/delicious-hamburger-with-beef-cutlet-vegetables-and-onions-isolated-picture-id1329622513?s=612x612"}}
     />
      <CardProduct titulo="Pancakes" subtitulo="60 calorias" preco={"$15.00"}
        imagens={{uri:"https://media.istockphoto.com/photos/pancakes-with-berries-and-maple-syrup-picture-id161170090?s=612x612"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

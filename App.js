import { StatusBar } from "expo-status-bar";
import { StyleSheet,View} from "react-native";
import CardProduct from "./components/CardProduct"

const produtos = [
{
id: 1,
titulo:"Beef Burger",
 subtitulo: "70 calorias",
 preco: '$12.00',
alt: "foto de hamburger com vegetais e onions ",
imagens:{uri:"https://media.istockphoto.com/photos/delicious-hamburger-with-beef-cutlet-vegetables-and-onions-isolated-picture-id1329622513?s=612x612"}

}
,{
id: 2,
titulo: "Pancakes",
subtitulo:"60 calorias",
preco: '$15.00', 
alt: "foto de um maple syrup ",
imagens:{uri:"https://media.istockphoto.com/photos/pancakes-with-berries-and-maple-syrup-picture-id161170090?s=612x612"}
},


];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    {produtos.map((prod) => (
      <CardProduct 
        key={prod.id}
        titulo={prod.titulo}
        subtitulo={prod.subtitulo}
        preco={prod.preco}
        imagens={prod.imagens}
     />
      ))}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

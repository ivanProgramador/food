import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";

//inteface com base nod objeto food

export interface Foodprops {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<Foodprops[]>([]);

  useEffect(() => {
    async function getFoods() {
      //pegando oss dados da api
      const response = await fetch("http://192.168.0.4:3000/foods");

      //transsformando os dados em json
      const data = await response.json();

      //jogando os dados para o componente
      setFoods(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

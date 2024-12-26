import { View, Pressable, Text, Image } from "react-native";
import { Foodprops } from "..";

export function CardHorizontalFood({ food }: { food: Foodprops }) {
  return (
    <Pressable>
      <Image source={{ uri: food.image }} className="w-44 h-36 rounded-xl" />
      <Text>{food.name}</Text>
    </Pressable>
  );
}

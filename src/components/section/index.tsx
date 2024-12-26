import { View, Text, Pressable } from "react-native";

//como se trata de um componente reutilizavel ele será renderizado com base nas propriedades recebidas na interface

interface props {
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  label: string;
  action: () => void;
}

export function Section({ name, size, label, action }: props) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <Text className={`${size} font-semibold my-4`}>{name}</Text>

      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}

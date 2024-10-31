import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import "../global.css";
const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-3xl   font-semibold">index.jsx</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} className="mt-4 px-4 py-2  rounded-md">
        Go to Profile
      </Link>
    </View>
  );
};

export default RootLayout;

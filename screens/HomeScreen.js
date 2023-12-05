import React, { useLayoutEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { t } from "react-native-tailwindcss";
import { useNavigation } from "@react-navigation/native";
import {
  userIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text style={[]}>
        <View style={[t.flexRow, t.pB3, t.itemsCenter, t.mX2]}>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={[t.h8, t.w8, t.bgGray300, t.p4, t.roundedFull, t.mX2]}
          />
          <View>
            <Text style={[t.fontBold, t.textGray600, t.textXs]}>
              Deliver Now!
            </Text>
            <Text style={[t.fontBold, t.textXl]}>Current Location</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

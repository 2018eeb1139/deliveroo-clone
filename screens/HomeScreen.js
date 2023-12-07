import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={[t.bgWhite, t.pT5]}>
      <View style={[t.flexRow, t.pB3, t.itemsCenter, t.mX2]}>
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          style={[t.h8, t.w8, t.bgGray300, t.p4, t.roundedFull, t.mX2]}
        />
        <View style={[t.flex1]}>
          <Text style={[t.fontBold, t.textGray600, t.textXs]}>
            Deliver Now!
          </Text>
          <Text style={[t.flex, t.itemsCenter, t.fontBold, t.textXl]}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" style={[t.mT1]} />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View style={[t.flexRow, t.itemsCenter, t.mX2, t.pB2]}>
        <View
          style={[t.flexRow, t.flex1, t.bgGray200, t.mX2, t.p3, t.roundedFull]}
        >
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Search for Restaurants and Cuisines..."
            keyboardType="default"
            style={[t.wFull, t.mL2]}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView
        style={[t.bgGray100]}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* Categories */}
        <Categories />
        {/* FeaturedRow */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

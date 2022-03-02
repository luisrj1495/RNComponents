import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  Text,
  View,
} from "react-native";

import HeaderTitle from "../components/HeaderTitle";
import Divider from "./Home/FlatListMenu/Divider";

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: [
      "Batman",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
      "Superman",
      "Robin",
    ],
  },
  {
    casa: "Marvel Comics",
    data: [
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
      "Thor",
      "Spiderman",
      "Antman",
    ],
  },
  {
    casa: "Anime",
    data: [
      "Kenshin",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
      "Goku",
      "Saitama",
    ],
  },
];

const SectionListCustom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <HeaderTitle title={`Total casas ${casas.length}`} />
        )}
        renderSectionFooter={props => (
          <HeaderTitle
            title={`Total ${props.section.casa} ${props.section.data.length}`}
          />
        )}
        ItemSeparatorComponent={() => <Divider />}
        // SectionSeparatorComponent={() => <Divider />}
        stickySectionHeadersEnabled
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { casa } }) => (
          <View style={{ backgroundColor: "#cbcbcb" }}>
            <HeaderTitle title={casa} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SectionListCustom;

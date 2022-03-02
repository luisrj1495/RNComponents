import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  RefreshControl,
  Image,
  View,
  ActivityIndicator,
} from "react-native";

import HeaderTitle from "../components/HeaderTitle";

import FadeInImage from "../components/FadeInImage";

const InfiniteScroll = () => {
  const [nums, setNums] = React.useState([0, 1, 2, 3, 4, 5, 6]);

  const loadMore = () => {
    const newNums = Array.from(
      { length: 5 },
      (_, index) => nums.length + index,
    );

    setTimeout(() => {
      setNums(prev => prev.concat(newNums));
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListFooterComponent={() => (
          <View style={{ height: 150 }}>
            <ActivityIndicator size={50} color="#6f26e6" />
          </View>
        )}
        data={nums}
        keyExtractor={item => item.toString()}
        renderItem={info => (
          <FadeInImage uri={`https://picsum.photos/id/${info.index}/200/300`} />
        )}
        ListHeaderComponent={() => <HeaderTitle title="InfiniteScroll" />}
        onEndReached={loadMore}
        // Que tan lejos del final
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InfiniteScroll;

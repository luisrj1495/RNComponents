import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import HeaderTitle from "../components/HeaderTitle";

const PullRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3500);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            // progressBackgroundColor="red"
            colors={["white", "blue", "red"]}
            title="Loading"
            tintColor="red"
          />
        }>
        <HeaderTitle title="PullRefresh" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PullRefresh;


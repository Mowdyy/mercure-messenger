import React, { useEffect, useState } from "react";
import styles from "./Style";

import { View } from "react-native";
import User from "./User";
import useGetUserList from "../Hook/useGetUserList";

export default function UserList() {
  const [userList, setUserList] = useState([]);

  const getUserList = useGetUserList();

  useEffect(() => {
    getUserList().then((data) => setUserList(data.users));

    // const url = new URL("http://localhost:9090/.well-known/mercure");
    // url.searchParams.append("topic", "https://example.com/my-private-topic");

    // const eventSource = new EventSource(url, { withCredentials: true });
    // eventSource.onmessage = handleMessage;

    // return () => {
    //   eventSource.close();
    // };
  }, []);

  return (
    // OnClick on user open userPrivateChat
    //List of users
    <View style={styles.userList}>
      {userList.map((user: any) => (
        <User user={user} />
      ))}
    </View>
  );
}

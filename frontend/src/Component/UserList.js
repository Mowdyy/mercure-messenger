import { useContext, useEffect, useState } from "react";

import { userContext } from "../Context/UserContext";

import useGetUserList from "../Hook/useGetUserList";
import useBackendPing from "../Hook/useBackendPing";

export default function UserList() {
  const [userList, setUserList] = useState([]);
  const [loggedUser, setLoggedUser] = useContext(userContext);

  const getUserList = useGetUserList();
  const backendPing = useBackendPing();

  const handleSubmit = (e) => {
    console.log(loggedUser);
    e.preventDefault();
    const userId = e.target[0].value;
    backendPing(userId, "bonjour tout le monde").then((data) =>
      console.log(data)
    );
  };

  const handleMessage = (e) => {
    let message = JSON.parse(e.data).message;
    document
      .querySelector("h1")
      .insertAdjacentHTML(
        "afterend",
        `<div class="alert alert-success w-75 mx-auto">${message}</div>`
      );
    window.setTimeout(() => {
      const $alert = document.querySelector(".alert");
      $alert.parentNode.removeChild($alert);
    }, 2000);
    console.log(JSON.parse(e.data));
  };

  useEffect(() => {
    getUserList().then((data) => setUserList(data.users));

    const url = new URL("http://localhost:9090/.well-known/mercure");
    url.searchParams.append("topic", "https://example.com/my-private-topic");

    const eventSource = new EventSource(url, { withCredentials: true });
    eventSource.onmessage = handleMessage;

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1 className="m-5 text-center">Ping a user</h1>
      {userList.map((user) => (
        <form className="w-75 mx-auto mb-3" onSubmit={handleSubmit}>
          <button className="btn btn-dark w-100" type="submit" value={user.id}>
            {user.username}
          </button>
        </form>
      ))}
    </div>
  );
}

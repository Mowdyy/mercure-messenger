import { useEffect, useState } from "react";
import useGetUserList from "../Hook/useGetUserList";
import useSendMessage from "../Hook/useSendMessage";

export default function ChatRoom() {
  const [chatMsg, setChatMsg] = useState([]);
  const [userList, setUserList] = useState([]);

  const getUserList = useGetUserList();
  const sendMessage = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = e.target[0].value;
    sendMessage(userId).then((data) => {
      setChatMsg(data);
      console.log(data);
    });
  };

  const handleMessage = (e) => {
    document
      .querySelector("h1")
      .insertAdjacentHTML(
        "afterend",
        '<div class="alert alert-success w-75 mx-auto">Ping !</div>'
      );
    window.setTimeout(() => {
      const $alert = document.querySelector(".alert");
      $alert.parentNode.removeChild($alert);
    }, 2000);
    console.log(JSON.parse(e.data));
  };

  useEffect(() => {
    getUserList().then((data) => setUserList(data.users));

    //Subscriber - s'inscrire au message-topic
    const url = new URL("http://localhost:9090/.well-known/mercure");
    url.searchParams.append("topic", "https://example.com/message-topic");

    const eventSource = new EventSource(url, { withCredentials: true });
    eventSource.onmessage = handleMessage;

    return () => {
      eventSource.close();
    };
  }, [getUserList]);

  return (
    <div>
      <h1 className="m-5 text-center">Envoyer un message à </h1>
      {userList.map((user) => (
        <form className="w-75 mx-auto mb-3" onSubmit={handleSubmit}>
          <button className="btn btn-dark w-100" type="submit" value={user.id}>
            {user.username}
          </button>
          {/* créer un component qui envoi un message à l'utilisateur séléctionné */}
          <div>Le message:{chatMsg && chatMsg} </div>
          <input type="text" name="msg" />
        </form>
      ))}
    </div>
  );
}

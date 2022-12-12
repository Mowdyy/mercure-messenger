import { useEffect, useState } from "react";
import useSendMessage from "../Hook/useSendMessage";
import useGetChannelList from "../Hook/useGetChannelList";

export default function ChatRoom() {
  const [currentChannel, setCurrentChannel] = useState("");
  const [doMessage, setDoMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [mercureMsg, setMercureMsg] = useState("");

  const [channelList, setChannelList] = useState([]);
  const getChannelList = useGetChannelList();
  const sendMessage = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      // La variable data sera envoyée au controller
      content: message, // On transmet le message...
      channel: currentChannel.id, // ... Et le canal correspondant
    };

    sendMessage(data).then((data) => {
      document
        .querySelector("input")
        .insertAdjacentHTML(
          "afterend",
          '<div class="alert alert-success w-75 mx-auto">Message envoyé</div>'
        );
      window.setTimeout(() => {
        const $alert = document.querySelector(".alert");
        $alert.parentNode.removeChild($alert);
      }, 2000);
      setMercureMsg(data);
      // console.log(JSON.parse(e.data));
    });
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    getChannelList().then((data) => setChannelList(data));

    // S'abonner au topic mercure-chat
    const url = new URL("http://localhost:9090/.well-known/mercure");
    url.searchParams.append("topic", "https://example.com/mercure-chat");
    url.searchParams.append(
      "topic",
      `topic", "example.com/channel/${currentChannel.id}`
      // `topic", "example.com/channel/${currentChannel.id}/user/${currentUser.id}`
    );

    const eventSource = new EventSource(url, { withCredentials: true });
    eventSource.onmessage = handleMessage;

    return () => {
      eventSource.close();
    };
  }, [currentChannel.id, getChannelList]);

  return (
    <div>
      <h1 className="m-5 text-center">Chat-mercure </h1>
      {/* State to get one channel séélctionner un channel */}
      {doMessage ? (
        <>
          <h2 className="m-5 text-center">
            Envoyer un message sur le channel {currentChannel.name}
          </h2>
          <form
            className="w-75 mx-auto mb-3 justify-content-center row g-3"
            onSubmit={handleSubmit}
          >
            <div class="col-auto">Message</div>
            <div className="mb-3 w-30">
              <input
                type="text"
                className="form-control w-30"
                id="message"
                // name="message"
                onChange={handleMessage}
                value={message}
              />
            </div>
            <button type="submit" className="btn btn-primary w-50">
              Envoyer
            </button>
          </form>
          <div>Chat: {"afficher les messages envoyer sur cet channel"}</div>
        </>
      ) : (
        <div className="m-5 text-center">
          <h2>Séléctionner un channel</h2>
          {channelList.map((channel, key) => (
            <div class="d-flex flex-row mb-3 justify-content-center">
              <button
                key={key}
                onClick={() => {
                  setCurrentChannel(channel);
                  setDoMessage(true);
                }}
                className="btn btn-dark w-50"
                type="submit"
                value={channel.id}
              >
                {channel.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

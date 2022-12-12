export default function useSendMessage() {
  return function (data) {
    return fetch("http://localhost:8245/message", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(data), // On envoie les data sous format JSON
    })
      .then((data) => data.json())
      .then((data) => console.log("data  send test", data));
  };
}

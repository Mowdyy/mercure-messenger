export default function useSendMessage() {
  return function (userId) {
    return fetch(`http://localhost:8245/message/${userId}`, {
      method: "POST",
    })
      .then((data) => data.json())
      .then((data) => data.message);
  };
}

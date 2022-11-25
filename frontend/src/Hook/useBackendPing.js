export default function useBackendPing() {
  return function (userId, message) {
    return fetch(
      `http://localhost:8245/messages/add/${userId}/${encodeURI(message)}`,
      {
        method: "POST",
      }
    )
      .then((data) => data.json())
      .then((data) => data.message);
  };
}

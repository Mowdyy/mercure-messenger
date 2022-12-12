export default function useGetChannelList() {
  return function () {
    return fetch("http://localhost:8245/channel", {
      method: "GET",
      mode: "cors",
    })
      .then((data) => data.json())
      .then((data) => data.channels);
  };
}

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
function App() {
  const [userData, setuserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setuserData(response.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );
  let printUserData = <h3>Loading .....</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div>
      <div>{printUserData}</div>
      <div>
        <button
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;

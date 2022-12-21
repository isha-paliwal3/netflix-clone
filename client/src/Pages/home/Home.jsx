import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import "./Home.scss";
import List from "../../Components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTBjMjU5MzkzMDk3ZjY3NTU5MGYyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTQ5NDQ4NiwiZXhwIjoxNjcxOTI2NDg2fQ.3ziVgcM1aPucDdOXyVTUpzM2U1RYr81uGQi0beQhaNE"
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
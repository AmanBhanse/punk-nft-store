import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xc5B3124B32cf6061a46235db792aA120268c0EA0&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://gateway.thirdweb.dev/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"
      />
    </div>
  );
}

export default App;

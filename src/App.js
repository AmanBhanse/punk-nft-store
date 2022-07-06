import "./App.css";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
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
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;

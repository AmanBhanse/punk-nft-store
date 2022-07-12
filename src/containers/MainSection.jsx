import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import PunkList from "../components/PunkList";
import walletConfig from "../cred/walletConfig.json";

const MainSection = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [isDataLoad, setIsDataLoad] = useState(false);

  useEffect(() => {
    getMyNfts();
  }, []);

  const getMyNfts = async () => {
    axios
      .get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=${walletConfig.contactAddress}&order_direction=asc`
      )
      .then(
        (openseaData) => {
          setPunkListData(openseaData.data.assets);
          setIsDataLoad(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return punkListData.length === 0 ? null : (
    <>
      <Main punkListData={punkListData} selectedPunk={selectedPunk} />
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </>
  );
};

export default MainSection;

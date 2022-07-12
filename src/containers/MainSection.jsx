import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import PunkList from "../components/PunkList";

const MainSection = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [isDataLoad, setIsDataLoad] = useState(false);
  useEffect(() => {
    console.log(isDataLoad);
    console.log(selectedPunk);
    console.log(punkListData);
  }, [isDataLoad, selectedPunk, punkListData]);

  useEffect(() => {
    getMyNfts();
  }, []);

  const getMyNfts = async () => {
    axios
      .get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xc5B3124B32cf6061a46235db792aA120268c0EA0&order_direction=asc"
      )
      .then(
        (openseaData) => {
          setPunkListData(openseaData.data.assets);
          setIsDataLoad(true);
          console.log(punkListData);
          console.log("isDataLoaded" + isDataLoad);
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

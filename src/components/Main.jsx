import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.scss";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(null);
  useEffect(() => {
    setActivePunk(punkListData.find((punk) => punk.token_id == selectedPunk));
    console.log("Active");
    console.log("Active:" + selectedPunk);
    console.log(activePunk);
  }, [punkListData, selectedPunk]);

  return (
    activePunk && (
      <div className="main">
        <div className="mainContent">
          <div className="punkHighlight">
            <div className="punkContainer">
              <img
                className="selectedPunk"
                src={activePunk.image_original_url}
                alt=""
              />
            </div>
          </div>
          <div className="details">
            <div className="punkDetails" style={{ color: "fff" }}>
              <div className="title">{activePunk.name}</div>
              <div className="itemNumber">#{activePunk.token_id}</div>
            </div>
            <div className="owner">
              <div className="ownerDetails">
                <div className="ownerImageContainer">
                  <img src={activePunk.owner.profile_img_url} alt="" />
                </div>
                <div className="ownerAddressAndName">
                  <div className="ownerAddress">{activePunk.owner.address}</div>
                  <div className="ownerHandle">Aman.com</div>
                </div>
                <div className="ownerHandle">
                  <div className="ownerLink">
                    <img src={instagramLogo} alt="" />
                  </div>
                  <div className="ownerLink">
                    <img src={twitterLogo} alt="" />
                  </div>
                  <div className="ownerLink">
                    <img src={moreIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Main;

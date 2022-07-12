import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Main.scss";
import ownerConfig from "../cred/ownerConfig.json";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(null);
  useEffect(() => {
    setActivePunk(punkListData.find((punk) => punk.token_id == selectedPunk));
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
                  <div className="ownerName">Aman Bhanse</div>
                </div>
                <div className="ownerHandle">
                  <div className="ownerLink">
                    <a
                      href={ownerConfig.gitHubHandle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <div className="ownerLink">
                    <a
                      href={ownerConfig.linkedInHandle}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
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

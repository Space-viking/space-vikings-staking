import React from "react";
import mathwallet from "images/mathwallet.png";
import tokenpocket from "images/tokenpocket.png";
import metamask from "images/metamask.png";
import trustwallet from "images/trustwallet.png";
import binancewallet from "images/Binancewallet.png";
import walletconnect from "images/walletconnect.png";
import safepalwallet from "images/Logo_Icon_black.png";
import { connectorLocalStorageKey, ConnectorNames } from "config/constants/wallets";
import useAuth from "hooks/useAuth";

let walletNames = [
  { name: "Metamask", img: metamask, connectorId: ConnectorNames.Injected },
  { name: "TrustWallet", img: trustwallet, connectorId: ConnectorNames.Injected },
  { name: "MathWallet", img: mathwallet, connectorId: ConnectorNames.Injected },
  { name: "TokenPocket", img: tokenpocket, connectorId: ConnectorNames.Injected },
  { name: "WalletConnect", img: walletconnect, connectorId: ConnectorNames.WalletConnect },
  { name: "Binance Chain Wallet", img: binancewallet, connectorId: ConnectorNames.Injected },
  { name: "Safe Pal Wallet", img: safepalwallet, connectorId: ConnectorNames.Injected },
];

interface IProps {
  onclose: () => void;
}

const Walletmodal: React.FC<IProps> = ({ onclose }) => {
  const { login } = useAuth()
  return (
    <div>
      <div id="modal_box">
        <div className="py-3">
          <div id="border-bottom" className="d-flex justify-content-between">
            <h5 className="d-inline" id="wallet_heading">
              Connect to a wallet
            </h5>
            <i
              onClick={onclose}
              style={{ cursor: "pointer" }}
              className="fal fa-times mr-4 mt-1 text-white"
            ></i>
          </div>
          <div className="mt-4">
            {walletNames.map((item, index) => {
              return (
                <div
                  key={index}
                  id="wallet-contents"
                  className="px-3 mx-4 d-flex justify-content-between"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    login(item.connectorId);
                    window.localStorage.setItem(connectorLocalStorageKey, item.connectorId)
                    onclose()
                  }}
                >
                  <p className="d-inline" id="wallet_names">
                    {item.name}
                  </p>
                  <img
                    src={item.img}
                    alt="..."
                    height="50"
                    className="py-2"
                  ></img>
                </div>
              );
            })}
            <p
              className="text-white"
              id="learn_to_connect"
              onClick={() =>
                window.open(
                  "https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <p className="text-center text-color my-4">
                <span className="px-2" id="question_mark">
                  ?
                </span>{" "}
                Learn how to connect
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Walletmodal;

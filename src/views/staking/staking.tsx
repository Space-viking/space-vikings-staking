import React from "react";
import Stakebox from "./stakebox";
import Tierbox from "./tierbox";
import vikinglogo from "images/viking-logo.png";
import { useStaking } from "callbacks/useStaking";


const Staking: React.FC = () => {

  const { stakes, earn, withDraw, reward, create } = useStaking()

  return (
    <div className="container-fluid pt-5 pb-3 px-3 px-xl-5 relative-position">
      <img src={vikinglogo} className="bg-coin-img" />
      <div className="row mx-0">
        <div className="col-sm-8 offset-sm-2 px-0 px-sm-3 col-lg-6 offset-lg-3">
          <Stakebox create={create}/>
        </div>
        {/* <div className='col-lg-6'></div> */}
      </div>

      <div className="row mx-0 mt-5">
        {stakes && stakes.map((stake, ind) =>
          <div className="col-lg-4 px-0 px-sm-2 col-sm-6 mb-3" key={ind}>
            <Tierbox stake={stake} earn={earn} withDraw={withDraw} reward={reward} index={ind} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Staking;

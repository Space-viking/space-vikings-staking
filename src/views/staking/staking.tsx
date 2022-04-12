import React from "react";
import Stakebox from "./stakebox";
import Tierbox from "./tierbox";
import vikinglogo from "images/viking-logo.png";
import { useStaking } from "callbacks/useStaking";
import Loader from "components/Loader";
import { useTokenApproval } from "hooks/useApproval";

const Staking: React.FC = () => {
  const { stakes, loading, earn, withDraw, reward, create } = useStaking()
  const { token, approve, approving, approvedAmount } = useTokenApproval()

  const isLoading = approving || loading
  
  return (
    <div className="container-fluid pt-5 pb-3 px-3 px-xl-5 relative-position">
      <Loader loading={isLoading} />
      <img src={vikinglogo} className="bg-coin-img" alt="" />
      <div className="row mx-0">
        <div className="col-sm-8 offset-sm-2 px-0 px-sm-3 col-lg-6 offset-lg-3">
          <Stakebox
            create={create}
            token={token}
            approve={approve}
            approvedAmount={approvedAmount}
            approving={approving}
          />
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

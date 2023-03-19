import React from "react";
const Success = (props) => {
  const { data } = props;
  return (
    <div className="success-wrapper">
      <h1>Form successfully submited</h1>
      <div className="display-customer-details">
        {Object.entries(data).map(
          (d) =>
            d[1] && (
              <div className="row" key={d[0]}>
                <div className="key-container">{d[0]}:</div>
                <div className="value-container">{d[1]}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
export default Success;

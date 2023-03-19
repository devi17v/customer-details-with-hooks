import React, { useState } from "react";
import Form from "./form";
import FormRef from "./form-ref";
import Success from "./success";
import "./app.css";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState();
  const [formType, setFormType] = useState();

  const handleSubmit = (data) => {
    setSubmitted(true);
    setData({ ...data });
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setFormType(value);
  };
  const formState = formType === "formWithState" && (
    <Form onSubmit={handleSubmit} />
  );
  const formRef = formType === "formWithRef" && (
    <FormRef onSubmit={handleSubmit} />
  );

  return (
    <div className="app-wrapper">
      {!submitted && (
        <>
          <h1>React Form</h1>
          <div className="radio-wrapper">
            <label htmlFor="formType">Form Type</label>
            <div className="ref-radio">
              <input
                type="radio"
                name="form"
                value="formWithState"
                onChange={handleChange}
              />
              <label htmlFor="formWithState">form-state</label>
            </div>

            <div className="ref-radio">
              <input
                type="radio"
                name="form"
                value="formWithRef"
                onChange={handleChange}
              />
              <label htmlFor="formWithRef">form-ref</label>
            </div>
          </div>
        </>
      )}
      {submitted ? (
        <Success data={data} />
      ) : (
        <>
          {formState}
          {formRef}
        </>
      )}
    </div>
  );
};
export default App;

import React, { useState } from "react";
const depts = [
  {
    value: "",
    label: "----select depart----",
  },
  {
    value: "CSE",
    label: "CSE",
  },
  {
    value: "ECE",
    label: "ECE",
  },
  {
    value: "MECH",
    label: "MECH",
  },
  {
    value: "AI",
    label: "AI",
  },
  {
    value: "DATAMINE",
    label: "DATAMINE",
  },
];
const selectOptions = depts.map(({ value, label }) => (
  <option key={value}>{label}</option>
));
const FormRef = (props) => {
  const [preferedContact, setPreferedContact] = useState("");
  const clientName = React.createRef();
  const company = React.createRef();
  const title = React.createRef();
  const department = React.createRef();
  const preferredContact = React.createRef();
  const email = React.createRef();
  const tel = React.createRef();
  const companyAddress = React.createRef();
  const workingDays = React.createRef();
  const workingHours = React.createRef();
  const billingCycle = React.createRef();
  const info = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      clientName: clientName.current.value,
      company: company.current.value,
      title: title.current.value,
      department: department.current.value,
      preferredContact: preferredContact.current.value,
      companyAddress: companyAddress.current.value,
      workingDays: workingDays.current.value,
      workingHours: workingHours.current.value,
      billingCycle: billingCycle.current.value,
      info: info.current.value,
    };

    if (preferedContact === "email") {
      data.email = email.current.value;
    }
    if (preferredContact === "phone") {
      data.tel = tel.current.value;
    }
    props.onSubmit(data);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setPreferedContact(value);
  };
  return (
    <div className="body">
      <h1>Client Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <label htmlFor="firstName">
              <span>ClientName</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="text"
              name="ClientName"
              autoComplete="off"
              ref={clientName}
              required={true}
              minLength={3}
              maxLength={12}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="company">
              <span>Company</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="text"
              name="company"
              autoComplete="off"
              ref={company}
              max={12}
              required={true}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="title">
              <span>Title</span>
            </label>
            <input
              type="text"
              name="title"
              autoComplete="off"
              ref={title}
              max={50}
            />
          </div>
          <div className="select-wrapper">
            <label htmlFor="department">
              <span>Department</span>
              <em className="mandatory">*</em>
            </label>
            <select
              name="department"
              id="department"
              ref={department}
              required={true}
            >
              {selectOptions}
            </select>
          </div>
          <div className="radio-wrapper">
            <label htmlFor="preferedContact">
              <span>Preferred Contact Method</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="radio"
              name="preferredContact"
              value="email"
              onChange={handleChange}
              ref={preferredContact}
            />
            <label htmlFor="preferredContact">Email</label>
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              ref={preferredContact}
              onChange={handleChange}
            />
            <label htmlFor="email">Phone</label>
          </div>
          {preferedContact === "email" && (
            <div className="input-wrapper">
              <label htmlFor="email">
                <span>Email</span>
                <em className="mandatory">*</em>
              </label>
              <input
                type="email"
                name="email"
                required={true}
                ref={email}
                pattern="[a-z0-9.+-_%]+@[a-z]+.[a-z]{2,}$"
                autoComplete="off"
              />
            </div>
          )}
          {preferedContact === "phone" && (
            <div className="input-wrapper">
              <label htmlFor="tel">
                <span>PhoneNumber</span>
                <em className="mandatory">*</em>
              </label>
              <input
                type="tel"
                name="tel"
                placeholder="Phone Number"
                ref={tel}
                required={true}
                autoComplete="off"
                minLength={10}
                pattern="[0-9]{10}"
              />
            </div>
          )}
          <div className="input-wrapper">
            <label htmlFor="companyAddress">
              <span>Company Address</span>
            </label>
            <input
              type="text"
              name="companyAddress"
              ref={companyAddress}
              placeholder="Address Line1"
              autoComplete="off"
              max={50}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="companyAddress"></label>
            <input
              type="text"
              name="companyAddress"
              ref={companyAddress}
              placeholder="address line2"
              autoComplete="off"
              max={50}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="companyAddress"></label>
            <input
              type="text"
              name="companyAddress"
              ref={companyAddress}
              placeholder="postal code"
              autoComplete="off"
              minLength={6}
              maxLength={6}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="workingDays">
              <span>Working Days</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="number"
              name="workingDays"
              ref={workingDays}
              autoComplete="off"
              required={true}
              min={1}
              max={31}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="workingHours">
              <span>Working Hours</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="number"
              name="workingHours"
              ref={workingHours}
              autoComplete="off"
              required={true}
              min={5}
              max={12}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="billingCycle">
              <span>Billing Cycle</span>
              <em className="mandatory">*</em>
            </label>
            <input
              type="number"
              name="billingCycle"
              ref={billingCycle}
              autoComplete="off"
              required={true}
              min={25}
              max={31}
            />
          </div>
          <div className="text-wrapper">
            <label htmlFor="info">Additional Information</label>
            <textarea id="info" name="info" cols="120" rows="10" ref={info} />
          </div>
          <div className="btn-wrapper">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRef;

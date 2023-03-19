import React, { useState } from "react";
const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "India",
    label: "India",
  },

  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];
const selectOptions = options.map(({ value, label }) => (
  <option key={value}> {label}</option>
));
const Form = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    gender: "",
    file: "",
    bio: "",
    movies: {
      thriller: false,
      family: false,
      biography: false,
    },
  };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        movies: { ...formData.movies, [name]: checked },
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      country,
      tel,
      dateOfBirth,
      gender,
      bio,
      movies,
    } = formData;
    const formattedMovies = [];
    for (const key in movies) {
      console.log(key);
      if (movies[key]) {
        formattedMovies.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      country,
      gender,
      bio,
      movies: formattedMovies.join(","),
    };
    console.log(data);
    props.onSubmit(data);
  };
  const { firstName, lastName, email, tel, dateOfBirth, gender, bio } =
    formData || {};
  return (
    <div className="body">
      <h1>Customer Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="input-wrapper">
            <label htmlFor="firstName">
              <span>FirstName</span>
              <em>*</em>
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="firstName"
              minLength={3}
              maxLength={12}
              required={true}
              autoComplete="off"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">
              <span>LastName</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="lastName"
              maxLength={7}
              autoComplete="off"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">
              <span>Email</span>
              <em>*</em>
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="email"
              required="true"
              pattern="[a-z0-9+-_%]+@[a-z]+.[a-z]{2,}$"
              autoComplete="off"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="tel">
              <span>PhoneNo</span>
              <em>*</em>
            </label>
            <input
              type="tel"
              name="tel"
              value={tel}
              onChange={handleChange}
              placeholder="phoneNo"
              minLength={10}
              maxLength={10}
              pattern="[0-9]{10}"
              required={true}
              autoComplete="off"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="dateOfBirth">DOB</label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
              placeholder="dateOfBirth"
              required={true}
              autoComplete="off"
            />
          </div>
          <div className="select-wrapper">
            <label htmlFor="country">
              <span>CountryName</span>
              <em>*</em>
            </label>
            <select name="country" id="country" onChange={handleChange}>
              {selectOptions}
            </select>
          </div>
          <div className="radio-wrapper">
            <label htmlFor="gender">Gender</label>
            <div className="male-radio">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={gender === "male"}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="female-radio">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={gender === "female"}
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="other-radio">
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={gender === "other"}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="checkBox-wrapper">
            <fieldset>
              <legend>What Type Of Movies Do You Like?</legend>
              <input
                type="checkbox"
                name="thriller"
                value="thriller"
                onChange={handleChange}
              />
              <label htmlFor="animation">Thriller Movies</label>
              <input
                type="checkbox"
                name="family"
                value="family"
                onChange={handleChange}
              />
              <label htmlFor="family">Family Movies</label>
              <input
                type="checkbox"
                name="biography"
                value="biography"
                onChange={handleChange}
              />
              <label htmlFor="biography">Biography Movies</label>
            </fieldset>
          </div>
          <div className="text-wrapper">
            <label htmlFor="bio">About yourself</label> <br />
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={handleChange}
              cols="120"
              rows="10"
              placeholder="Write about yourself ..."
            />
          </div>
          <div className="btn-wrapper">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;

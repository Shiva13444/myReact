import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
const IForm = () => {
    const [userList,setUserList]=useState([])
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      gender: "",

      interests: "",
      profile: [],
      country: "",
    },
    onSubmit: async (values,{resetForm}) => {
    const formData = new FormData()
    formData.append("email",values.email)
    formData.append("age",values.age)
    formData.append("gender",values.gender)
    formData.append("interest",values.interests)
    Array.from(values.profile).forEach((file)=>{
    formData.append("profile",file)
    })
    formData.append("country",values.country)

    const config = {
        headers:{
            'content-type':'multipart/formData'
        }
    }
const response = await axios.post('http://localhost:4002/users/register',formData,config)
if(response.data.success){
    setUserList([...userList,response.data.data])
}
      resetForm()
    },
  });

  const handleFileChange = (event) => {
    const files = event.currentTarget.files;
    formik.setFieldValue("profile", files);
  };
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>email</label>
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label>age</label>
          <input
            type="text"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label>
            gender
            <div>
              <label>
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
            <div>
              <label>
                Female
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === "female"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
          </label>
        </div>
        <div>
          <label>interests</label>
          <div>
            <label>
              Music
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formik.values.interests.includes("music")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>
          <div>
            <label>
              Singing
              <input
                type="checkbox"
                name="interests"
                value="singing"
                checked={formik.values.interests.includes("singing")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>
        </div>

        <div>
          <label>country</label>
          <select
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="/">Select country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
        <div>
          <label>Profile</label>
          <input
            type="file"
            name="profile"
            onChange={handleFileChange}
            multiple
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default IForm;

import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createPost } from "../features/userDetailsSlice";
const Child1 = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      city: "",
    },
    onSubmit: (values) => {
      dispatch(createPost(values));
      console.log(createPost(values),"dispatch");
     
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>username</label>
          <br />
          <input
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label>city</label>
          <br />
          <input
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Child1;

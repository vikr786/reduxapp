  import React from "react";
  import { Field, reduxForm } from "redux-form";
  import { useHistory } from "react-router-dom";
  import "./index.css";

  function Page1(props) {
    const { handleSubmit } = props;
    const history = useHistory();

    const submit = (values) => {
      console.log(values);
      history.push("/page2", { formData: values });
    };

    return (
      <div className="page">
        <form className="form" onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }

  Page1 = reduxForm({
    form: "page1"
  })(Page1);

  export default Page1;

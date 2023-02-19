import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import "./index.css";

function Page2() {
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="page">
      <h1>Data from Page 1</h1>
      <p>Name: {location.state.formData.name}</p>
      <p>Email: {location.state.formData.email}</p>
      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Page2;

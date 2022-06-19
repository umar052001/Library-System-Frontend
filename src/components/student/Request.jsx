import React from "react";
import axios from "axios";
const Request = (props) => {
  const {setStudent, SignIn} =props
    const handleRequest = () => {
    axios
      .get(`http://localhost:3004/getstudent/${SignIn.email}`)
      .then(function (response) {
        setStudent(response.data);
        console.log(response)

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          handleRequest();
          props.setReqBook(props.isbn);
        }}
        type="button"
        class="focus:outline-none text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-md text-sm px-6 py-2 mb-2 mr-1"
      >
        Request
      </button>
    </div>
  );
};

export default Request;

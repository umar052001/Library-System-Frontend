import axios from "axios";
import React, { useState } from "react";
export const Approve = (props) => {
  const [approve, setApprove] = useState(false);
  const handleDecrease = () => {
    axios
      .put(`http://localhost:3004/decreasebooks/${props.isbn}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log(props.isbn);
      });
  };
  const handleIncrease = () => {
    axios
      .put(`http://localhost:3004/increasebooks/${props.isbn}`)
      .then(function (response) {
        console.log("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {approve ? (
        <button
          onClick={() => {
            handleIncrease();
            setApprove(false);
          }}
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Returned
        </button>
      ) : (
        <button
          onClick={() => {
            handleDecrease();
            setApprove(true);
          }}
          type="button"
          class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Approve
        </button>
      )}
    </div>
  );
};

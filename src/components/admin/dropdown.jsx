import React, { useState } from "react";
import axios from "axios";
const Add = () => {
  const [show, setShow] = useState(true);
  const [addBooks, setAddBooks] = useState([]);
  const handleAdd = () => {
    axios
      .post(`http://localhost:3004/addbooks`, addBooks)
      .then(function (response) {
        console.log("added");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setAddBooks({ ...addBooks, [event.target.id]: event.target.value });
  };
  return (
    <div className="relative">
      <div
        className="bg-white dark:bg-gray-800 flex justify-between border rounded w-40"
        onClick={() => setShow(!show)}
      >
        <p className="px-3 py-3 text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal font-normal">
          Add Book
        </p>
        <div className="bg-white dark:bg-gray-800 items-center flex rounded-r border-gray-300 border-l">
          <div className="cursor-pointer text-gray-600 dark:text-gray-400 mx-3">
            {show ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 15 12 9 18 15" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {show && (
        <span className="ml-2 font-normal">
          <div className="ml-4">
            <input id="name" type="text" placeholder="Name" className="mr-2" onChange={handleChange}/>
            <input id="author" type="text" placeholder="Author" className="mr-2" onChange={handleChange}/>
            <input id="isbn" type="text" placeholder="ISBN" className="mr-2" onChange={handleChange}/>
            <input id="copies" type="text" placeholder="Copies" onChange={handleChange}/>
            <button
            onClick={handleAdd}
            type="button"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              ADD
            </button>
          </div>
        </span>
      )}
    </div>
  );
};
export default Add;

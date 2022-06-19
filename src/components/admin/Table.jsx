import React, { useState } from "react";
import axios from "axios"
import Delete from "./Delete";
import {Link} from "react-router-dom"
const Table = (props) => {
  const [books, setBooks] = useState([]);
  axios
    .get("http://localhost:3004/getbooks")
    .then(function (response) {
      setBooks(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Link to="/issuebooks" type="button" class="mt-2 ml-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Issue
      </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                ISBN
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Author
              </th>
              <th scope="col" className="px-6 py-3">
                Copies
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {data.id}
                </th>
                <td className="px-6 py-4">{data.isbn}</td>
                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.author}</td>
                <td className="px-6 py-4">{data.copies}</td>
                <td className="px-6 py-4 text-right">
                  <div className="inline-block">
                    <Delete isbn={data.isbn} />
                    {/* <ModalAp apid={data.apartmentid} />
                    <ModalAm apid={data.apartmentid} /> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

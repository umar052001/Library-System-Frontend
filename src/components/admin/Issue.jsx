import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Approve } from './Approve';
const Issue = (props) => {
  const [issueData, setIssueData] = useState([])
  
  axios
    .get("http://localhost:3004/issuedata")
    .then(function (response) {
      setIssueData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    return (
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Isbn
                </th>
                <th scope="col" className="px-6 py-3">
                  Requested Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Returning Date
                </th>
              </tr>
            </thead>
            <tbody>
              {issueData.map((data) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.isbn}</td>
                  <td className="px-6 py-4">{data.issuedate}</td>
                  <td className="px-6 py-4">{data.returndate}</td>
                  <Approve isbn={data.isbn} />
                 </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Issue
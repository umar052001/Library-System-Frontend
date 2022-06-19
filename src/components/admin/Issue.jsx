import React from 'react'

const Issue = (props) => {
    const {student, reqBook} = props
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
                  Requested book Isbn
                </th>
              </tr>
            </thead>
            <tbody>
              {student.map((data) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {data.id}
                  </th>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{reqBook}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-block">
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
}

export default Issue
import React from "react";

export default function Referfriend() {
  return (
    <>
      <div className="w-[100%]">
        <table className="w-[100%]">
          <thead>
            <tr className="bg-[#032835]">
              <th className="py-[5px] pl-[20px]">Email</th>
              <th className="py-[5px]">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-[20px]">user1@example.com</td>
              <td className="py-[20px]">2022-02-01</td>
            </tr>
            <tr>
              <td className="py-[20px]">user2@example.com</td>
              <td className="py-[20px]">2022-02-05</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

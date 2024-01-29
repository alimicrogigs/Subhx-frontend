import React from "react";

export default function Referfriend() {
  return (
    <>
      <div className="w-[100%]">
        <table className="w-[100%]">
          <thead>
            <tr className="bg-[#032835] ">
              <th className="py-[5px] pl-[20px]">Email</th>
              <th className="py-[5px]">Date</th>
              <th className="py-[5px]">Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-b-[#032835]">
              <td className="py-[20px]">user1@example.com</td>
              <td className="py-[20px]">2022-02-01</td>
              <td className="py-[20px]">$50</td>
            </tr>
            <tr>
              <td className="py-[20px]">user2@example.com</td>
              <td className="py-[20px]">2022-02-05</td>
              <td className="py-[20px]">$30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

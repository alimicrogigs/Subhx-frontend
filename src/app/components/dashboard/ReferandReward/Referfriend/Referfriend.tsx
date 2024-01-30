import React from "react";

export default function Referfriend() {
  const userData = [
    { email: "user1@example.com", date: "2022-02-01" },
    { email: "user2@example.com", date: "2022-02-05" },
    // Add more data as needed
  ];
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
            {userData.map((user, index) => {
              return (
                <tr key={index} className="border-b border-b-[#032835]">
                  <td className="py-[20px]">{user.email}</td>
                  <td className="py-[20px]">{user.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

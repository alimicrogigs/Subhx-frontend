import React from "react";

export default function Referfriend() {
  const userData = [
    { email: "user1@example.com", date: "2022-02-01", reward: "$50" },
    { email: "user2@example.com", date: "2022-02-05", reward: "$30" },
    { email: "user3@example.com", date: "2022-02-10", reward: "$25" },
    { email: "user4@example.com", date: "2022-02-15", reward: "$40" },
    { email: "user5@example.com", date: "2022-02-20", reward: "$55" },
    { email: "user6@example.com", date: "2022-02-25", reward: "$60" },
    { email: "user7@example.com", date: "2022-03-01", reward: "$45" },
    { email: "user8@example.com", date: "2022-03-05", reward: "$35" },
    { email: "user9@example.com", date: "2022-03-10", reward: "$30" },
    { email: "user10@example.com", date: "2022-03-15", reward: "$20" },
  ];

  return (
    <>
      <div className="w-[100%] sm:text-[.8rem] text-[.6rem]">
        <table className="w-[100%]">
          <thead>
            <tr className="bg-[#032835] ">
              <th className="py-[5px] pl-[20px]">Email</th>
              <th className="py-[5px]">Date</th>
              <th className="py-[5px]">Reward</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="border-b border-b-[#032835]">
                <td className="py-[20px]">{user.email}</td>
                <td className="py-[20px]">{user.date}</td>
                <td className="py-[20px] sm:text-left text-center">
                  {user.reward}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

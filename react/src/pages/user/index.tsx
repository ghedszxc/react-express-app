/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../api/user.ts";

import UserList from "./components/list";

function User() {
  const {
    status,
    error,
    data: users,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  if (status == "pending") return <h1>Loading...</h1>;
  if (status == "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h2 className="text-3xl font-bold my-4">User Management</h2>
      <table className="hidden md:table w-full text-left">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Created At</th>
          </tr>
        </thead>

        {users?.map((user: any, key: number) => {
          return <UserList key={key} {...user} />;
        })}
      </table>
    </div>
  );
}

export default User;

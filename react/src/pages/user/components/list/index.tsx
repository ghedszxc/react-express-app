/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IUserInfo } from "./types";
import { getFormattedPublishedDate } from "../../../../lib/utilities";

function UserList(user: IUserInfo) {
  return (
    <tbody>
      <tr>
        <td>{user?.name}</td>
        <td>{user?.username}</td>
        <td>{user?.password}</td>
        <td>{getFormattedPublishedDate(user?.created_at)}</td>
      </tr>
    </tbody>
  );
}

export default UserList;

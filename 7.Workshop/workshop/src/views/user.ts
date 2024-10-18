import { CONFIG } from "../constant";
import { UserService } from "../service/user";
import { UserDetails } from "../type/user";

const { baseUrl } = CONFIG;
const userService = new UserService(baseUrl);

/* Get One - User */
userService.getSingleUser(3).then((user) => {
  console.log(user);
});

/* Get All - Users */
userService.getAll().then((users) => {
  createUserList(users);
});

// Rendering Utils | User Utils
function createUserList(users: UserDetails[]) {
  let liData = "";
  users.forEach(({ id, name }) => {
    liData += `<li class="my-li">${id} : ${name} </li>`;
  });

  const userListDiv = document.getElementById("users-list");
  if (userListDiv) {
    userListDiv.innerHTML = `<ul>${liData}</ul>`;
  }
}

export const userPage = `
<div id="users-wrapper">
    <h2>Hello users!</h2>
    <div id="users-list" />
</div>`;

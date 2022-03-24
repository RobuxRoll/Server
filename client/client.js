const socket = io("https://neco.cz");

let userName = "";
let userID;
const userList = [];

const onUserConnection = (user) => {
  userName = user;
  userList.push(userName);
  userID = Math.floor(Math.random() * 1000);
  socket.emit(`New user ${userName} connected`);
};

const onUserQuit = (user) => {
  userList.splice(user);
};

const createUser = (user) => {
  const userTable = (
    <li>
      <div class="user-table-div">
        <p>${user}</p>
      </div>
    </li>
  );
};

socket.on(`New user ${userName} connected`, (data) => {
  data.map((user) => createUser(user));
});

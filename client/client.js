const socket = io("https://neco.cz");

let userName = "";

const onUserConnection = (user) => {
  userName = user;
  socket.emit(`New user ${userName} connected`);
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

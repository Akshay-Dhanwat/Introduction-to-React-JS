const user = { firstName: "Akshay", lastName: "Dhanwat" };
const fullName = (user) => user.firstName + " " + user.lastName;
const element = (
  <div>
    <h1 className="greeting">Hello {fullName(user)}</h1>;<p>Good To see You!</p>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

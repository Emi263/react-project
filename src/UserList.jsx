import useFetch from "./useFetch";
import UserCard from "./UserCard";
import axios from "axios";
function UserList() {
  //mount -> Happens only the first time
  //render -> First time + on every state or props change

  const response = useFetch("https://official-joke-api.appspot.com/random_joke");

  console.log(response);

  axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => {
    console.log(res.data);
  });
  return (
    <div>
      {response.loading && <p></p>}
      {response.error && <p>Something went wrong</p>}
      <h4>List of users</h4>
      <section className="userList">
        {response?.data?.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              streetAddress={user.address.street}
              companyName={user.company.name}
            />
          );
        })}
      </section>
      {response.data?.length === 0 && <p>No data</p>}
    </div>
  );
}

export default UserList;

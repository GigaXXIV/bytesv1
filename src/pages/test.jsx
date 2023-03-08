import supabase from "../config/supabaseClient";

function Page({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.business_name}</li>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("users").select("business_name");

  return {
    props: {
      users: data,
    },
  };
}

export default Page;

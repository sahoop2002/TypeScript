//Type the resolved value inside Promise<...>:
function fetchUser(id: number): Promise<{ id: number; name: string }> {
  return fetch(`/api/users/${id}`).then((res) => res.json());
}




// async functions follow the same rule. Promise<void> if nothing meaningful is returned:

async function logUser(id: number): Promise<void> {
  const user = await fetchUser(id);
  console.log(user);
}

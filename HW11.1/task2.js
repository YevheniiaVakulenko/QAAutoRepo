function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch the todo");
        }
        return response.json();
      });
}
  
  function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch the user");
        }
        return response.json();
      });
}

const promisesCollection = Promise.all([fetchTodo(), fetchUser()]);
promisesCollection
    .then(([todo, user]) => {
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch(error => console.error("Error with Promise.all:", error));

const promiseFirst = Promise.race([fetchTodo(), fetchUser()]);
promiseFirst
    .then(result => {
      console.log("First resolved result:", result);
    })
    .catch(error => console.error("Error with Promise.race:", error));

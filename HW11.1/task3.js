async function fetchData(url, options) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

async function fetchTodo() {
    try {
        const users = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
        console.log('Response:', users);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function fetchUser() {
    try {
        const users = await fetchData("https://jsonplaceholder.typicode.com/users/1");
        console.log('Response:', users);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchTodo();
fetchUser();
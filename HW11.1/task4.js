class Todo{
  async fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async fetchAndLog() {
    try {
      const data = await this.fetchData();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

class User{
  async fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  async fetchAndLog() {
    try {
      const data = await this.fetchData();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

const fetchToDo = new Todo();
fetchToDo.fetchAndLog();

const fetchUser = new User();
fetchUser.fetchAndLog();
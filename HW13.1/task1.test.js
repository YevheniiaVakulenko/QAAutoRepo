const axios = require('axios')
const fs = require('fs')

const postBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
const todoBaseUrl = 'https://jsonplaceholder.typicode.com/todos';
const userBaseUrl = 'https://jsonplaceholder.typicode.com/users';

const expectedPostsResponseStructure = {
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
};

const expectedTodoResponseStructure = {
    userId: expect.any(Number),
    id: expect.any(Number),
    title: expect.any(String),
    completed: expect.any(Boolean),
};

const expecteduserResponseStructure = {
    id: expect.any(Number),
    name: expect.any(String),
    username: expect.any(String),
    email: expect.any(String),
    address: {
      street: expect.any(String),
      suite: expect.any(String),
      city: expect.any(String),
      zipcode: expect.any(String),
      geo: {
        lat: expect.any(String),
        lng: expect.any(String),
      },
    },
    phone: expect.any(String),
    website: expect.any(String),
    company: {
      name: expect.any(String),
      catchPhrase: expect.any(String),
      bs: expect.any(String),
    },
  };


beforeAll(() => {
    axios.interceptors.request.use(
      (config) => {
        console.log("Request:", config.data);
        return config;
      },
      (error) => {
        console.error("Request Error:", error.message);
        return Promise.reject(error);
      }
    );
  
    axios.interceptors.response.use(
      (response) => {
        console.log("Response:", response.data);
        return response;
      },
      (error) => {
        console.error(" Response Error:", error.message);
        return Promise.reject(error);
      }
    );
  });

describe('Posts API', () => {
    test("Get a post", async () => {
        const response = await axios.get(`${postBaseUrl}/1` ,{
            headers: {
                "Content-Type": "application/json",
            },
        });

        expect(response.data).toMatchObject(expectedPostsResponseStructure);
        expect(response.status).toEqual(200);
    });  

    test("Create a post", async () => {
        const fileContent = fs.readFileSync("./fakePostData.json", "utf-8");
        const response = await axios.post(`${postBaseUrl}`, JSON.parse(fileContent), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        expect(response.data).toMatchObject(expectedPostsResponseStructure);
        expect(response.status).toEqual(201);
    });

});

describe('Users API', () => {
    test("Get a user", async () => {
        const response = await axios.get(`${userBaseUrl}/1`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    
        expect(response.data).toMatchObject(expecteduserResponseStructure);
        expect(response.status).toEqual(200);
    });  

    test("Create a user", async () => {
        const fileContent = fs.readFileSync("./fakeUserData.json", "utf-8");
        const response = await axios.post(`${userBaseUrl}`, JSON.parse(fileContent), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        expect(response.data).toMatchObject(expecteduserResponseStructure);
        expect(response.status).toEqual(201);
    });

});

describe('Todo API', () => {
    test("Get a todo", async () => {
        const response = await axios.get(`${todoBaseUrl}/1`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        expect(response.data).toMatchObject(expectedTodoResponseStructure);
        expect(response.status).toEqual(200);
    });  

    test("Create a todo", async () => {
        const fileContent = fs.readFileSync("./fakeTodoData.json", "utf-8");
        const response = await axios.post(`${todoBaseUrl}`, JSON.parse(fileContent), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        expect(response.data).toMatchObject(expectedTodoResponseStructure);
        expect(response.status).toEqual(201);
    });

});
const fetchData = require('./task1');

const postBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
const commBaseUrl = 'https://jsonplaceholder.typicode.com/comments';

describe('Invalid Fetch', () => {
    test('throws an error for invalid resource', async () => {
      await expect(fetchData(`${postBaseUrl}/143`)).rejects.toThrow(
        'Error: 404 - Not Found'
      );
    });
    
  
    test('throws an error for invalid endpoint', async () => {  
      await expect(fetchData('https://invalid.url')).rejects.toThrow(
        'Error: getaddrinfo ENOTFOUND invalid.url'
      );
    });
  });

  describe('Valid Fetch ', () => {
    test("Get a post", async () => {
      const response = await fetchData(`${postBaseUrl}/1`);
      expect(response.status).toEqual(200);
    }); 
  });

  describe('Params', () => {
    test("Get a comment with params", async () => {
      const response = await fetchData(`${commBaseUrl}`, { params: { postId: 1 } });
      expect(response.status).toEqual(200);
    }); 
});
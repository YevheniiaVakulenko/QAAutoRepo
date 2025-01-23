const fetchData = require('./task1');
const axios = require('axios');
const userBaseUrl = 'https://jsonplaceholder.typicode.com/users';

jest.mock('axios');

describe('fetchData', () => {
    test('should return data when the request is successful', async () => {
        axios.get.mockResolvedValue({ data: { id: 1, name: 'Ana Anna' } });

        const url = `${userBaseUrl}/1`;
        const result = await fetchData(url);

        expect(result.data).toEqual({ id: 1, name: 'Ana Anna' });
    });

    test('should throw an error when the request fails', async () => {
        axios.get.mockRejectedValue({
            response: { status: 404, statusText: 'Not Found' }
        });

        const url = `${userBaseUrl}/1`;
        await expect(fetchData(url)).rejects.toThrow('Error: 404 - Not Found');
    });

    test('should throw a request error when there is no network', async () => {
        axios.get.mockRejectedValue({ message: 'Network Error' });

        const url = `${userBaseUrl}/1`;
        await expect(fetchData(url)).rejects.toThrow('Error: Network Error');
    });
});
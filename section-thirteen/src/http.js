/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @authors Brad Traversy, Matthew Allen
 * @license MIT
 */

class EasyHTTP {

    // Make an HTTP GET Request
     async get(url) {
        const response = await fetch(url);

        return await response.json();
     }

    // Make an HTTP POST Request
    async post(url, data) {
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        
        return await response.json();
    }

    // Make an HTTP PUT Request
    async put(url, data) {
        const response = await fetch(url, 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        return await response.json();
    }
    // Make an HTTP DELETE Request
    async delete(url) {
        await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        return await 'Resource Deleted';
    }
 }

export const http = new EasyHTTP();
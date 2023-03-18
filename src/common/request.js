/**
 * @name fetchData
 * @param url
 * @param payload
 * @description for body
 */
async function fetchData(url, payload) {
    let request;
    let response;

    try {
        request = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await request.json();
    } catch (e) {
        console.error(e);
        throw e;
    }

    return response;
}

const API_BASE_URL = "http://localhost:8080";
const ENDPOINT_RECENT = "recent";
const ENDPOINT_ALL = "all";

export {
    fetchData,
    API_BASE_URL,
    ENDPOINT_RECENT,
    ENDPOINT_ALL,
};

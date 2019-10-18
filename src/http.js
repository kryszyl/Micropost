class Http {

    async get(url) {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resdata = await response.json()
        return resdata;
    }
    async put(url, message) {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        const data = await response.json()
        return data;
    }
    async delete(url) {
        const response = await fetch(url);
        const data = await response.json()
        return data;
    }
}

export const http = new Http();
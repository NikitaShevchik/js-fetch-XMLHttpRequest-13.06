const requestURL = 'https://jsonplaceholder.typicode.com/users'


function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)
        xhr.setRequestHeader('Content-type', 'application/json')

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => console.log(xhr.response)

        xhr.send(JSON.stringify(body))
    })
}

const body = {
    name: 'Nikita',
    age: 22
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))
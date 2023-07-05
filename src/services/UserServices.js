const api = process.env.REACT_APP_BACKEND_URL

export async function findUser(data){
    const response = await fetch(`${api}/users/${data}`, {
        method: "GET",
        headers:{
            'Content-type':"application/json"
        },
    })
    return response.json()
}

export async function createUser(data){
    const response = await fetch(`${api}/users/signup`, {
        method: "POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })
    const json = await response.json()
    console.log(json)
    return {
        token: json.token,
        response: {
            _id: json._id,
            name: json.name
        }
    }
}

export async function loginUser(data) {
    const response = await fetch(`${api}/users/login`, {
        method: "POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export async function passwordResetEmail(data) {
    const response = await fetch(`${api}/users/password-reset-email`, {
        method: "POST",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

export async function passwordResetPageValidation(token, _id) {
    const response = await fetch(`${api}/users/password-reset/${token}/${_id}`, {
        method: "GET",
        headers:{
            'Content-type':"application/json"
        }
    })
    return response.json()
}

export async function passwordResetFormService(token, _id, data) {
    const response = await fetch(`${api}/users/password-reset/${token}/${_id}/password-form`, {
        method: "PUT",
        headers:{
            'Content-type':"application/json"
        },
        body: JSON.stringify(data)
    })
    return response.json()
}
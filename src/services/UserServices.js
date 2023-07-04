const api = 'http://localhost:3001'

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
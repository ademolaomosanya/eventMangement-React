const axios = require('axios').default;

export default function signup({
    firstName,
    lastName,
    email,
    password
}) {
   return axios.post('http://localhost:5000/signup', {
        firstName,
        lastName,
        email,
        password
    })

}
export const BASE_URL = 'https://auth.nomoreparties.co'
export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
  })
    .then((res) => {
      return res
    })
}

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({
      password: password,
      email: email
    })
  })
    .then((res => (res.json())))
    .then((data) => {
      // console.log(data)
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
}

export const checkToken = (token)=>{
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${token}`
    }
    })
    .then(res=> res.json())
    .then(data=> data)

}



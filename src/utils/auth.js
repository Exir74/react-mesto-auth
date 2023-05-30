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
    .then((res => res.json()))
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch(err => console.log(err))
    // .then((res)=>{
    //   return res
    // })
    // .then(res=>{
    //   try {
    //     if (res.status === 200) {
    //       return res.json()
    //     }
    //   } catch (e) {
    //     console.log(e)
    //   }
    // })

}

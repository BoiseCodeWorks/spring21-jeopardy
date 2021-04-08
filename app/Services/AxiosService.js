// @ts-ignore
export const jService = axios.create({
  baseURL: 'https://jservice.io/api/random',
  timeout: 3000
})


// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/players',
  timeout: 3000
})
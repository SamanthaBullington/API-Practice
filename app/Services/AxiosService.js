export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=31&difficulty=easy',
  timeout: 4000
})
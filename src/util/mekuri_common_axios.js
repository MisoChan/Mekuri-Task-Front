import axios from 'axios'
// Axiosを使う上で共有する部分を記載。

// ベースURL
const baseURL = process.env.VUE_APP_API_URL

// axiosのインスタンスを作る
const app = axios.create({
  baseURL,
  withCredentials: true
})

export default app

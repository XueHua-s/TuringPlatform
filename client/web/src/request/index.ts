import axios from 'axios'
const request = axios.create({
  timeout: 3600000
})
// @ts-ignore
request.interceptors.request.use((config : RequestConfig<string>) => {
  // @ts-ignore
  config.baseURL = (import.meta.env.VITE_APP_REQUEST_BASE || '')
  return config
})
request.interceptors.response.use(config => {
  return config
}, (error) => {
  return error
})
export default request

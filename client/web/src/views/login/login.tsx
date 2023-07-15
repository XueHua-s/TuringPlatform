import React, {useState} from 'react'
import { useStore } from 'react-redux'
const Login = () => {
  const [loginData, setLogin] = useState({
    userName: '',
    passWord: ''
  })
  const store = useStore<StroreState, StoreAction<any>>()
  const storeState = store.getState()
  return (
    <React.Fragment>
      <div>登录页{storeState.userInfo}{loginData.userName}</div>
      <button onClick={() => setLogin({
        ...loginData,
        userName: '哈哈哈'
      })}>啊哈哈哈</button>
    </React.Fragment>
  )
}
export default Login

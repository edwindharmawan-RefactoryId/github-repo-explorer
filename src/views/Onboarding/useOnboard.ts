import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { login } from "../../store/user";
import { FormEvent, useState } from "react";

const useOnboard = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToHome = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(username))
    sessionStorage.setItem('isLoggedIn', new Date().toISOString())
    navigate('/')
  }

  return {
    state: {
      username,
    },
    methods: {
      goToHome,
      setUsername,
    }
  }
}


export default useOnboard
import axios from 'axios'
import {
  useState,
  FormEvent,
  ChangeEvent,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  IUser,
  IStore,
  IRepos,
  IReposResponse,
  IUsersResponse,
} from '../../utils/interfaces'
import { setRepos, setUsers, setSearchUsername } from "../../store/repos";

const useHome = () => {
  const dispatch = useDispatch()

  const user: IUser = useSelector((state: IStore) => state.user);
  const repos: IRepos = useSelector((state: IStore) => state.repos);

  const { name } = user
  const { users, repos: userRepos, searchUsername } = repos

  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingRepos, setIsLoadingRepos] = useState(false)
  const [cardActive, setCardActive] = useState<number | null>(null)

  // get users with axios for fetching
  const getUsers = async (name: string) => {
    try {
      setIsLoading(true)

      const { data }: IUsersResponse = await axios({
        method: 'GET',
        url: `${import.meta.env.VITE_BASE_URL}/search/users`,
        params: {
          q: name
        },
        headers: { Authorization: import.meta.env.VITE_TOKEN },
      })

      if (!data.items.length) {
        setError(`Users ${name} not found.`)
      }
      dispatch(setUsers(data.items))
      setError('')
      setUsers(data.items)
      setIsLoading(false)
    } catch (error: any) {
      setError(error)
      setIsLoading(false)
    }
  }

  // get user repositories
  const getReposUser = async (username: string) => {
    try {
      setIsLoadingRepos(true)
      const { data } :IReposResponse = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/${username}/repos`)
      setIsLoadingRepos(false)
      dispatch(setRepos(data))
    } catch (error: any) {
      setIsLoadingRepos(false)
      setError(error)
    }
  }

  // set user name
  const setSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    dispatch(setSearchUsername(e.target.value))
  }

  // get users function
  const searchUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!!!searchUsername) return setUsers([])

    getUsers(searchUsername)
  }

  return {
    state: {
      name,
      error,
      users,
      isLoading,
      userRepos,
      cardActive,
      searchName: searchUsername,
      isLoadingRepos,
    },
    methods: {
      getUsers,
      searchUser,
      getReposUser,
      setCardActive,
      setSearchName,
    }
  }
}

export default useHome
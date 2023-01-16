import useHome from "./useHome"
import Card from "../../components/CardDropdown"

const Home = () => {
  const { 
    state: {
      name,
      error,
      users,
      isLoading,
      userRepos,
      cardActive,
      searchName,
      isLoadingRepos,
    },
    methods : {
      searchUser,
      getReposUser,
      setCardActive,
      setSearchName,
    }
  } = useHome()
  
  return (
    <div className="home-container">
      <div className="flex flex-col max-w-[20vw] min-w-[360px]">
        <span className="text-4xl h-full p-5 font-bold text-white">HALO {name}</span>
        <span className="h-full p-5 text-white flex flex-wrap">Welcome, this is our website to search any repositories</span>
      </div>

      <div className="search-container">
        <div className="search-section">   
          <form className="search-form" onSubmit={searchUser}>
            <input
              className="search-input"
              placeholder="Enter username"
              value={searchName}
              onChange={setSearchName}
            />
            <button className="btn-search" type="submit">Search</button>
          </form>

          {!!error ? 
            <span className="text-error">{error}</span> :
            <span className="text-lg text-[#727272]">Showing users for: "{searchName}"</span>
          }

          {isLoading ?
            <div className="flex-1 flex justify-center items-center">
              <span className="loader-large" />
            </div> :
            <div className="overflow-auto">
              {users.map((e, idx) => {
                return (
                  <Card
                    key={idx}
                    id={e.id}
                    gitId={e.login}
                    userRepos={userRepos}
                    onClick={getReposUser}
                    cardActive={cardActive}
                    setCardActive={setCardActive}
                    isLoadingRepos={isLoadingRepos}
                  />
                )
              })}
            </div>
          }

        </div>
      </div>
    </div>
  )
}

export default Home
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
      <div className="welcome-container">
        <span className="text-halo">HALO {name}</span>
        <span className="text-welcome">Welcome, this is our website to search any repositories</span>
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
            <div className="loader-wrapper">
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
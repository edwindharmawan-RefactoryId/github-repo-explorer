import { ICard } from "../utils/interfaces"

const Card = (props: ICard) => {
  const {
    id,
    gitId,
    onClick,
    userRepos,
    cardActive,
    setCardActive,
    isLoadingRepos,
  } = props

  return (
    <div className="card">
      <div
        className="username-card"
        onClick={() => {
          if (id == cardActive) {
            return setCardActive(null)
          }
          setCardActive(id)
          onClick(gitId)
        }}
      >
        <span>{gitId}</span>
        <i className={`fi ${cardActive == id ? 'fi-rs-angle-small-up' : 'fi-rs-angle-small-down'}`}></i>
      </div>

      {/* CARD REPOS*/}
      {isLoadingRepos && cardActive == id ?
        <div className="loader-wrapper">
          <span className="loader-small"/>
        </div> :
        cardActive == id && (
          !userRepos.length ?
          <span className="text-right text-xs">The user do not have any repositories.</span> :
          userRepos.map((repo, idx) => {
            return (
              <div className="card-repo" onClick={() => window.open(repo.html_url, 'blank')} key={idx}>
                <div className="name-description">
                  <span className="font-bold">{repo.name}</span>
                  <span>{repo.description}</span>
                </div>
                <div className="star-wrapper">
                  <span className="h-6 font-bold">{repo.stargazers_count}</span>
                  <i className="fi fi-ss-star flex items-center"></i>
                </div>
              </div>
            )
          })
        )
      }
    </div>
  )
}

export default Card

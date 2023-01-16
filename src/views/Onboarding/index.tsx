import useOnboard from "./useOnboard"

const OnBoarding = () => {
  const {
    state: {
      username,
    },
    methods: {
      goToHome,
      setUsername,
    },
  } = useOnboard()

  return (
    <div className="onboard-container">
      <h1 className="text-white text-5xl">HAI! ...</h1>
      <div className="flex flex-col justify-center text-center">
        <span className="text-white">Welcome to Github Repositories Explorer</span>
        <span className="text-white">You can search any github repositories in here.</span>
        <span className="text-white">Please input your name to continue.</span>
      </div>
      <form onSubmit={goToHome}>
        <input className="onboarding-input" value={username} onChange={(e) => setUsername(e.target.value)} />
      </form>
    </div>
  )
}

export default OnBoarding
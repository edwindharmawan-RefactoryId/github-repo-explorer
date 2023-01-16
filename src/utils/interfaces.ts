export interface IUser {
  name: string;
}

export interface IUsers {
  id: number;
  url: string;
  type: string;
  score: number;
  login: string;
  node_id: string;
  html_url: string;
  repos_url: string;
  gists_url: string;
  events_url: string;
  avatar_url: string;
  gravatar_id: string;
  site_admin: boolean;
  starred_url: string;
  followers_url: string;
  following_url: string;
  subscriptions_url: string;
  organizations_url: string;
  received_events_url: string;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  full_name: string;
  description: string;
  watchers_count: number;
  stargazers_count: number;
}

export interface IUsersResponse {
  config: any;
  data: {
    items: IUser[];
    total_count: number;
    incomplete_results: boolean;
  }
}

export interface IReposResponse {
  config: any;
  data: IRepo[]
}

export interface ICard {
  id: number;
  gitId: string;
  onClick: Function
  userRepos: IRepo[];
  setCardActive: Function;
  isLoadingRepos: Boolean;
  cardActive: number | null;
}

export interface IStore {
  user: {
    name: string
  }
  repos: {
    searchUsername: string;
    repos: IRepo[];
    users: IUsers[]
  }
}
export interface IRepos {
  repos: IRepo[];
  users: IUsers[];
  searchUsername: string;
}

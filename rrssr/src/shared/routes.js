import Home from './Home'
import Grid from './Grid'
import { fetchPopularRepos } from './api'

// Defined roots for root and unique categories by IDs
const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  }
]

export default routes

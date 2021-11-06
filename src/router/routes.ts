import IRoute from '../interfaces/route'
import Home from '../pages/home'
import About from '../pages/about'
import Login from '../pages/Login'

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    exact: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    exact: true
  },
  {
    path: '/about/:number',
    name: 'About',
    component: About,
    exact: true
  }
]

export default routes
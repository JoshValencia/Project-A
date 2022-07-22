import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Navbar, Nav} from "react-bootstrap"
import {useAuth0} from '@auth0/auth0-react'

// COMPONENTS
import Home from './routes/Home';
import Profile from './routes/Profile';
import SellerSignup from './routes/SellerSignup';

// ROUTES SETUP
const routes = [
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    needAuth: true
  },
  {
    name: "Become A Seller",
    path: "/seller/signup",
    component: SellerSignup,
    needAuth: true
  },
  {
    name: "Home",
    path:"/",
    component: Home,
    needAuth: false
  }
]

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <>
    <Router>
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              {routes.map(route => {
                if(route.path != "/" ){
                  if(route.needAuth && isAuthenticated){
                    return <Nav.Link href={route.path}>{route.name}</Nav.Link>
                  }
                }
              })}
            </Nav>
          </Container>
      </Navbar>
      <Container>
          <Switch>
            {routes.map(route => {
              return <Route path={route.path} component={route.component}/>
            })}
          </Switch>
      </Container>
      </Router>
    </>
    
  )
}

export default App

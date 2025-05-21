import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const App = () => (
  <div className="bg-container">
    <div className="card-container">
      <BrowserRouter>
        <Header />
        <div className="card-bottom-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </div>
)

export default App

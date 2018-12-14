import React from "React"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Main1 from './Main'
const Home = () => <div>Home</div>
const Hello = () => <div>Hello</div>

const App = () => {
  console.log("123")
  return (
    <Router >
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/main" component={Main} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Main1 />, document.getElementById("app"))

import React from "React"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

const Home = () => <div>Home</div>
const Hello = () => <div>Hello</div>

const App = () => {
  console.log("123")
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))

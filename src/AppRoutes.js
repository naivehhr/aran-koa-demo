//AppRoutes.js
import Loadable from 'react-loadable';
//...

const AsyncHello = Loadable({
  loading: <div>loading...</div>,
  loader: () => import('./Hello'), 
})

function AppRoutes(props) {
  <Switch>
    <Route exact path="/hello" component={AsyncHello} />
    <Route path="/" component={Home} />
  </Switch>  
}

export default AppRoutes
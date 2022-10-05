import { Route, Switch } from 'react-router-dom'

// components JSX
import Home from 'pages'

function Routers() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
    </Switch>
  )
}

export default Routers

import React, { useEffect } from 'react'
import logging from './config/logging'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './router/routes'

const App: React.FunctionComponent<{}> = props => {
  useEffect(() => {
    logging.info('Loading app.')
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component name={route.name} {...props} {...route.props} />)} />
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default App
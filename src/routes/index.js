// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Authenticated from '../pages/Authenticated';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Authenticated user={user} />} />
        <Route path="*" component={() => <Authenticated user={user} />} />
      </Switch>
    </div>
  );
}

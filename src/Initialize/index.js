import React from 'react';
import Loading from '../components/Loading';
import LogIn from '../pages/LogIn';
import Routes from '../routes';
import { useAuth } from '../utils/context/authContext';

function Initialize() {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  return <>{user ? <Routes user={user} /> : <LogIn />}</>;
}

export default Initialize;

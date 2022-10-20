import React from 'react';
import { signIn } from '../utils/auth';

export default function LogIn() {
  return (
    <div className="text-center mt-5">
      <h1>Welcome! Sign In!</h1>
      <button type="button" className="btn btn-success" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

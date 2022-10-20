import React from 'react';
import { signOut } from '../utils/auth';

export default function Authenticated({ user }) {
  return (
    <div className="text-center mt-5">
      <h1>Welcome, {user.displayName}!</h1>
      <img
        referrerPolicy="no-referrer"
        src={user.photoURL}
        alt={user.displayName}
      />
      <div className="mt-2">
        <button type="button" className="btn btn-danger" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

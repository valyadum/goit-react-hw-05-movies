import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Li, Nav, Ul } from '../components/App.styled';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <div>
      <Nav>
        <Ul>
          <Li>
            <NavLink to="/"> Home</NavLink>
          </Li>
          <Li>
            <NavLink to="/movies"> Movies</NavLink>
          </Li>
        </Ul>
      </Nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

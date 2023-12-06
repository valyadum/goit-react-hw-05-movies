import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Li, Nav, Ul } from './App/App.styled';
import { Suspense } from 'react';

export default function Layout() {

const container = {
  color: ' #fff',
  textDecoration:'none',
};
  return (
    <div>
      <Nav>
        <Ul>
          <Li>
            <NavLink style={container} to="/">  
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink style={container} to="/movies">
           
              Movies
            </NavLink>
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

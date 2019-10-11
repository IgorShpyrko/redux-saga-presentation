import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

interface IProps extends RouteComponentProps {

}

const MainNav: React.FC<IProps> = () => {
  return (
    <nav>
      <h2>Main Nav</h2>
      <NavLink exact={true} to='/'>Home</NavLink>
      <NavLink to='/generators'>Generators</NavLink>
      <NavLink to='/analogs'>Analogs</NavLink>
      <NavLink to='/count'>Count</NavLink>
      <NavLink to='/take'>Take</NavLink>
      <NavLink to='/fork'>Fork</NavLink>
      <NavLink to='/call'>Call</NavLink>
      <NavLink to='/put'>Put</NavLink>
      <NavLink to='/select'>Select</NavLink>
      <NavLink to='/throttle'>Throttle</NavLink>
      <NavLink to='/use'>Use casses</NavLink>
      <NavLink to='/test'>Test</NavLink>
    </nav>
  );
};

export default withRouter(MainNav);

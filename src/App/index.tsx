import React from 'react';
import { Route, Switch, RouteComponentProps, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CountExample from 'src/containers/CountExample';
import Select from 'src/containers/Select';
import MainNav from 'src/containers/MainNav';
import Iterators from 'src/containers/Iterators';
import Generators from 'src/containers/Generators';
import AboutSaga from 'src/containers/AboutSaga';
import Analogs from 'src/containers/Analogs';
import UseCases from 'src/containers/UseCases';
import TakeComponent from 'src/containers/Take';
import HomeComponent from 'src/containers/Home';
import ForkComponent from 'src/containers/Fork';
import TestComponent from 'src/containers/Test';
import ThrottleComponent from 'src/containers/Throttle';

interface IProps extends RouteComponentProps {}

const App: React.FC<IProps> = () => {
  return (
    <main>
      <MainNav />
      <Switch>
        <Route exact={true} path='/' component={HomeComponent} />
        <Route path='/iterators' component={Iterators} />
        <Route path='/generators' component={Generators} />
        <Route path='/about' component={AboutSaga} />
        <Route path='/analogs' component={Analogs} />
        <Route path='/count' component={CountExample} />
        <Route path='/take' component={TakeComponent} />
        <Route path='/fork' component={ForkComponent} />
        <Route path='/select' component={Select} />
        <Route path='/throttle' component={ThrottleComponent} />
        <Route path='/use' component={UseCases} />
        <Route path='/test' component={TestComponent} />
      </Switch>
      <ToastContainer />
    </main>
  );
};

export default withRouter(App);

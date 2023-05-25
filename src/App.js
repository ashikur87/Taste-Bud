import './App.css';
import HomePage from './components/reactComponents/HomePage/HomePage';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddService from './components/Admin/AddService/AddService';
import ManageService from './components/Admin/ManageService/ManageService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import MealDetail from './components/reactComponents/MealDetail/MealDetail';
import Checkout from './components/Checkout/Checkout';
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/meal/:mealId" component={MealDetail} />   
          <PrivateRoute path="/order/:id" component={Checkout} />   
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;

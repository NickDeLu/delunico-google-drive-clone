import React from 'react'
import Signup from './authentication/Signup'  
import Login from './authentication/Login'
import Profile from './authentication/Profile'  
import PrivateRoute from './authentication/PrivateRoute'
import ForgotPassword from './authentication/ForgotPassword'
import UpdateProfile from './authentication/UpdateProfile'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './google-drive/Dashboard'

function App() {
  return (
    
    <Router>
      <AuthProvider>
          <Switch>
              {/* Dashboard */}
              <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
              <PrivateRoute exact path="/folder/:folderId" component={Dashboard}></PrivateRoute>

              {/* profile */}
              <PrivateRoute exact path="/user" component={Profile}></PrivateRoute>
              <PrivateRoute exact path="/update-profile" component={UpdateProfile}></PrivateRoute>
              {/* auth */}
              <Route path="/signup" component ={Signup}/>
              <Route path="/login" component ={Login}/>
              <Route path="/forgot-password" component ={ForgotPassword}/>
          </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;

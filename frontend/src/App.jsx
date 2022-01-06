import './App.css';
import {Provider} from 'react-redux';
import {store} from './storeConfig/store'
import { Switch, Route ,BrowserRouter} from 'react-router-dom';
import displayItemsPage from './features/displayItemPage/pages/Items.page'
import Header from './shared/Header'
import Footer from './shared/Footer'


function App() {
  return (
    <Provider store={store}>
<BrowserRouter>
<Header/>
      <Switch>
        {/* <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUpUserPage} />
        <Route path='/account/validate/' component={validatAccount}/>
        <Route path='/admin-login' component={SignInAdminPage}/>
        <Route path='/admin-dashboard' component={DashboardAdminContainer}/> */}
        <Route path='/' component={displayItemsPage}/>
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
      <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

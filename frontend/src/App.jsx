import './App.css';
import { Provider } from 'react-redux';
import { store } from './storeConfig/store'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import displayItemsPage from './features/displayItemPage/pages/Items.page'
import SignInUserPage from './features/auth/signIn.container/pages/sign.in.page'
import SignUpUserPage from './features/auth/signUp.container/pages/sign.up.page'
import AddItemPage from './features/addViheculePage/pages/Items.page'
import Header from './shared/Header'
import Footer from './shared/Footer'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/sign-in" component={SignInUserPage} />
          <Route exact path="/sign-up" component={SignUpUserPage} />
          <Route exact path="/add-item" component={AddItemPage} />
          <Route path='/' component={displayItemsPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

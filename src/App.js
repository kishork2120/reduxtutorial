import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PageOne from './components/page1.component';
import PageTwo from './components/page2.component';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { storeFunction } from './reducers/reducer';

const store = createStore(storeFunction);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={PageOne} exact/>
        <Route path="/two" component={PageTwo}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

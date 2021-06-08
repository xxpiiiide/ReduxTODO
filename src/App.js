import React from 'react';
import Subcribers from './component/Subscribers';
import '../src/App.css';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Subcribers />
			</div>
		</Provider>
	);
}

export default App;

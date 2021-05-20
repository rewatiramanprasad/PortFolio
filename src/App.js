import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import { Router, Route } from "react-dom";
import Home from "./Home";
import Contact from "./Contact";
import Test from"./Test";
import Navbar from './Navbar';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
	
  return (
    <Router>
	<div>
		<switch>

			<Route exact path="/" component={Home}/>
			<Route exact path="/Contact" component={Contact}>
				
				<Contact/>
			</Route>
			<Route exact path="/Test" component={Test}/>

		</switch>
	
	
	</div>
	</Router>
	
  );
		
}

export default App;

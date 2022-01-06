import React from "react";

import{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react -router-dom";
import "./App.css";
import{DefaultLayout} from ".layout/DefaultLayout";
import{Entry} from ".layout/DefaultLayout";
import{AddTicket} from ".layout/DefaultLayout";
import{TicketLists} from ".layout/DefaultLayout";
import{Ticket} from ".layout/DefaultLayout";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import reactRouterDom from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
			<Switch>
				<Route path="/">	<Entry/></Route>
	
		<Route path="/dashboard"><Dashboard/></Route>
		<Route path="/add-tickte">	<AddTicket/></Route>
		<Route path="/ticket">
		<TicketLists/></Route>
		<Route path="/ticket/:td">	<Ticket/></Route>
	
		<DefaultLayout/>
	
		</Switch>
		</Router>
		</div>
	);
}

export default App;

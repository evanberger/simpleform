import React, { Component } from 'react';
import {Mongo} from 'meteor/mongo';
import ReactDOM from 'react-dom';
import LoadForm from './components/load_form';
import Table from './components/table';
import {LoadData} from '../imports/collections/load_data';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// Components go here
// Create a component
class App extends Component {
  // Constructor method boilerplate - super calls the parent component
  constructor(props) {
    super(props);

    // Initializing state as an empty array
    // State's role is essentially to determine rerenders
    this.state = {"preset": []};
  }
  componentWillMount(){
    // This is the place to add the Mongo-based seed data
    console.log("this app is about to render");
    console.log(LoadData);
    // console.log(LoadData.find({peakload});
  }
  render(){
    return (
      // Form component while passing through the props titled 'this.state.presets'
      <div>
         <LoadForm />
         <Table />
      </div>
    );
  }
};


// After Meteor loads in the browser, render the app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});

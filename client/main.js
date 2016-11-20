import React, { Component } from 'react';
import {Mongo} from 'meteor/mongo';
import ReactDOM from 'react-dom';
import LoadForm from './components/load_form';
import {LoadData} from '../imports/collections/load_data';



// Components go here
// Create a component
class App extends Component {
  // Constructor method boilerplate - super calls the parent component
  constructor(props) {
    super(props);

    // Initializing state as an empty array
    // State's role is essentially to determine rerenders
    this.state = {"loads": []};
  }
  componentWillMount(){
    // This is the place to add the Mongo-based seed data
    console.log("this app is about to render");
    console.log(LoadData);
    // console.log(LoadData.find({peakload});
  }
  render(){
    return (
      // Form component while passing through the props titled 'this.state.loads'
      <div>
         <LoadForm />
      </div>
    );
  }
};

// Meteor templates - a test
SimplePeak = new Mongo.Collection('SimplePeak');
if (Meteor.isClient) {
  Template.simplestform.helpers({
    'demo': function(){
      return peak.value;
    }
  });
}

//  11/20: This is accomplishing everything except getting the data on the damn screen. Promise maybe.
Template.simplestform.events({
  'submit form': function(event) {
    event.preventDefault();
    var PeakLoadVar = event.target.peak.value;
    console.log("Peak Load is: " + PeakLoadVar);
    SimplePeak.insert({
      "peakload": PeakLoadVar
    });
    event.target.peak.value = 0;
  }
});

// After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
  console.log("I'm here");
});

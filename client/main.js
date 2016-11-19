import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LoadForm from './components/load_form';
import LoadData from '../imports/collections/load_data';

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
  }
  render(){
    return (
      // Form component while passing through the props titled 'this.state.loads'
      <div>
         <LoadForm loads={this.state.loads}/>
      </div>
    );
  }
};

// After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'));
  console.log("I'm here");
});

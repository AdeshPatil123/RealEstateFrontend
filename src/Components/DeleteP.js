import React, { Component } from 'react';
import axios from 'axios';
import queryString from "query-string";

class DeleteProperty extends Component {
  constructor(props) {
    super(props);

    // No need to initialize state for this example
  }

  // Handler for delete button click
  handleDeleteClick = () => {
    const { propertyId } = this.props; // Assuming propertyId is passed as a prop

    // Send a DELETE request to delete the property
    axios
      .delete(`https://real-estate-node-code.vercel.app/delete/${propertyId}`)
      .then(() => {
        // Handle the success here, e.g., show a success message
        console.log('Property deleted successfully');
      })
      .catch((error) => {
        // Handle errors here, e.g., show an error message
        console.error('Error deleting property:', error);
      });
  };

  render() {
    return (
      <div>
        <h2>Delete Property</h2>
        <button onClick={this.handleDeleteClick}>Delete Property</button>
      </div>
    );
  }
}

export default DeleteProperty;

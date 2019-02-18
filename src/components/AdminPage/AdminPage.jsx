import React, {Component} from "react";
import Table from "../Table/Table"
import { getRestaurants, deleteRestaurant } from '../../services/restaurantService';

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  }

  handleDelete = restaurantId => {
    deleteRestaurant(restaurantId)
    this.setState({ restaurants: getRestaurants() });
  };

  render(){
    const {restaurants} = this.state;
    return (
      <div data-testid="admin-page">
        <Table restaurants={restaurants} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default AdminPage;

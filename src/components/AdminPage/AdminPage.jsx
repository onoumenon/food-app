import React, {Component} from "react";
import RestaurantTable from "../RestaurantTable/RestaurantTable"
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
        <div className="row justify-content-end">
          <a className="btn btn-primary btn-sm mb-2" href="">Create New</a>
        </div>
        <div className="row">
          <RestaurantTable restaurants={restaurants} handleDelete={this.handleDelete}/>
        </div>
      </div>
    )
  }
}

export default AdminPage;

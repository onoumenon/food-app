import React, {Component} from "react";
import Table from "../Table/Table"
import { getRestaurants } from '../../services/restaurantService';

class AdminPage extends Component {
  state = {
    restaurants: getRestaurants()
  }

  render(){
    const {restaurants} = this.state;
    return (
      <div data-testid="admin-page">
        <Table restaurants={restaurants} />
      </div>
    )
  }
}

export default AdminPage;

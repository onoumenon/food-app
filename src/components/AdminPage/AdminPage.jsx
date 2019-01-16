import React, {Component} from "react";
import Table from "../Table/Table"

class AdminPage extends Component {
  render(){
    return (
      <div data-testid="admin-page">
        <Table />
      </div>
    )
  }
}

export default AdminPage;

import React, { Component } from "react";
import CardView from "./CardView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import products from "./Products";

class Store extends Component {
    constructor(props) {
      super(props);
      this.product = products;
      this.state = {selected: 'view_list'};
    }
    
    onClickButton(evt) {
        evt==='view_list' ? this.setState({selected: 'view_module'}) : this.setState({selected: 'view_list'});
    }
    
    render() { 
        return (
        <>
        <div className='main-content'>
            <IconSwitch
              icon={this.state.selected}
              onSwitch={evt => this.onClickButton(evt)}
            />
            {this.state.selected==='view_list' ? <CardView cards={products} /> : <ListView items={products} />}
        </div>
        </>
        );
    }
}

export default Store;
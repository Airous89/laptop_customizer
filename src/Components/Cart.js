import React, { Component } from 'react';



class Cart extends Component{
  render (){
    const Cart = Object.keys(this.props.selectedOption)
    .reduce((acc, curr) => acc + this.state.selected[curr].cost,0);
    const TotalCost = Object.keys(this.props.selected)
    .map(key =>  <div className="summary__option" key={key}>
      <div className="summary__option__label">{key}</div>
      <div className="summary__option__value">{this.props.selected[key].name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.selected[key].cost)}
      </div>
    </div>)
    return(
      <div>
        <section className="Your cart">
          <h3>Your Cart</h3>
            {TotalCost}
          <div className="summary__total"></div>
          <div className="summary__total">Total Price: </div>
          <div className="summary__total__value">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(Cart)}

          </div>
        </section>
      </div>
    )
  }
}


export default Cart;

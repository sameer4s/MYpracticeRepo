import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { itemname: 'Laptop', price: 75000 },
        { itemname: 'Smartphone', price: 25000 },
        { itemname: 'Headphones', price: 3000 },
        { itemname: 'Keyboard', price: 1200 },
        { itemname: 'Mouse', price: 800 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Online Shopping Items</h2>
        {this.state.items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;

import React from 'react';
import './shop-header.css';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ orderTotal, numItems }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${orderTotal})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, numItems }}) => {
  return {
    orderTotal,
    numItems
  }
}

export default connect(mapStateToProps)(ShopHeader);

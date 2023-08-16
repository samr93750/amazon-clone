import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import moment from 'moment/moment';

function Order({order}) {
  return (
    <div className="order">
      <h2>Orders</h2>
      {/* <p>{moment.unix(order.data.created).format("MMM DD YYYY,h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
      renderText={(value)=>
      <h3>Order Total : {value}</h3>}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}

      /> */}
    </div>
  );
}

export default Order

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
const baseUrl = 'https://api-m.sandbox.paypal.com';
const base64 = require('base-64');

const clientId = 'AY97lT-qDTJcQVWBNEKP1L4wS3bGrm_G-S0RQ-VfK-KT1TJ9xjxoD0kKDQGoqtJot2OBQJc9agwL-Sgo';
const secretKey = 'EAb29ns12_UG22VFAPpA5xQ0z1qQZ8exZv1T9OhLIW-d4EKUoz7sgqCnPsh0IZbFX21ZeAiih-pxvbA5';

const orderDetail = ({ items }, value, currency) => ({
  intent: 'CAPTURE',
  purchase_units: [
    {
      items,
      amount: {
        currency_code: currency,
        value,
        breakdown: {
          item_total: {
            currency_code: currency,
            value,
          },
        },
      },
    },
  ],
  application_context: {
    return_url: 'https://example.com/return',
    cancel_url: 'https://example.com/cancel',
  },
});

const generateToken = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Authorization', `Basic ${base64.encode(`${clientId}:${secretKey}`)}`);

  const requestOptions = {
    method: 'POST',
    headers,
    body: 'grant_type=client_credentials',
  };

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/v1/oauth2/token`, requestOptions).then((response) => response.text()).then((result) => {
      const { access_token } = JSON.parse(result);
      resolve(access_token);
    }).catch((error) => {
      reject(error);
    });
  });
};

const createOrder = (cart, totalValue, token = '') => {
  const total = totalValue.toString();
  const cartToPaypal = cart.map((p) => ({
    items:
      {
        name: p.name,
        description: p.name,
        quantity: '1',
        unit_amount: {
          currency_code: p.currency,
          value: p.price,
        },
      },
  }));
  const order = orderDetail(cartToPaypal, total, 'BRL');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,

    },
    body: JSON.stringify(order),
  };

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/v2/checkout/orders`, requestOptions).then((response) => response.text()).then((result) => {
      const res = JSON.parse(result);
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
};

const capturePayment = (id, token = '') => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,

    },
  };

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/v2/checkout/orders/${id}/capture`, requestOptions).then((response) => response.text()).then((result) => {
      const res = JSON.parse(result);
      resolve(res);
    }).catch((error) => {
      reject(error);
    });
  });
};

export default {
  generateToken,
  createOrder,
  capturePayment,
};

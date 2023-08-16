import { PayPalButton } from "react-paypal-button-v3";

export default function PayPalBtn ({amount}){
    return (
      <PayPalButton
        amount={amount}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "AY97lT-qDTJcQVWBNEKP1L4wS3bGrm_G-S0RQ-VfK-KT1TJ9xjxoD0kKDQGoqtJot2OBQJc9agwL-Sgo"
        }}
      />
    );
  }
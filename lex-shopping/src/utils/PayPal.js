const Username = 'AddtjRiXOS97Jo3FQKfK-OLFwuhZASGggKroVfupdko_vkjmxqcT82DwhzdtPpPlVXeUCxbn9dNen0Jx';

const usePayPalData = () => {

  const bodyData = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'BRL',
          value: '12.53',
        },
      },
    ],
  };
  const fetchPayPalData = async () => {
    try {            
      const request = await fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic QWRkdGpSaVhPUzk3Sm8zRlFLZkstT0xGd3VoWkFTR2dnS3JvVmZ1cGRrb192a2pteHFjVDgyRHdoemR0UHBQbFZYZVVDeGJuOWROZW4wSng6',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });
      const response = await request.json()
      console.log(response)
    } catch (error) {
      console.error(error);
    } 
  };
  
  const data = fetchPayPalData()
  
  return data

};

module.exports = usePayPalData

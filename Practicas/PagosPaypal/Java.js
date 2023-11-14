
var CLIENT_ID = 'AW0jqkWnu5a3CE9AKf5KPpvtf73axkxnOkTbdtISvznCbpJzKLZtx31qD-orG9KJX5pQalSloMIaAOjm';
var SECRET_KEY = 'EA0NT3cE-Z-_X4NApiDXipWZnmYYLE_Gf0JUbLyUHaO5iBFhm6rSnVP_Tp_-p6UBAFc_4-oJLlGdM6Gm';

// Load the PayPal SDK script
var script = document.createElement('script');
script.src = 'https://www.paypal.com/sdk/js?client-id=' + CLIENT_ID;
script.async = true;

// Add the script tag to the head
document.head.appendChild(script);

// Render the PayPal button into #paypal-button-container
script.onload = function () {
    paypal.Buttons({
        createOrder: function(data, actions) {

            // Set up the transaction--CONFIGURAR LA TRANSACCION
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency: 'MXN',
                        value: '100.00'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction--CAPTURA FONDOS
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer--MENSAJE DE EXITO
                alert('Transaccion completada ' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container');
};

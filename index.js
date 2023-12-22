const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
  

    
notifier.notify(
  {
    title: ' مرحبا ',
    message: 'مرحبا بك ',
   // icon: path.join(__dirname, 'coulson.jpg'), // Absolute path (doesn't work on balloons)
    sound: true, // Only Notification Center or Windows Toasters
    wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
  },
  function (err, response, metadata) {
    // Response is response from notification
    // Metadata contains activationType, activationAt, deliveredAt
  }
);

notifier.on('click', function (notifierObject, options, event) {
  // Triggers if `wait: true` and user clicks notification
});

notifier.on('timeout', function (notifierObject, options) {
  // Triggers if `wait: true` and notification closes
});


      res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

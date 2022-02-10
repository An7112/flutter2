// const firebase 
const FCM = require('fcm-node')
    
    var serverKey = require('./privatekey.json') //put the generated private key path here    
    
    var fcm = new FCM(serverKey)

    var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'AAAA6NpHDu0:APA91bEmon5-ghcuaXaYlAZZOis2g5tsBU47oDdiHL7seFm8-2s3mUTuzHy_YUyFbkYpnJX9dDDURSZ3uovPhthpiOl4YnJQHQStF0kWHuLdsgkm8EK5WofsAcvA-PkEKoFPdcX6yO9q', 
        // collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            title: 'my value',
            body: 'my another value'
        }
    }
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!")
        } else {
            console.log("Successfully sent with response: ", response)
        }
    })
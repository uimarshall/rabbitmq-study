#!/usr/bin/env node

/** We'll call our message publisher (sender) send.js and our message consumer (receiver) receive.js. The publisher will connect to RabbitMQ, send a single message, then exit. */

// In send.js, we need to require the library first:

var amqp = require('amqplib/callback_api');

/** 
 
 2. then connect to RabbitMQ server
 *********************************
 amqp.connect('amqp://localhost', function(error0, connection) {});

3. Next we create a channel, which is where most of the API for getting things done resides:

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {});
});


4. To send, we must declare a queue for us to send to; then we can publish a message to the queue:

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'Hello world';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" [x] Sent %s", msg);
  });
});

5. Declaring a queue is idempotent - it will only be created if it doesn't exist already. The message content is a byte array, so you can encode whatever you like there.

Lastly, we close the connection and exit:

setTimeout(function() {
  connection.close();
  process.exit(0)
  }, 500);
 * */

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = 'hello';
    var msg = 'Hello World!';

    channel.assertQueue(queue, {
      durable: false,
    });
    channel.sendToQueue(queue, Buffer.from(msg));

    console.log(' [x] Sent %s', msg);
  });
  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});

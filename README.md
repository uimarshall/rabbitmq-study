# rabbitmq-study

`RabbitMQ` is a message broker: it accepts and forwards messages. You can think about it as a post office: when you put the mail that you want posting in a post box, you can be sure that Mr. or Ms. Mailperson will eventually deliver the mail to your recipient. In this analogy, `RabbitMQ is a post box, a post office and a postman`.

The major difference between RabbitMQ and the post office is that it doesn't deal with paper, instead it accepts, stores and forwards binary blobs of data ‒ messages.

RabbitMQ, and messaging in general, uses some jargon.

`Producing` means nothing more than sending. A program that sends messages is a producer :

`A queue` is the name for a post box which lives inside RabbitMQ. Although messages flow through RabbitMQ and your applications, they can only be stored inside a queue. A queue is only bound by the host's memory & disk limits, it's essentially a large message buffer. Many producers can send messages that go to one queue, and many consumers can try to receive data from one queue. This is how we represent a queue:

`Consuming` has a similar meaning to receiving. A consumer is a program that mostly waits to receive messages:

`(using the amqp.node client)`
In this part of the tutorial we'll write two small programs in Javascript; a producer that sends a single message, and a consumer that receives messages and prints them out.

## The amqp.node client library

> RabbitMQ speaks multiple protocols. This tutorial uses AMQP 0-9-1, which is an open, general-purpose protocol for messaging. There are a number of clients for RabbitMQ in many different languages. We'll use the amqp.node client in this tutorial.

`First, install amqp.node using npm: npm install amqplib`

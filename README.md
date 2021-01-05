# Welcome to one of my firsts IoT projects!

Wish me luck!

## To make things clearer

This repo proporse is to only document a inital mqtt protocol setup to work with IoT.

The target of this project is to build a working fingerprint authentication process with software and hardware.

We gonna be using the esp32 nodemcu, with wifi connection, and DY50 from adafruit, an local hiveMQ broker (hivemq-ce-2020.2) and a javascript mqtt as the client server.

### Setup
Since we are using the hiveMQ broker, you will need to download the binaries from the hiveMQ [HiveMQ Community Edition](https://github.com/hivemq/hivemq-community-edition) repo.

After downloading the program, you can use the our configuration under the ```/hivemq-ce/conf```.

Next, you will need to install the javascript dependecies. Navigate to ```javascript-mqtt-client``` and execute ```npm install```.

And, finally, in order to run this project, you will need to start the hiveMQ broker binary that is located at ```/your-hivemq-broker-installation/bin/run.bat/``` if you are using windows. if you are using a unix based system, start the ```run.sh``` file. Next, execute ```npm start``` under the javascript folder and voilá, the project is running and hopefully working.

This is an application that fetches flight data from an .xml file, reads, manipulates and displays relevant information using React Redux for the front-end.

This is not a complete project and much of the output could be displayed in a more elegant fashion 
IE: 
-Proportion of flights could be displayed as a pie chart, encompassing the curious fact;
-Most daily departures from Manchester could have every flight displayed as a card;

Instructions to run:

1 - On a directory of your choice, open a terminal and type : ```git clone https://github.com/FabioFDaSilva/traveltek-assignment.git```
2 - ```cd traveltek-assignment/server```
3 - ```npm install```
3 - ```cd ../client```
4 - ```npm install```
5 - ```npm start ```
6 - open another terminal
7 - ```cd traveltek-assignment/server```
8 - ```node index.mjs```
9 - Navigate to localhost:3000 once react is done compiling and mounting.

Notes:

1 -npm start sometimes takes a while to launch the application.

2 - localhost:3000 and localhost:3001 will be used for this application, if you have anything else running on these ports feel free to change the ports:
    2.1-server port: traveltek-assignment/server/index.mjs line 57;
    2.2-server proxy port: traveltek-assignment/client/src/serupProxy.js line 7;
    2.3-client port: traveltek-assignment/client/package.json line 26:
        2.3.1 - change ```"start": "react-scripts start"``` to ```"start": "PORT= yourDesiredPort react-scripts start"```,

2 - the .xml file is located at traveltek-assignment/server/data/






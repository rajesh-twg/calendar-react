# React Template to hit an GET API endpoint.

## Prerequisite
- Node v14.16.0

___
## Getting Started

Clone the repository and install all the dependeincies

```shell 
$ git clone https://github.com/rajesh-twg/calendar-react
$ cd calender-react
$ npm install # to install all the deps.
$ npm install -g json-server # to install global json-server package
```

Open two terminals and start npm server to server the react project and json-server to server data as backend.

- For JSON Server
```shell
$ json-server --watch db.json
```
- Start react project
```shell
$ npm start
```
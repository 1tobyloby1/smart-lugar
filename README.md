# Smart-lugar

## Overview
This project is a web application consisting of a React frontend and a Node.js Express backend. The frontend and backend codebases are organized into separate directories named "frontend" and "backend" within the project repository.

<br>

## Prerequisites
Before running this project locally or deploying it, ensure you have the following prerequisites installed:

* [Node.js](https://nodejs.org/en) (version >= 20)
* [Docker](https://www.docker.com/) (for running Docker containers)
* OPC UA server (You need your own running opc ua server)

<br>

## Getting started
To get started with this project, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/1tobyloby1/smart-lugar.git
    ```
2. Install dependencies:
   ```
   npm install
   ```

<br>

## Run project
Run the project in the development mode.

#### Run the entire project with one command
```
npm start
```

#### Run individual projects 
```
cd frontend # (frontend/backend)
npm start
```

<br>

## Try out the API (Documentation)
This project uses swagger UI for documenting the API. When the backend is running you can try out all the different endpoints by going to [localhost/swagger](http://localhost:80/swagger). You can also find the documentation by going to https://app.swaggerhub.com/apis-docs/600879/smart-lugar-api/1.0.0.

<br>

## Build project
Build and start the docker containers using docker-compose.
```
docker-compose up --build
```

<br>

## License
This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

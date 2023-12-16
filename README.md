# locoDiary

Everything marked with a § is subject to change.

## Project description

This project aims to build a simple management system for moving companies targeted primarily for small to medium scale companies on the swedish market.
The goal is to allow these companies to manage their orders, fleet, materials, route planning, workers and statistics in a simple and efficient manner.

Today, many of these companies use a combination of excel sheets, google calendar, SMS and other tools to manage their business. This project aims to provide a simple, unified and efficient alternative to these tools.

## Project structure

The project is divided into two parts: the backend and the frontend. The backend is written in Typescript§ and uses the Prisma ORM§ to interact with the database. The frontend is written in Vue.js§ and uses the Vuetify UI framework§.

The backend is divided into three parts: the database, the API and the server. The database is a MongoDB§ database hosted on MongoDB Atlas§. The API is a GraphQL§ API hosted on Heroku§. The server is a Node.js§ server hosted on Heroku§.

The frontend is divided into two parts: the client and the server. The client is a Vue.js§ application hosted on Netlify§. The server is a Node.js§ server hosted on Heroku§. The server is used to serve the client and to provide an API for the client to interact with the backend. The server is also used to provide a proxy for the client to interact with the API. 

## Project setup

### Prerequisites

- Node.js§
- npm§
- MongoDB§
- Heroku§
- Netlify§

### Installation

1. Clone the repository
2. Install the dependencies
    - `npm install`
3. Create a `.env` file in the root directory

### Topics to discuss

- Tracking , 
- Shift management 
- Order management 
- Worker availability handling
- Vehicle availability handling
- Worker/vehicle allocation
- Order tracking
- Order status
- Order cost estimation
- Order scheduling
- Order notification
- Order lifecycle
- Employee management
- Employee salary calculator
- Employee enrollment
- Leave management
- Leave allocation
- Leave notification
- Leave lifecycle
- Leave status
- Leave tracking
- Leave cost estimation
- Leave scheduling


---
> Srijan's original notes

 worker -enrollment (list add remove employees)
        -leave management ( allocate users to dummy leave order : to be removed while stats . need better tactic )
        -order allocation 
        -work order notification


order -quote receive
      -order scheduling(allocate workers/vehicles and customer tracking)
      -order tracking( pending orders, manage order status , order allocation )(fetch + update status)

admin/stats -employee management
    -employee salary calculator 
    -order cost estimation
    

ORDER lifecycle 

recieve quotation + estimate load (worker + vehicle)-> get estimate date and schedule pickup/drop. allocate vehicle and workers ->
worker/vehicle notified about order . -> on order date notified to start order from workers and vehicles -> (maybe)check in at pickup location for all workers and vehicles.-> on order completion status updated . payment registered.



er diagram 
![alt text](diagram.jpg)

---
**Assignment_9**

Author : Shreyas Madhusudan Dasari

NUID : 002743612

**Description**

This is a web application that uses React for the front end and MongoDB for the back end. The back-end has APIs for adding new users, viewing all users who have been added, modifying users, and deleting users based on a match with either their username or email ID. Users can submit their login information on the front-login end's page to log in. They will be led to pages with details about the home, jobs, contacts, and about areas of the application if their login credentials match those kept in the MongoDB database. Each page features a card component that offers thorough information on the relevant area.

**Technologies Used**

1. MongoDB
2. React JS

**Installation**

1. Clone the Repository.
2. Go to the project's root directory.
3. Install the back-end dependencies by running npm install.
4. Run cd client to access the client directory.
5. Install the front-end dependencies by running npm install.

**Usage**

1. Start npm The front-end and back-end servers should both be started by running dev from the root directory.
2. To view the login page, launch a web browser and go to http://localhost:3001.
3. After entering your login information, click "Submit."
4. You will be routed to a page with details about the home, jobs, contacts, and about areas of the application if your credentials match those in the MongoDB database.
5. Each page features a card component that contains comprehensive information on the given section.

**API Endpoints**

1. POST /users/create: creates a new user in the database.
2. GET /users/getAll: retrieves all users from the database.
3. PUT /users/edit:id: updates the user with the specified ID.
4. DELETE /users/delete:id: deletes the user with the specified ID.
5. POST /users/login: User can login using the credentials.
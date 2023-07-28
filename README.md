

# Contact App

The Contact App is a simple application that allows you to manage your contacts. You can add, remove, and edit contacts using this app. The contacts are stored in a JSON Server.

## Features

- Add a new contact: Enter the contact's name, phone number, and email address to add a new contact to the list.
- Remove a contact: Select a contact from the list and remove it from your contacts.
- Edit a contact: Update the details of an existing contact, including the name, phone number, and email address.

## Technologies Used

The Contact App is built using the following technologies:

- **Frontend**: The user interface of the app is developed using React.js, a popular JavaScript library for building user interfaces.
- **Styling**: CSS is used for styling the app's components.
- **Backend**: The contacts are stored using JSON Server, a simple RESTful API server that uses a JSON file as a data source.

## Setup


1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd task-manager`.
3. Install the dependencies: `npm install`.

4. Start the React development server:
   ```shell
   npm start
   ```
   This will start the React development server and open the app in your browser at `http://localhost:3000`.

5. Start the JSON server:
   ```shell
   cd server-api
   npm start
   ```
   This will start the JSON server and make it available at `http://localhost:3007`.



## Usage

Once the Contact App is running, you can perform the following actions:

- **Adding a contact**: Click on the "Add Contact" button and enter the details of the new contact in the provided fields. Click "add" to add the contact to your list. The contact will be saved to the JSON file using JSON Server.
- **Removing a contact**: Select a contact from the list by clicking on it, then click the "trash" icon to delete the contact. The contact will be removed from the JSON file.
- **Editing a contact**:  Click the "Edit" icon to modify the contact's information and save the changes. The updated contact will be saved to the JSON file.
- **Search a contact**: In the search bar enter the contact name that you wish to search. After filtering the results will be shown.
  
## Contributing

Contributions to the Contact App are welcome! If you find any bugs or have suggestions for improvements, please submit an issue or a pull request to the GitHub repository.



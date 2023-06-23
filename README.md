Features
User Registration
The application supports user registration using Google Sign-Up. Users can sign up with their Google accounts, which provides a convenient and secure way to authenticate.

User Interface
After signing up and logging in, users can access their personalized user interface. Here they can perform the following actions:

Add or delete their interests: Users can select their areas of interest from a predefined list. This information helps in fetching relevant research papers.
Choose a preferred day: Users can set their preferred day of the week to receive the fetched research papers. The application will automatically deliver the papers on the chosen day.

Research Paper Fetching
The application integrates with the Google Scholar API to fetch research papers based on the user's interests. It retrieves papers related to the selected interests from the past week and compiles them into a weekly digest.

The fetching process is executed automatically every week, considering the user's preferred day. Users will receive an email notification containing the research papers on their selected day.

Technologies Used
The Research Paper Fetcher web application is built using the following technologies:

Node.js: A JavaScript runtime for server-side development.
Express.js: A web application framework for Node.js.
Passport.js: An authentication middleware for Node.js.
MongoDB: A NoSQL database used to store user information.
Google Sign-In API: Enables user authentication using Google accounts.
Google Scholar API: Retrieves research papers based on user preferences.
Nodemailer: A module for sending email notifications.
Cron: A time-based job scheduler for triggering weekly paper fetches.
Contribution

If you would like to contribute to the Research Paper Fetcher web application, please follow these steps:

Fork the repository on GitHub.
Create a new branch for your feature or bug fix.
Make the necessary changes and commit them.
Push your changes to your fork.
Submit a pull request to the original repository.
Please ensure that your code adheres to the project's coding standards and includes appropriate documentation.

Support
If you encounter any issues or have any questions or suggestions, please feel free to open an issue. We appreciate your feedback and will do our best to address any concerns.

License
The Research Paper Fetcher web application is open source and released under the MIT License.

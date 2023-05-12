## Hackaton 2023 : Vacances

Start by running `npm run setup` in the root folder of the project, then edit the .env file in the `back` folder and add your DB credentials.

Then, run the following commands in the `back` folder to prepare the DB :
`bin/console d:d:d --force`
`bin/console d:d:c`
`bin/console d:m:m`

Return to the root folder and use the following commands to run the project :
`npm run dev`: Run the whole project
`npm run dev-front`: Start only the frontend
`npm run dev-back`: Start only the backend
`npm run stop-back`: Stop the symfony webserver used by the backend

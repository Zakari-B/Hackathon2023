## Hackaton 2023 : Vacances

Start by running `npm run setup` in the root folder of the project, then:

- Copy the .env file in the `back` folder and rename the copy to `.env.local`. Add your local DB credentials in this file.
- Copy the .env.sample in the `front` folder and rename the copy to `.env`. There should be no need to modify it unless you changed the ports used by this application.

Then, run the following commands in the `back` folder to prepare the DB :
- `bin/console d:d:d --force`
- `bin/console d:d:c`
- `bin/console d:m:m`

Return to the root folder and use the following commands to run the project :
- `npm run dev`: Run the whole project
- `npm run dev-front`: Start only the frontend
- `npm run dev-back`: Start only the backend
- `npm run stop-back`: Stop the symfony webserver used by the backend

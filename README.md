# Recipes App
## How to launch the project?

### Backend
1. Type `cd backend` from the root folder to get into the backend folder.
2. Type `npm i` to install all dependencies.
3. Create `.env` file and add this: `API_URL=https://www.themealdb.com/api/json/v1/1`. This is a base url of the Recipe API.
4. Type `npm run start:dev` to launch the Nest application.

### Frontend
1. Type `cd frontend` from the root folder to get into the frontend folder.
2. Type `npm i` to install all dependencies.
3. Type `npm run dev` to launch the Next application.

## How to test the project?
1. After launching you'll be redirected to the route `/recipe/all`. It shows all recipes.
2. If you click on any recipe you'll be redirected to the page of one (route `/recipe/:id`).
3. On this page you can click on recipe's country to filter recipes by country. Also, you can click on any item on the tab to the right to filter recipes by its category. Finally you can click on any ingredient of this recipe and filter recipes by one.
4. The whole design is pretty simple and comfortable to use.

### Conclusion
After this actions you can launch this fullstack application and test its possibilities.

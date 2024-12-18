import "./Home.scss";
import { VACANCIES } from "../../state/state";
import VacancyCard from "../../components/VacancyCard";
import VacancyDetails from "../../components/VacancyDetails";
import SearchBar from "../../components/SearchBar";

function Home() {
  return (
    <main>
      <SearchBar />
      <div>
        {VACANCIES.map((vacancy) => (
          <VacancyCard vacancyData={vacancy} />
        ))}
      </div>
      <div>
        <VacancyDetails vacancy={VACANCIES[0]} />
      </div>
    </main>
  );
}

export default Home;

// 1. Develop a UI for a job search application. Layout according to the layout. The application should be adaptive. Header and SearchBar are fixed.

// 2. Develop a filter. Display vacancies that match the filter only after clicking the "Search" button.

// 3. All vacancies can be stored in the global state of the application (as you stored the PRODUCTS array in the state.ts module in LR7), for example, in the VACANCIES array.

// LB 14

// To manage the state of data (VACANCIES array), use Redux (you can use ReduxToolkit) - CRUD operations, filter (search), adding to favorites. That is, your task is to develop all the necessary reducers, actions, action generators.
// Favorite vacancies: according to the layout, only those vacancies that the user has added to favorites are displayed.

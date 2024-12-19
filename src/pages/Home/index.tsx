import "./Home.scss";
import { VACANCIES, Vacancy } from "../../state/state";
import VacancyCard from "../../components/VacancyCard";
import VacancyDetails from "../../components/VacancyDetails";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

function Home() {
  const [filteredVacancies, setFilteredVacancies] = useState(VACANCIES);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy>(VACANCIES[0]);

  function submitSearchFunction(filters: any) {
    const { city, schedule, jobType, experience, salary } = filters;
    console.log(filters);
    const newVacancies = VACANCIES.filter((vacancy) => {
      return (
        vacancy.location === city &&
        (salary === "" || vacancy.salary >= salary) &&
        (experience === "Нет опыта" ||
          (experience === "От 1 года до 3 лет" &&
            vacancy.experience >= 1 &&
            vacancy.experience <= 3) ||
          (experience === "От 3 до 6 лет" &&
            vacancy.experience >= 3 &&
            vacancy.experience <= 6) ||
          (experience === "Более 6 лет" && vacancy.experience >= 6)) &&
        vacancy.jobType === jobType &&
        vacancy.schedule === schedule
      );
    });
    setFilteredVacancies(newVacancies);
    console.log(newVacancies);
    setSelectedVacancy(newVacancies[0]);
  }
  return (
    <main className="home">
      <div className="container searchbar-wrapper">
        <SearchBar submitSearchFunction={submitSearchFunction} />
      </div>
      <div className=" container content">
        <div className="leftPanel">
          {filteredVacancies.map((vacancy) => (
            <div
              className="vacancyUse"
              onClick={() => setSelectedVacancy(vacancy)}
            >
              <VacancyCard
                vacancyData={vacancy}
                key={`vacancy-${vacancy.id}`}
                isSelected={selectedVacancy.id === vacancy.id ? true : false}
              />
            </div>
          ))}
        </div>
        <div className="rightPanel">
          <VacancyDetails vacancy={selectedVacancy} />
        </div>
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

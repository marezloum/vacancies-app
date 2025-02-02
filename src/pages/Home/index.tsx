import "./Home.scss";
import { Vacancy } from "../../state/state";
import VacancyCard from "../../components/VacancyCard";
import VacancyDetails from "../../components/VacancyDetails";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const allVacancies = useSelector(
    (state: any) => state.vacancies.allVacancies as Vacancy[]
  );
  console.log(allVacancies);
  const [filteredVacancies, setFilteredVacancies] = useState(allVacancies);
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(
    allVacancies[0]
  );

  function submitSearchFunction(filters: any) {
    const { city, schedule, jobType, experience, salary } = filters;
    const newVacancies = allVacancies.filter((vacancy) => {
      return (
        vacancy.location === city &&
        (salary === "" ||
          (vacancy.salary.to >= parseInt(salary) &&
            vacancy.salary.from <= parseInt(salary))) &&
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
    if (newVacancies.length > 0) {
      setSelectedVacancy(newVacancies[0]);
    } else {
      setSelectedVacancy(null);
    }
  }
  return (
    <main className="home">
      <div className="container searchbar-wrapper">
        <SearchBar submitSearchFunction={submitSearchFunction} />
      </div>
      <div className="container content">
        {filteredVacancies.length === 0 ? (
          <div className="notFound">No vacancies found</div>
        ) : (
          <>
            <div className="leftPanel">
              {filteredVacancies.map((vacancy) => (
                <div className="vacancyUse" key={`vacancy-${vacancy.id}`}>
                  <VacancyCard
                    vacancyData={vacancy}
                    isSelected={
                      selectedVacancy!.id === vacancy.id ? true : false
                    }
                    onClick={setSelectedVacancy}
                  />
                </div>
              ))}
            </div>
            <div className="rightPanel">
              {selectedVacancy ? (
                <VacancyDetails vacancy={selectedVacancy} />
              ) : null}
            </div>
          </>
        )}
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

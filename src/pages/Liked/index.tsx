import "./Liked.scss";
import { Vacancy } from "../../state/state";
import VacancyCard from "../../components/VacancyCard";
import VacancyDetails from "../../components/VacancyDetails";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Liked() {
  const allVacancies = useSelector(
    (state: any) => state.vacancies.allVacancies as Vacancy[]
  );

  const allLiked = useSelector(
    (state: any) => state.likes.allLiked
  ) as number[];
  const [filteredVacancies, setFilteredVacancies] = useState(
    allVacancies.filter((vacancy) => allLiked.includes(vacancy.id))
  );
  const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(
    allVacancies[0]
  );

  useEffect(() => {
    setFilteredVacancies(
      allVacancies.filter((vacancy) => allLiked.includes(vacancy.id))
    );
  }, [allLiked, allVacancies]);
  return (
    <main className="likePage">
      <div className="container content">
        {filteredVacancies.length === 0 ? (
          <div>No Liked vacancies found</div>
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

export default Liked;

// 1. Develop a UI for a job search application. Layout according to the layout. The application should be adaptive. Header and SearchBar are fixed.

// 2. Develop a filter. Display vacancies that match the filter only after clicking the "Search" button.

// 3. All vacancies can be stored in the global state of the application (as you stored the PRODUCTS array in the state.ts module in LR7), for example, in the VACANCIES array.

// LB 14

// To manage the state of data (VACANCIES array), use Redux (you can use ReduxToolkit) - CRUD operations, filter (search), adding to favorites. That is, your task is to develop all the necessary reducers, actions, action generators.
// Favorite vacancies: according to the layout, only those vacancies that the user has added to favorites are displayed.

import "./index.scss";
import cityIcon from "../../img/city.svg";
import scheduleIcon from "../../img/schedule.svg";
import jobTypeIcon from "../../img/jobType.svg";
import experienceIcon from "../../img/experience.svg";
import salaryIcon from "../../img/salary.svg";
import { FormEvent, useEffect, useState } from "react";
import RadioButtonGroup from "../shared/RadioButtonGroup";
import { useSelector } from "react-redux";
import { Vacancy } from "../../state/state";
// Each filter should open by mouse hover on that item
// Price should be an input with Rubl name right side of it, make  input background transparent
// For responsive, hover on filters(un ke be russi neveshte) has to open the filters
// For mobile version, the salary will be also added to the filters list below and it will have border around the input

// Just focus on making the UI work, like radio button groups and hover effects and styles
function SearchBar({ submitSearchFunction }: any) {
  const [city, setCity] = useState("Москва");
  const [schedule, setSchedule] = useState("Полный день");
  const [jobType, setJobType] = useState("Стажировка");
  const [experience, setexperience] = useState("Нет опыта");
  const [salary, setsalary] = useState("");

  const [currentOpenFilter, setCurrentOpenFilter] = useState("");
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    submitSearchFunction({
      city,
      schedule,
      jobType,
      experience,
      salary,
    });
    setCurrentOpenFilter("");
  }

  useEffect(() => {
    submitSearchFunction({
      city: "Москва",
      schedule: "Полный день",
      jobType: "Стажировка",
      experience: "Нет опыта",
      salary: "",
    });
  }, []);
  const allVacancies = useSelector(
    (state: any) => state.vacancies.allVacancies as Vacancy[]
  );
  useEffect(() => {
    submitSearchFunction({
      city,
      schedule,
      jobType,
      experience,
      salary,
    });
  }, [allVacancies]);
  return (
    <div className="searchBar">
      <form onSubmit={handleFormSubmit}>
        <div className="filters">
          <div className="location">
            <div className="imgloc">
              <img src={cityIcon} alt="city" />
            </div>
            <input
              type="string"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <div
            className="schedule"
            onClick={() => setCurrentOpenFilter("schedule")}
          >
            <div className="imgschedule">
              <img src={scheduleIcon} alt="schedule" />
            </div>
            <span>{schedule}</span>
            {currentOpenFilter === "schedule" ? (
              <RadioButtonGroup
                buttons={["Полный день", "Гибкий график", "Удаленная работа"]}
                name="schedule"
                onChange={setSchedule}
                initialValue="Полный день"
              />
            ) : null}
          </div>
          <div
            className="jobType"
            onClick={() => setCurrentOpenFilter("jobType")}
          >
            <div className="imgjobType">
              <img src={jobTypeIcon} alt="jobType" />
            </div>
            <span>{jobType}</span>
            {currentOpenFilter === "jobType" ? (
              <RadioButtonGroup
                buttons={[
                  "Полная занятость",
                  "Частичная занятость",
                  "Проектная работа",
                  "Стажировка",
                ]}
                name="jobType"
                onChange={setJobType}
                initialValue="Стажировка"
              />
            ) : null}
          </div>
          <div
            className="experience"
            onClick={() => setCurrentOpenFilter("experience")}
          >
            <div className="imgExperience">
              <img src={experienceIcon} alt="experience" />
            </div>
            <span>{experience}</span>
            {currentOpenFilter === "experience" ? (
              <RadioButtonGroup
                buttons={[
                  "Нет опыта",
                  "От 1 года до 3 лет",
                  "От 3 до 6 лет",
                  "Более 6 лет",
                ]}
                name="experience"
                onChange={setexperience}
                initialValue="Нет опыта"
              />
            ) : null}
          </div>
          <div className="salary">
            <div className="imgSalary">
              <img src={salaryIcon} alt="salary" />
            </div>
            <input
              type="string"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
            ></input>
            <span>руб</span>
          </div>
        </div>
        <button>Поиск</button>
      </form>
    </div>
  );
}

export default SearchBar;

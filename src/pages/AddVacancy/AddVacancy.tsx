import { FormEvent, useState } from "react";
import "./AddVacancy.scss";
import RadioButtonGroup from "../../components/shared/RadioButtonGroup";
import { useDispatch } from "react-redux";
import { addVacancy } from "../../store/reducers";
import { useNavigate } from "react-router-dom";

function AddVacancy() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Москва");
  const [schedule, setSchedule] = useState("Полный день");
  const [jobType, setJobType] = useState("Стажировка");
  const [experience, setexperience] = useState(0);
  const [tags, setTags] = useState("");
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setsalary] = useState({ from: 0, to: 0 });
  const [currentOpenFilter, setCurrentOpenFilter] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      addVacancy({
        title,
        location,
        schedule,
        jobType,
        experience,
        date,
        companyName,
        salary,
        tags: tags.split(","),
      })
    );
    navigate("/");
  }

  return (
    <div className="addVacancy">
      <form onSubmit={handleFormSubmit}>
        <div className="location" onClick={() => setCurrentOpenFilter("")}>
          title
          <input
            type="string"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className="location" onClick={() => setCurrentOpenFilter("")}>
          city
          <input
            type="string"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div className="location" onClick={() => setCurrentOpenFilter("")}>
          tags
          <input
            type="string"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          ></input>
        </div>
        <div className="location" onClick={() => setCurrentOpenFilter("")}>
          date
          <input
            type="string"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="location" onClick={() => setCurrentOpenFilter("")}>
          companyName
          <input
            type="string"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>
        </div>
        <div
          className="schedule"
          onClick={() => setCurrentOpenFilter("schedule")}
        >
          <span>{schedule}</span>
          {currentOpenFilter === "schedule" ? (
            <RadioButtonGroup
              buttons={["Полный день", "Гибкий график", "Удаленная работа"]}
              name="schedule"
              onChange={setSchedule}
              initialValue={schedule}
            />
          ) : null}
        </div>
        <div
          className="jobType"
          onClick={() => setCurrentOpenFilter("jobType")}
        >
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
              initialValue={jobType}
            />
          ) : null}
        </div>

        <div
          className="experience"
          onClick={() => setCurrentOpenFilter("experience")}
        >
          Experience
          <input
            type="number"
            value={experience}
            onChange={(e) => setexperience(parseInt(e.target.value))}
          ></input>
        </div>
        <div className="salary" onClick={() => setCurrentOpenFilter("")}>
          From
          <input
            type="number"
            value={salary.from}
            onChange={(e) =>
              setsalary({ to: salary.to, from: parseInt(e.target.value) })
            }
          ></input>
          <span>руб</span>
        </div>
        <div className="salary" onClick={() => setCurrentOpenFilter("")}>
          To
          <input
            type="number"
            value={salary.to}
            onChange={(e) =>
              setsalary({ from: salary.from, to: parseInt(e.target.value) })
            }
          ></input>
          <span>руб</span>
        </div>
        <button>add</button>
      </form>
    </div>
  );
}

export default AddVacancy;

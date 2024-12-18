import "./VacancyCard.scss";
import type { Vacancy } from "../../state/state";
import logo from "../../img/logo.svg";
import Tag from "../shared/Tag";
import Like from "../shared/Like";

// The card in left side list
//  first design the big version
// Then for responsive, imagine that the wrapper div will get class name "small", so when wrapper div also have small class, design smaller version of the card
// We will handle adding and removing that small class with react and javascript programatically
// The heart icon should be svg, so we can easily swap between red and gray one in react
function VacancyCard({ vacancyData }: { vacancyData: Vacancy }) {
  return (
    <div className="vacancyCard_wrapper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="info">
        <span>{vacancyData.companyName}</span>
        <h2>{vacancyData.title}</h2>
        <span>{vacancyData.location}</span>
        <div className="vacancy_tags">
          {vacancyData.tags.map((tag) => (
            <Tag name={tag} />
          ))}
        </div>
      </div>
      <div className="like">
        <Like liked={true} />
        <span>{vacancyData.date}</span>
      </div>
      {/* Vacancy: {vacancyData.id} - {vacancyData.title} */}
    </div>
  );
}

export default VacancyCard;

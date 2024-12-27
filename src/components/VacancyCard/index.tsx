import "./VacancyCard.scss";
import type { Vacancy } from "../../state/state";
import logo from "../../img/logo.svg";
import Tag from "../shared/Tag";
import Like from "../shared/Like";
import Trash from "../../img/icons8-trash.svg";
import Edit from "../../img/edit-button-svgrepo-com.svg";
import { addLike, deleteLike, deleteVacancy } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";

// The card in left side list
//  first design the big version
// Then for responsive, imagine that the wrapper div will get class name "small", so when wrapper div also have small class, design smaller version of the card
// We will handle adding and removing that small class with react and javascript programatically
// The heart icon should be svg, so we can easily swap between red and gray one in react
function VacancyCard({
  vacancyData,
  isSelected,
  onClick,
}: {
  vacancyData: Vacancy;
  isSelected: boolean;
  onClick?: (vacancy: Vacancy) => void;
}) {
  const dispatch = useDispatch();
  const allLiked = useSelector(
    (state: any) => state.likes.allLiked
  ) as number[];
  function handleDeleteVacancy(id: number) {
    dispatch(deleteVacancy({ id: id }));
  }

  function handleClickLike() {
    if (allLiked.includes(vacancyData.id)) {
      dispatch(deleteLike({ id: vacancyData.id }));
    } else {
      dispatch(addLike({ id: vacancyData.id }));
    }
  }

  return (
    <div className={`vacancyCard_wrapper ${isSelected ? "selected" : ""}`}>
      {isSelected ? <div className="ribbon"></div> : null}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="info" onClick={() => onClick?.(vacancyData)}>
        <span>{vacancyData.companyName}</span>
        <h2>{vacancyData.title}</h2>
        <span>{vacancyData.location}</span>
        <div className="vacancy_tags">
          {vacancyData.tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
        </div>
      </div>
      <div className="like">
        <div className="icons">
          <img className="editIcon" src={Edit} alt="" />
          <img
            className="trashIcon"
            onClick={() => handleDeleteVacancy(vacancyData.id)}
            src={Trash}
            alt=""
          />
          <Like
            liked={allLiked.includes(vacancyData.id)}
            handleClick={handleClickLike}
          />
        </div>

        <span>{vacancyData.date}</span>
      </div>

      {/* Vacancy: {vacancyData.id} - {vacancyData.title} */}
    </div>
  );
}

export default VacancyCard;

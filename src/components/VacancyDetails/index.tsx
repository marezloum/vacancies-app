import "./VacancyDetails.scss";
import { Vacancy } from "../../state/state";
import companyLogo from "../../img/company logo.svg";
// Just design the area
// Copy paste data from Canva, we use the vacancy data from props later
function VacancyDetails({ vacancy }: { vacancy: Vacancy }) {
  return (
    <div className="vacancyDetails">
      <div className="title">
        <div className="companyLogo">
          <img src={companyLogo} alt="companyLogo" />
        </div>
        <div className="jobTitle">
          <h3>Frontend developer (React)</h3>
          <div className="moreInfo">
            <span className="companyName">Winfinity</span>
            <span>|</span>
            <span className="location">Москва</span>
          </div>
        </div>
      </div>
      <div className="price">От 150 000 до 300 000 руб.</div>
      <div className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        ratione deserunt commodi veritatis ducimus! Animi dolor nemo sint.
        Eveniet reprehenderit nulla quibusdam incidunt voluptatum possimus vitae
        eligendi culpa quam corporis? Tempora minus, porro accusantium repellat
        non suscipit dolore harum molestias blanditiis odio impedit dignissimos
        inventore, doloremque magnam ad veniam dolorem tenetur unde, magni
        quisquam. Aspernatur repudiandae a in vitae consequuntur? Natus modi
        nostrum magnam repudiandae nulla consectetur blanditiis, dignissimos
        beatae nam itaque optio rem tempora assumenda dolorum veritatis.
        Excepturi similique minus ab cumque repellendus unde quos hic
        consequatur iusto maxime. Maiores quo quasi laboriosam, qui asperiores
        reprehenderit nesciunt ea sit dignissimos praesentium consequuntur sed
        fugit saepe eos impedit iure ratione nulla sunt! Recusandae architecto
        sed, voluptates quos blanditiis consequatur molestias! Ratione rem in
        cumque? Error, consectetur labore sequi maiores laudantium obcaecati eum
        perspiciatis vel accusamus eligendi amet reiciendis possimus ea! Sit non
        necessitatibus laborum voluptas a molestiae blanditiis saepe et. Maiores
        officia dignissimos commodi hic ad quidem iure sunt totam fuga ex,
        ducimus illum eligendi libero quasi quo tempore consequatur beatae
        provident possimus. Hic tempora earum cumque, harum alias eaque!
        Cupiditate eligendi velit illum, delectus libero facilis cum, animi
        consequatur beatae, iure iusto ad est praesentium dolor autem. Beatae
        alias quae blanditiis optio eum. Eveniet totam odio iure delectus
        minima. Ab dolor quod est aut fugiat tempora! Ea consequuntur facilis
        nobis quis corrupti debitis quod qui. Voluptate, quia corrupti odio
        quasi vel illum atque, autem temporibus totam impedit possimus officiis!
        Officia at voluptatem cupiditate ratione animi dolor earum tenetur rerum
        atque nam a, doloremque hic fugiat deserunt inventore deleniti labore
        aliquid. Quis qui fugit omnis iste saepe maiores expedita blanditiis?
        Error, fuga eligendi vel et magnam iure tempora commodi cum voluptatem
        unde laudantium voluptatibus id necessitatibus quis accusamus eveniet?
        Incidunt minima molestias molestiae quibusdam rerum assumenda laboriosam
        neque natus soluta.
      </div>
    </div>
  );
}

export default VacancyDetails;

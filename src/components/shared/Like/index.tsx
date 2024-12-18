import "./Like.scss";
import likedImg from "../../../img/liked.svg";
import unlikedImg from "../../../img/unliked.svg";

// boolean prop, if true, show red heart, otherwise gray heart svg
function Like({ liked }: { liked: boolean }) {
  return (
    <div>
      {liked ? (
        <img src={likedImg} alt="liked" />
      ) : (
        <img src={unlikedImg} alt="unliked" />
      )}
    </div>
  );
}

export default Like;

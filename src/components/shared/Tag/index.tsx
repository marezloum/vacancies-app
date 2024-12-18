import "./Tag.scss";
// takes one property in its props, which is the text of the tag
function Tag({ name }: { name: string }) {
  return (
    <div className="tag">
      <button>{name}</button>
    </div>
  );
}

export default Tag;

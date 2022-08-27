import { faker } from "@faker-js/faker";

function Comment(props) {
  return (
    <div className="comment">
      <a className="avatar" href="/#">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/#">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{faker.date.weekday().toString()}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
}

export default Comment;

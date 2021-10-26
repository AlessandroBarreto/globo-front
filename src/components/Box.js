import Card from "@mui/material/Card";
import "../styles/box.scss";

const Box = ({ text, tagName }) => {
  return (
    <Card classes={{ root: "card-container" }}>
      <h3>{text}</h3>
      <div className="tag-container">
        {tagName.map((name) => {
          return (
            <div className="tag-card">
              <span>{name.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Box;

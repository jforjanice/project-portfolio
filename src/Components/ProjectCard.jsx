/* eslint-disable react/prop-types */
import Photo from "./Photo";
import Button from "./Button";
import "/src/Components/projectCard.css";
import liveDemoIcon from "/src/assets/Btn-liveDemo.svg";
import githubIcon from "/src/assets/Btn-github-dark.svg";

export const Projectcard = ({
  name,
  photo,
  tags,
  liveLink,
  description,
  githubLink,
}) => {
  return (
    <div className="project-container">
      <Photo source={photo} color="blue" size="square" />
      <div className="project-content">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="tag-container">
          {tags.map((tag) => {
            return (
              <p key={tag} className="tag">
                {tag}
              </p>
            );
          })}
        </div>
        <div className="btn-container">
          <Button
            style="btn-live"
            icon={liveDemoIcon}
            name="Live demo"
            link={liveLink}
          />
          <Button
            style="btn-github"
            icon={githubIcon}
            name="View the code"
            link={githubLink}
          />
        </div>
      </div>
    </div>
  );
};

export default Projectcard;

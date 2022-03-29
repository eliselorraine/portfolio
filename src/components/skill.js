import { HiBadgeCheck } from "react-icons/hi";
import "../stylesheets/skills.scss";

const Skill = ({ name, type }) => {
  const str = `skill ${type}`;

  const colorChoice = (skillType) => {
    let color = '#455E89';
    switch (skillType) {
      case "tool":
        return color = "#B7094C";
      case "frontend":
        return color = "#A01A58";
      case "language":
        return color = "#892B64";
      case "backend":
        return color = "#723C70";
      case "framework":
        return color = "#5C4D7D";
      default:
        return color;
    }
  };

  return (
    <div className={str} style={{ backgroundColor: colorChoice(type)}}>
      <HiBadgeCheck className="skill-badge" />
      <p className="skill-name">{name}</p>
    </div>
  );
};

export default Skill;

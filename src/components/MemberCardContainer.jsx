import { MemberCard } from "./MemberCard";

// Fotos
import foto from "../assets/fotoBrandom.png";

// User Data
const name = "Username";
const description =
  "I am a software developer in training.";
const email = "email@hotmail.com";
const github = "https://github.com/";
const linkedin =
  "https://www.linkedin.com";

export function MemberCardContainer() {
  return (
    <div className="memberCardContainer">
      <MemberCard
        name={name}
        picture={foto}
        description={description}
        email={email}
        github={github}
        linkedin={linkedin}
      />
    </div>
  );
}

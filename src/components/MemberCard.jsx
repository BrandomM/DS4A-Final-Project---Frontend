import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

export function MemberCard({ name, picture, description, email, github, linkedin }) {
    if (!name) {
        name = "Member";
    }
  if (!picture) {
    picture =
      "#";
  }
  if (!description) {
    description =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sed? Repudiandae, reprehenderit perspiciatis.";
  }
  if (!email) {
    email = "ejemplo@ejemplo.com";
  }
  if (!github) {
    github = "#";
  }
  if (!linkedin) {
    linkedin = "#";
  }

  return (
    <div className="memberCard">
    <h3>{name}</h3>
      <img className="memberPicture" src={picture} alt="user" />
      <p>{description}</p>
      <p>{email}</p>
      <a href={github}>
        <img className="socialMedia" src={githubLogo} alt="GitHub" />
      </a>
      <a href={linkedin}>
        <img className="socialMedia" src={linkedinLogo} alt="Linkedin" />
      </a>
    </div>
  );
}

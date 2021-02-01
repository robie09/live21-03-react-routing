import { useParams, Redirect } from "react-router";
import { Button, ButtonsWrapper } from "./styles";

const InstructorProfile = ({ instructors, instructorSlug, goTo }) => {
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) goTo("/404");

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <div onClick={() => goTo("/")}>
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </div>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;

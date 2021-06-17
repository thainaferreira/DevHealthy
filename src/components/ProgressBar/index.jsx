import { Container, Progress } from "./style";

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
};

export default ProgressBar;

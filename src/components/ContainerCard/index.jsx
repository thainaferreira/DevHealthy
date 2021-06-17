import { Container } from "./style";

const ContainerCard = ({
  children,
  title,
  width,
  minHeigth = 300,
  maxHeigth = 0,
}) => {
  return (
    <Container width={width} minHeigth={minHeigth} maxHeigth={maxHeigth}>
      <h3>{title}</h3>
      {children}
    </Container>
  );
};
export default ContainerCard;

import { Container, ContainerContent } from "./style";

const ContainerDashboard = ({ children }) => {
  return (
    <Container>
      <ContainerContent>{children}</ContainerContent>
    </Container>
  );
};

export default ContainerDashboard;

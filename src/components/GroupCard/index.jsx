import { ContainerCard } from "./style.js";
import IconsGroups from '../../components/IconsGroups'

const GroupCard = ({ name, handleClick, category }) => {
  return (
    <>
      <ContainerCard onClick={handleClick}>
        <figure>
          <IconsGroups category={category} />
        </figure>
        <p>{name}</p>
      </ContainerCard>
    </>
  );
};

export default GroupCard;

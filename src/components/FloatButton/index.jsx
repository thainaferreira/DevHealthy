import { FabStyled, LightTooltip } from "./style";
import Zoom from "@material-ui/core/Zoom";

const FloatButton = ({
  icon: Icon,
  title,
  greenIcon = false,
  placement = "top",
  ...rest
}) => {
  return (
    <LightTooltip
      title={title}
      placement={placement}
      arrow
      TransitionComponent={Zoom}
    >
      <FabStyled
        aria-label={title}
        color="secondary"
        size="small"
        greenIcon={greenIcon}
        {...rest}
      >
        {<Icon />}
      </FabStyled>
    </LightTooltip>
  );
};

export default FloatButton;

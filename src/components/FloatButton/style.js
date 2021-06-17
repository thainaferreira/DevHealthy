import styled from "styled-components";
import { Fab, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 11,
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(Tooltip);

export const FabStyled = styled(Fab)`
  color: ${(props) => (props.greenIcon ? "#8ECC8E" : "#AC2087")};
`;

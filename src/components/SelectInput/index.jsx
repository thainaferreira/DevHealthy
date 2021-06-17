import { useFormContext, Controller } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./style";

const SelectInput = ({ name, label, title, options, icon: Icon, ...rest }) => {
  const { control } = useFormContext();
  const classes = useStyles();

  return (
    <Controller
      render={({ field }) => (
        <FormControl>
          <InputLabel htmlFor={name} >{title}</InputLabel>
          <Select id={name} {...rest} {...field} className={classes.container}>
            <MenuItem value="" disabled>
              <em>{title}</em>
            </MenuItem>
            {options.map((item) => (
              <MenuItem key={item.id} value={item.id} className={classes.item}>
                {item.label}{" "}
                {Icon && (
                  <div>
                    {item.qtd.map((icon, index) => (
                      <Icon key={index} />
                    ))}
                  </div>
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      control={control}
      name={name}
      label={label}
      defaultValue=""
    />
  );
};

export default SelectInput;

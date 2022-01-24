import React, { useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
type Props = TextFieldProps & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Input = ({ leftIcon, rightIcon, ...props }: Props) => {
  return (
    <TextField
      {...{
        ...props,
        ...((leftIcon || rightIcon) && {
          InputProps: {
            startAdornment: leftIcon && (
              <InputAdornment position="start">{leftIcon}</InputAdornment>
            ),
            endAdornment: rightIcon && (
              <InputAdornment position="end">{rightIcon}</InputAdornment>
            ),
          },
        }),
      }}
    />
  );
};

export const PasswordInput = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <TextField
      {...props}
      InputProps={{
        type: showPassword ? "text" : "password",
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

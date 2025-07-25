import React, { useEffect, useState } from "react";
import StyledButton from "./styles";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HomeIcon,
  ShoppingCartIcon,
  ThumbsUpIcon,
} from "./icons";
import "./button.css";

const icons = {
  local_grocery_store: <ShoppingCartIcon />,
  home: <HomeIcon />,
  arrow_left: <ArrowLeftIcon />,
  arrow_right: <ArrowRightIcon />,
  thumbs_up: <ThumbsUpIcon />,
};

const Button = ({
  variant,
  disableShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  title,
  onClick,
  ...rest
}) => {
  const [startIcon_, setStartIcon] = useState(null);
  const [endIcon_, setEndIcon] = useState(null);

  useEffect(() => {
    if (startIcon) {
      if (typeof startIcon === "string") {
        if (Object.keys(icons).includes(startIcon)) {
          setStartIcon(icons[startIcon]);
        }
      } else if (React.isValidElement(startIcon)) {
        setStartIcon(startIcon);
      }
    }
    if (endIcon) {
      if (typeof endIcon === "string") {
        if (Object.keys(icons).includes(endIcon)) {
          setEndIcon(icons[endIcon]);
        }
      } else if (React.isValidElement(endIcon)) {
        setEndIcon(endIcon);
      }
    }
  }, [startIcon, endIcon]);

  return (
    <StyledButton
      $variant={variant}
      $disableShadow={disableShadow}
      $size={size}
      $color={color}
      disabled={disabled}
      onClick={onClick}
      title={title}
      {...rest}
    >
      {startIcon_}
      {rest.children}
      {endIcon_}
    </StyledButton>
  );
};

export default Button;

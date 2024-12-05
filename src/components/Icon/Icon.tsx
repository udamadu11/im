import { MouseEventHandler } from "react";

interface IconProps {
  icon: string;
  size?: number;
  alt?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  backgroundColor?: string;
}

export default function Icon({
  icon,
  size = 20,
  onClick,
  alt,
  backgroundColor,
}: IconProps) {
  return (
    <img
      role={onClick ? "button" : undefined}
      style={{
        height: size,
        width: size,
        backgroundColor,
      }}
      src={icon}
      width={size}
      height={size}
      alt={alt}
      onClick={onClick}
    />
  );
}

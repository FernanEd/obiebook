interface Props {
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "disabled"
    | "light"
    | "dark";
  size?: "sm" | "md" | "lg";
  isGhost?: boolean;
  extendStyle?: string;
  [x: string]: any;
}

const Button: React.FunctionComponent<Props> = ({
  children,
  style,
  size,
  isGhost,
  icon,
  extendStyle,
  ...props
}) => {
  const buttonColor = (() => {
    if (isGhost) {
      switch (style) {
        case "primary":
          return "text-primary-300";
        case "secondary":
          return "text-secondary-300";
        case "success":
          return "text-success-300";
        case "warning":
          return "text-warning-300";
        case "danger":
          return "text-danger-300";
        case "disabled":
          return "text-neutral-200";
        case "light":
          return "text-white";
        case "dark":
        default:
          return "text-neutral-600";
      }
    }

    switch (style) {
      case "primary":
      default:
        return "bg-primary-300 text-white";
      case "secondary":
        return "bg-secondary-300 text-white";
      case "success":
        return "bg-success-300 text-white";
      case "warning":
        return "bg-warning-300 text-black";
      case "danger":
        return "bg-danger-300 text-white";
      case "disabled":
        return "bg-neutral-400 text-neutral-200";
      case "light":
        return "bg-neutral-200 text-neutral-600";
      case "dark":
        return "bg-neutral-600 text-white";
    }
  })();

  const buttonSize = (() => {
    switch (size) {
      case "sm":
        return "gap-0 text-sm p-1";
      case "lg":
        return "gap-1 text-lg p-3";
      case "md":
      default:
        return "gap-1  p-2";
    }
  })();

  return (
    <button
      className={`
    ${buttonColor}
    ${buttonSize}
    ${isGhost ? "" : "rounded shadow"}
    inline-flex justify-center items-center 
    filter hover:brightness-75
    ${extendStyle}
  `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { iconMap } from "./IconMap";
import type { IconName } from "./IconMap";
import type { IconType } from "react-icons";

type Props = {
  name: IconName,
  size?: string,
  color?: string,
  className?: string,
}

const Icon = ({
  name,
  size,
  color,
  className
}: Props) => {
  const IconComponent: IconType = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent className={className}
                   size={size}
                   color={color}
                   aria-hidden={true} />
  )
}

Icon.defaultProps = {
  name: 'check',
  className: '',
}

export default Icon;

// components/ui/IconBadge.js
// Cuadro redondeado con un icono Material, usado como acento visual.
import { Container, Icon } from 'flet-box';
import { brand } from '../../database/themes.js';

export const IconBadge = ({
  icon,
  size = 56,
  iconSize = 28,
  bgColor = brand.navySoft,
  color = brand.navy,
  borderRadius = 16,
  shadow = 'none',
  border = null,
}) =>
  Container({
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    flexShrink: 0,
    borderRadius,
    bgColor,
    border,
    shadow,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    child: Icon({ name: icon, size: iconSize, color }),
  });

export default IconBadge;

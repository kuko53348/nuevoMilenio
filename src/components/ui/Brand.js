// components/ui/Brand.js
// Marca de la empresa y avatar de una persona. Ambos aceptan foto o respaldo:
// si la imagen no está en la base de datos se muestra el monograma / iniciales.
import { Container, Image, Text } from 'flet-box';
import { brand } from '../../database/themes.js';

export const BrandMark = ({ src, monogram, size = 40, radius = 999 }) =>
  src
    ? Image({
        src,
        alt: monogram,
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        flexShrink: 0,
        circular: true,
        fit: 'cover',
      })
    : Container({
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        flexShrink: 0,
        borderRadius: radius,
        bgColor: brand.gold,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        child: Text({
          text: monogram,
          size: Math.round(size * 0.4),
          weight: '800',
          color: brand.navy,
        }),
      });

export const PersonAvatar = ({
  src,
  initials,
  name,
  size = 52,
  bgColor = brand.gold,
  color = brand.navy,
  border = null,
  shadow = 'none',
}) =>
  src
    ? Image({
        src,
        alt: name || initials,
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        flexShrink: 0,
        circular: true,
        fit: 'cover',
        border,
        shadow,
      })
    : Container({
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        flexShrink: 0,
        borderRadius: 999,
        bgColor,
        border,
        shadow,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        child: Text({
          text: initials,
          size: Math.round(size * 0.36),
          weight: '800',
          color,
        }),
      });

export default { BrandMark, PersonAvatar };

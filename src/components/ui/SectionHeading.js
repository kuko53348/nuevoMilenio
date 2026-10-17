// components/ui/SectionHeading.js
// Encabezado reutilizable: bajada corta (eyebrow), título y subtítulo.
import { Column, Text, Container } from 'flet-box';
import { brand } from '../../database/themes.js';
import { fluid } from './responsive.js';

export const SectionHeading = ({
  eyebrow = null,
  title = '',
  subtitle = null,
  align = 'center',
  light = false,
  maxWidth = 760,
  titleSize = null,
  gap = 12,
}) =>
  Column({
    alignItems: align,
    gap,
    maxWidth,
    width: '100%',
    overflow: 'visible',
    children: [
      eyebrow
        ? Container({
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: 999,
            bgColor: light ? 'rgba(201, 162, 39, 0.18)' : brand.goldSoft,
            overflow: 'visible',
            child: Text({
              text: String(eyebrow).toUpperCase(),
              size: 12,
              weight: '700',
              color: light ? brand.goldLight : brand.goldDark,
              letterSpacing: 1.2,
              align: 'center',
            }),
          })
        : null,
      Text({
        text: title,
        type: 'h2',
        size: titleSize || fluid(26, 34),
        weight: '700',
        color: light ? brand.white : brand.navy,
        align,
        lineHeight: 1.25,
        marginBottom: 0,
      }),
      subtitle
        ? Text({
            text: subtitle,
            size: fluid(15, 17),
            color: light ? 'rgba(255,255,255,0.82)' : brand.inkSoft,
            align,
            lineHeight: 1.6,
          })
        : null,
    ].filter(Boolean),
  });

export default SectionHeading;

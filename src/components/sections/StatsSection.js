// components/sections/StatsSection.js
// Franja de cifras: refuerza la experiencia y el respaldo de la empresa.
import { Container, Row, Column, Text, Icon } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY } from '../../database/company.js';
import { fluid } from '../ui/responsive.js';

const StatCard = ({ value, label, detail, icon }) =>
  Column({
    gap: 8,
    flex: '1 1 220px',
    minWidth: 220,
    alignItems: 'flex-start',
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 16,
    bgColor: brand.white,
    border: `1px solid ${brand.border}`,
    shadow: `0 6px 18px ${brand.shadow}`,
    overflow: 'visible',
    children: [
      Row({
        width: 'auto',
        gap: 10,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Icon({ name: icon, size: 20, color: brand.goldDark }),
          Text({ text: label.toUpperCase(), size: 11, weight: '700', color: brand.inkSoft, letterSpacing: 0.8 }),
        ],
      }),
      Text({
        text: value,
        size: fluid(30, 38),
        weight: '800',
        color: brand.navy,
        lineHeight: 1.1,
      }),
      Text({ text: detail, size: 12.5, color: brand.inkSoft, lineHeight: 1.5 }),
    ],
  });

export const StatsSection = () =>
  Container({
    width: '100%',
    flexShrink: 0,
    bgColor: brand.navySoft,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: 36,
    paddingHorizontal: 20,
    child: Column({
      width: '100%',
      maxWidth: 1120,
      gap: 18,
      overflow: 'visible',
      children: [
        Row({
          width: '100%',
          gap: 18,
          flexWrap: 'wrap',
          alignItems: 'stretch',
          overflow: 'visible',
          children: COMPANY.stats.map((stat) => StatCard(stat)),
        }),
      ],
    }),
  });

export default StatsSection;

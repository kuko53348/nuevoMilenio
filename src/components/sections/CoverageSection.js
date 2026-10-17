// components/sections/CoverageSection.js
// Cómo trabajamos contigo: atención, cobertura y forma de entrega.
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, LINKS } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { IconBadge } from '../ui/IconBadge.js';

const Item = ({ icon, title, text }) =>
  Container({
    flex: '1 1 300px',
    minWidth: 280,
    gap: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    bgColor: brand.white,
    border: `1px solid ${brand.border}`,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      IconBadge({ icon, size: 44, iconSize: 22, borderRadius: 12, bgColor: brand.navySoft, color: brand.navy }),
      Text({ text: title, size: 15.5, weight: '700', color: brand.navy }),
      Text({ text, size: 13.5, color: brand.inkSoft, lineHeight: 1.65 }),
    ],
  });

export const CoverageSection = () =>
  Section({
    id: 'forma-de-trabajo',
    bgColor: brand.cream,
    gap: 36,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: COMPANY.workingWithUs.eyebrow,
        title: COMPANY.workingWithUs.title,
        subtitle: COMPANY.workingWithUs.subtitle,
      }),
      Row({
        width: '100%',
        gap: 18,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        overflow: 'visible',
        children: COMPANY.workingWithUs.items.map((item) => Item(item)),
      }),
      Container({
        width: '100%',
        gap: 14,
        paddingVertical: 22,
        paddingHorizontal: 26,
        borderRadius: 16,
        bgColor: brand.navy,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Row({
            width: 'auto',
            gap: 10,
            alignItems: 'center',
            overflow: 'visible',
            children: [
              Icon({ name: 'help', size: 20, color: brand.goldLight }),
              Text({
                text: '¿Tienes un caso especial?',
                size: 16.5,
                weight: '700',
                color: brand.white,
              }),
            ],
          }),
          Text({
            text: COMPANY.workingWithUs.note,
            size: 14,
            color: 'rgba(255,255,255,0.82)',
            align: 'center',
            lineHeight: 1.7,
            maxWidth: 720,
          }),
          Button({
            text: 'Contarme mi caso',
            iconLeft: 'chat',
            bgColor: brand.gold,
            color: brand.navy,
            borderRadius: 12,
            padding: [12, 22],
            onPress: () => window.open(LINKS.whatsapp, '_blank'),
          }),
        ],
      }),
    ],
  });

export default CoverageSection;

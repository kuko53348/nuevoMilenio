// components/sections/WhyUsSection.js
// Diferenciales de la empresa: por qué elegir a Nuevo Milenio.
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, LINKS, YEARS_EXPERIENCE } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { IconBadge } from '../ui/IconBadge.js';

const Item = (item) =>
  Row({
    width: '100%',
    gap: 14,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      IconBadge({
        icon: item.icon,
        size: 44,
        iconSize: 22,
        borderRadius: 12,
        bgColor: brand.goldSoft,
        color: brand.goldDark,
      }),
      Column({
        width: 'auto',
        gap: 4,
        flex: 1,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: item.title, size: 16, weight: '700', color: brand.navy }),
          Text({ text: item.text, size: 13.5, color: brand.inkSoft, lineHeight: 1.6 }),
        ],
      }),
    ],
  });

export const WhyUsSection = () =>
  Section({
    id: 'por-que',
    bgColor: brand.cream,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Por qué elegirnos',
        title: 'Trato directo, experiencia real y todo el trámite resuelto',
        subtitle:
          'La diferencia no está en la propiedad, está en quién te acompaña. Estas son las razones por las que nuestros clientes nos recomiendan.',
      }),
      Row({
        width: '100%',
        gap: 32,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: 'visible',
        children: [
          Column({
            gap: 22,
            flex: '1 1 360px',
            overflow: 'visible',
            children: COMPANY.differentiators.map((item) => Item(item)),
          }),
          Container({
            flex: '1 1 320px',
            gap: 18,
            paddingVertical: 32,
            paddingHorizontal: 28,
            borderRadius: 20,
            gradient: `linear-gradient(135deg, ${brand.navy} 0%, ${brand.navyDark} 100%)`,
            alignItems: 'flex-start',
            overflow: 'visible',
            shadow: `0 18px 40px ${brand.shadowStrong}`,
            children: [
              Text({
                text: `${YEARS_EXPERIENCE}+`,
                size: 56,
                weight: '800',
                color: brand.goldLight,
                lineHeight: 1,
              }),
              Text({
                text: 'años de experiencia respaldando cada operación',
                size: 17,
                weight: '700',
                color: brand.white,
                lineHeight: 1.4,
              }),
              Text({
                text: 'Detrás de cada operación hay miles de documentos gestionados y cientos de familias que hoy duermen tranquilas porque sus papeles estaban en orden.',
                size: 13.5,
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.65,
              }),
              Button({
                text: 'Hablemos de tu caso',
                iconLeft: 'arrow_forward',
                bgColor: brand.gold,
                color: brand.navy,
                fullWidth: true,
                borderRadius: 12,
                padding: [13, 18],
                onPress: () => window.open(LINKS.whatsapp, '_blank'),
              }),
            ],
          }),
        ],
      }),
    ],
  });

export default WhyUsSection;

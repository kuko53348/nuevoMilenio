// components/sections/FaqSection.js
// Preguntas frecuentes con acordeón.
import { Container, Column, Row, Text, Icon, Button, Accordion } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, LINKS } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';

export const FaqSection = ({ title = 'Preguntas frecuentes', subtitle = null }) =>
  Section({
    id: 'faq',
    bgColor: brand.cream,
    gap: 32,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Resolvemos tus dudas',
        title,
        subtitle:
          subtitle ||
          'Lo que más nos preguntan antes de empezar. Si tu caso no está aquí, escríbenos y te respondemos sin compromiso.',
      }),
      Column({
        width: '100%',
        gap: 12,
        maxWidth: 860,
        overflow: 'visible',
        children: COMPANY.faq.map((item) =>
          Accordion({
            title: item.q,
            variant: 'outlined',
            borderRadius: 14,
            titleColor: brand.navy,
            titleSize: 15,
            titleWeight: '600',
            iconColor: brand.goldDark,
            borderColor: brand.border,
            children: [
              Container({
                paddingVertical: 4,
                overflow: 'visible',
                child: Text({ text: item.a, size: 14, color: brand.inkSoft, lineHeight: 1.7 }),
              }),
            ],
          }),
        ),
      }),
      Container({
        width: '100%',
        gap: 16,
        paddingVertical: 24,
        paddingHorizontal: 24,
        borderRadius: 16,
        bgColor: brand.navy,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Text({
            text: '¿Tu duda no está en la lista?',
            size: 17,
            weight: '700',
            color: brand.white,
            align: 'center',
          }),
          Text({
            text: 'Escríbenos y te respondemos el mismo día hábil. La primera consulta no tiene costo.',
            size: 13.5,
            color: 'rgba(255,255,255,0.8)',
            align: 'center',
            lineHeight: 1.6,
            maxWidth: 520,
          }),
          Button({
            text: 'Hacer mi pregunta',
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

export default FaqSection;

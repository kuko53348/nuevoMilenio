// components/sections/ProcessSection.js
// Cómo trabajamos: 4 pasos simples, del primer mensaje a la firma.
import { Container, Column, Row, Text, Icon } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { isMobile } from '../ui/responsive.js';

const StepCard = (step) =>
  Column({
    gap: 12,
    flex: '1 1 240px',
    minWidth: 240,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      Row({
        width: 'auto',
        gap: 12,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Container({
            width: 46,
            height: 46,
            minWidth: 46,
            borderRadius: 23,
            bgColor: brand.navy,
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            child: Text({ text: step.step, size: 15, weight: '800', color: brand.goldLight }),
          }),
          Icon({ name: step.icon, size: 22, color: brand.goldDark }),
        ],
      }),
      Text({
        text: step.title,
        type: 'h3',
        size: 18,
        weight: '700',
        color: brand.navy,
        marginBottom: 0,
      }),
      Text({ text: step.text, size: 14, color: brand.inkSoft, lineHeight: 1.65 }),
    ],
  });

export const ProcessSection = () =>
  Section({
    bgColor: brand.white,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Cómo trabajamos',
        title: 'Cuatro pasos, cero dolores de cabeza',
        subtitle:
          'Un método probado durante más de dos décadas: mantenerte informado y no dejarte nunca solo frente a un documento.',
      }),
      Row({
        width: '100%',
        gap: 28,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: 'visible',
        children: COMPANY.process.map((step, index) => [
          StepCard(step),
          !isMobile() && index < COMPANY.process.length - 1
            ? Column({
                flex: '0 0 24px',
                alignItems: 'center',
                paddingTop: 12,
                overflow: 'visible',
                children: [Icon({ name: 'arrow_forward', size: 20, color: brand.border })],
              })
            : null,
        ]).flat().filter(Boolean),
      }),
    ],
  });

export default ProcessSection;

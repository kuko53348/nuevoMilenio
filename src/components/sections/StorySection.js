// components/sections/StorySection.js
// "Quiénes somos": historia, misión, visión y valores (página Info).
import { Container, Column, Row, Text, Icon } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { IconBadge } from '../ui/IconBadge.js';

const PrincipleCard = ({ icon, title, text, bg, color }) =>
  Container({
    flex: '1 1 240px',
    minWidth: 240,
    gap: 12,
    paddingVertical: 22,
    paddingHorizontal: 20,
    borderRadius: 16,
    bgColor: bg,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      IconBadge({ icon, size: 44, iconSize: 22, borderRadius: 12, bgColor: color === brand.goldDark ? brand.goldSoft : brand.white, color }),
      Text({ text: title, size: 15.5, weight: '700', color: brand.navy }),
      Text({ text, size: 13.5, color: brand.inkSoft, lineHeight: 1.65 }),
    ],
  });

const ValueItem = ({ icon, title, text }) =>
  Row({
    width: '100%',
    gap: 14,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      IconBadge({
        icon,
        size: 42,
        iconSize: 21,
        borderRadius: 12,
        bgColor: brand.navySoft,
        color: brand.navy,
      }),
      Column({
        width: 'auto',
        gap: 3,
        flex: 1,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: title, size: 15, weight: '700', color: brand.navy }),
          Text({ text, size: 13, color: brand.inkSoft, lineHeight: 1.6 }),
        ],
      }),
    ],
  });

export const StorySection = () =>
  Section({
    id: 'empresa',
    bgColor: brand.white,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Quiénes somos',
        title: 'Una empresa chilena hecha de oficio',
        subtitle: COMPANY.about.intro,
      }),
      Container({
        width: '100%',
        gap: 18,
        paddingVertical: 26,
        paddingHorizontal: 26,
        borderRadius: 18,
        bgColor: brand.cream,
        border: `1px solid ${brand.border}`,
        overflow: 'visible',
        children: [
          Row({
            width: 'auto',
            gap: 10,
            alignItems: 'center',
            overflow: 'visible',
            children: [
              Icon({ name: 'history_edu', size: 20, color: brand.goldDark }),
              Text({ text: 'Nuestra historia', size: 17, weight: '700', color: brand.navy }),
            ],
          }),
          Text({ text: COMPANY.about.story, size: 14.5, color: brand.inkSoft, lineHeight: 1.8 }),
        ],
      }),
      Row({
        width: '100%',
        gap: 20,
        flexWrap: 'wrap',
        overflow: 'visible',
        children: [
          PrincipleCard({
            icon: 'flag',
            title: 'Misión',
            text: COMPANY.about.mission,
            bg: brand.navySoft,
            color: brand.navy,
          }),
          PrincipleCard({
            icon: 'visibility',
            title: 'Visión',
            text: COMPANY.about.vision,
            bg: brand.goldSoft,
            color: brand.goldDark,
          }),
        ],
      }),
      Column({
        width: '100%',
        gap: 20,
        overflow: 'visible',
        children: [
          Text({
            text: 'Nuestros valores',
            type: 'h3',
            size: 20,
            weight: '700',
            color: brand.navy,
            marginBottom: 0,
          }),
          Row({
            width: '100%',
            gap: 24,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            overflow: 'visible',
            children: COMPANY.about.values.map((value) => ValueItem(value)),
          }),
        ],
      }),
    ],
  });

export default StorySection;

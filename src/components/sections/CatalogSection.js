// components/sections/CatalogSection.js
// Catálogo de propiedades: el álbum vive en Facebook/Instagram y este módulo
// invita a verlo y a escribir. Es una página estática, no una plataforma.
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand, gradients } from '../../database/themes.js';
import { COMPANY, LINKS, SOCIAL } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';

const CategoryChip = ({ label }) =>
  Row({
    width: 'auto',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 999,
    bgColor: 'rgba(255,255,255,0.10)',
    border: '1px solid rgba(255,255,255,0.18)',
    overflow: 'visible',
    children: [
      Icon({ name: 'location_on', size: 15, color: brand.goldLight }),
      Text({ text: label, size: 13, weight: '600', color: brand.white }),
    ],
  });

const NumberedStep = ({ index, text }) =>
  Row({
    width: '100%',
    gap: 12,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      Container({
        width: 28,
        height: 28,
        minWidth: 28,
        borderRadius: 14,
        bgColor: brand.gold,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        child: Text({ text: String(index), size: 12.5, weight: '800', color: brand.navy }),
      }),
      Text({ text, size: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.55, flex: 1 }),
    ],
  });

export const CatalogSection = () =>
  Section({
    id: 'catalogo',
    bgColor: brand.navy,
    gradient: gradients.hero,
    gap: 36,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: COMPANY.catalog.eyebrow,
        title: COMPANY.catalog.title,
        subtitle: COMPANY.catalog.description,
        light: true,
        maxWidth: 780,
      }),
      Row({
        width: '100%',
        gap: 28,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        overflow: 'visible',
        children: [
          Column({
            gap: 18,
            flex: '1 1 340px',
            alignItems: 'flex-start',
            paddingVertical: 24,
            paddingHorizontal: 24,
            borderRadius: 18,
            bgColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            overflow: 'visible',
            children: [
              Text({
                text: '¿Cómo ver el catálogo?',
                type: 'h3',
                size: 18,
                weight: '700',
                color: brand.goldLight,
                marginBottom: 0,
              }),
              ...COMPANY.catalog.steps.map((step, index) => NumberedStep({ index: index + 1, text: step })),
              Text({
                text: COMPANY.catalog.note,
                size: 13,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.6,
              }),
            ],
          }),
          Column({
            gap: 18,
            flex: '1 1 340px',
            alignItems: 'center',
            paddingVertical: 28,
            paddingHorizontal: 24,
            borderRadius: 18,
            bgColor: brand.white,
            shadow: `0 18px 40px ${brand.shadowStrong}`,
            overflow: 'visible',
            children: [
              Icon({ name: 'photo_camera', size: 34, color: brand.goldDark }),
              Text({
                text: 'Fotos, precios y documentos al día',
                type: 'h3',
                size: 18,
                weight: '700',
                color: brand.navy,
                align: 'center',
                marginBottom: 0,
                lineHeight: 1.35,
              }),
              Text({
                text: 'Publicamos con fotos reales, precio, comuna, metros útiles y estado de los documentos. Si algo te interesa, con una sola respuesta reservamos la visita.',
                size: 14,
                color: brand.inkSoft,
                align: 'center',
                lineHeight: 1.65,
              }),
              Row({
                width: '100%',
                gap: 10,
                flexWrap: 'wrap',
                justifyContent: 'center',
                overflow: 'visible',
                children: COMPANY.catalog.categories.map((category) => CategoryChip({ label: category })),
              }),
              Button({
                text: COMPANY.catalog.facebookCta,
                iconLeft: 'thumb_up',
                bgColor: brand.navy,
                color: brand.white,
                fullWidth: true,
                borderRadius: 12,
                padding: [14, 18],
                onPress: () => window.open(LINKS.facebook, '_blank'),
              }),
              Button({
                text: COMPANY.catalog.instagramCta,
                iconLeft: 'photo_camera',
                variant: 'outlined',
                color: brand.navy,
                fullWidth: true,
                borderRadius: 12,
                padding: [13, 18],
                onPress: () => window.open(LINKS.instagram, '_blank'),
              }),
              Button({
                text: 'Escríbenos y te envío lo disponible hoy',
                iconLeft: 'chat',
                bgColor: brand.whatsapp,
                color: brand.white,
                fullWidth: true,
                borderRadius: 12,
                padding: [14, 18],
                onPress: () => window.open(LINKS.whatsapp, '_blank'),
              }),
              Text({
                text: `${SOCIAL.facebookHandle} · ${SOCIAL.instagramHandle}`,
                size: 12,
                color: brand.inkSoft,
              }),
            ],
          }),
        ],
      }),
    ],
  });

export default CatalogSection;

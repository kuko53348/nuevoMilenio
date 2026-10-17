// components/sections/ServicesSection.js
// Servicios: ventas, rentas, trámites, crédito, avalúos y administración.
import { Container, Column, Row, Text, Icon, Button, Card, goTo } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, LINKS } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { IconBadge } from '../ui/IconBadge.js';

const ServiceCard = (service, compact = false) =>
  Card({
    bgColor: brand.white,
    padding: 0,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: brand.border,
    shadow: `0 8px 24px ${brand.shadow}`,
    flex: compact ? '1 1 300px' : '1 1 340px',
    overflow: 'hidden',
    child: Column({
      gap: 0,
      overflow: 'visible',
      children: [
        Container({
          width: '100%',
          height: 4,
          bgColor: service.badge ? brand.gold : brand.navy,
          overflow: 'visible',
        }),
        Column({
          gap: 14,
          paddingVertical: 22,
          paddingHorizontal: 20,
          alignItems: 'flex-start',
          overflow: 'visible',
          children: [
            Row({
              width: '100%',
              gap: 12,
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'visible',
              children: [
                IconBadge({ icon: service.icon, size: 48, iconSize: 24, borderRadius: 14 }),
                service.badge
                  ? Container({
                      paddingVertical: 4,
                      paddingHorizontal: 10,
                      borderRadius: 999,
                      bgColor: brand.goldSoft,
                      overflow: 'visible',
                      child: Text({
                        text: service.badge,
                        size: 10.5,
                        weight: '700',
                        color: brand.goldDark,
                      }),
                    })
                  : null,
              ].filter(Boolean),
            }),
            Text({
              text: service.title,
              type: 'h3',
              size: 18,
              weight: '700',
              color: brand.navy,
              marginBottom: 0,
              lineHeight: 1.3,
            }),
            Text({ text: service.short, size: 14, color: brand.inkSoft, lineHeight: 1.65 }),
            Column({
              gap: 8,
              overflow: 'visible',
              children: service.bullets.map((bullet) =>
                Row({
                  width: '100%',
                  gap: 8,
                  alignItems: 'flex-start',
                  overflow: 'visible',
                  children: [
                    Icon({ name: 'check_circle', size: 16, color: brand.goldDark }),
                    Text({ text: bullet, size: 13, color: brand.ink, lineHeight: 1.5, flex: 1 }),
                  ],
                }),
              ),
            }),
          ],
        }),
      ],
    }),
  });

export const ServicesSection = ({ maxItems = null, compact = false, withCta = true }) => {
  const services = maxItems ? COMPANY.services.slice(0, maxItems) : COMPANY.services;

  return Section({
    id: 'servicios',
    bgColor: brand.cream,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Qué hacemos',
        title: 'Todo lo que una operación inmobiliaria necesita',
        subtitle:
          'Nos hacemos cargo del proceso completo. Tú decides, nosotros gestionamos: desde la primera visita hasta la carpeta con todos los documentos en tu mano.',
      }),
      Row({
        width: '100%',
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        overflow: 'visible',
        children: services.map((service) => ServiceCard(service, compact)),
      }),
      withCta
        ? Row({
            width: '100%',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'visible',
            children: [
              Button({
                text: 'Quiero asesoría para mi propiedad',
                iconLeft: 'chat',
                bgColor: brand.whatsapp,
                color: brand.white,
                size: 'large',
                borderRadius: 14,
                padding: [14, 24],
                onPress: () => window.open(LINKS.whatsapp, '_blank'),
              }),
              Button({
                text: 'Ver detalle de servicios',
                iconRight: 'arrow_forward',
                variant: 'outlined',
                color: brand.navy,
                size: 'large',
                borderRadius: 14,
                padding: [14, 24],
                onPress: () => goTo('/info'),
              }),
            ],
          })
        : null,
    ].filter(Boolean),
  });
};

export default ServicesSection;

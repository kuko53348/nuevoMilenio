// components/sections/PageHero.js
// Encabezado compacto para las páginas interiores (Info, Acerca de, Dev).
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand, gradients } from '../../database/themes.js';
import { LINKS } from '../../database/company.js';

export const PageHero = ({
  eyebrow,
  title,
  subtitle,
  icon = 'home',
  chips = [],
  primaryCta = null,
}) =>
  Container({
    width: '100%',
    flexShrink: 0,
    gradient: gradients.hero,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderBottom: `3px solid ${brand.gold}`,
    child: Column({
      width: '100%',
      maxWidth: 900,
      gap: 16,
      alignItems: 'flex-start',
      overflow: 'visible',
      children: [
        Row({
          width: 'auto',
          gap: 10,
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 12,
          borderRadius: 999,
          bgColor: 'rgba(201, 162, 39, 0.18)',
          border: '1px solid rgba(201, 162, 39, 0.45)',
          overflow: 'visible',
          children: [
            Icon({ name: icon, size: 15, color: brand.goldLight }),
            Text({
              text: String(eyebrow || '').toUpperCase(),
              size: 11.5,
              weight: '700',
              color: brand.goldLight,
              letterSpacing: 1,
            }),
          ],
        }),
        Text({
          text: title,
          type: 'h1',
          size: 34,
          weight: '800',
          color: brand.white,
          lineHeight: 1.2,
          marginBottom: 0,
          maxWidth: 760,
        }),
        subtitle
          ? Text({
              text: subtitle,
              size: 15.5,
              color: 'rgba(255,255,255,0.84)',
              lineHeight: 1.7,
              maxWidth: 720,
            })
          : null,
        chips.length > 0
          ? Row({
              width: '100%',
              gap: 10,
              flexWrap: 'wrap',
              overflow: 'visible',
              children: chips.map((chip) =>
                Row({
                  width: 'auto',
                  gap: 6,
                  alignItems: 'center',
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 999,
                  bgColor: 'rgba(255,255,255,0.10)',
                  overflow: 'visible',
                  children: [
                    Icon({ name: 'check_circle', size: 15, color: brand.goldLight }),
                    Text({ text: chip, size: 12, color: 'rgba(255,255,255,0.92)' }),
                  ],
                }),
              ),
            })
          : null,
        primaryCta
          ? Button({
              text: primaryCta.text,
              iconLeft: 'chat',
              bgColor: brand.gold,
              color: brand.navy,
              size: 'large',
              borderRadius: 12,
              padding: [12, 22],
              onPress: () => window.open(LINKS.whatsapp, '_blank'),
            })
          : null,
      ].filter(Boolean),
    }),
  });

export default PageHero;

// components/sections/HeroSection.js
// Portada del inicio: titular comercial + CTAs + tarjeta de contacto directo.
import { Container, Column, Row, Text, Icon, Button, Card } from 'flet-box';
import { brand, gradients } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS, YEARS_EXPERIENCE } from '../../database/company.js';
import { PersonAvatar } from '../ui/Brand.js';
import { fluid } from '../ui/responsive.js';

const HeroChip = ({ text, icon = 'check_circle' }) =>
  Row({
    width: 'auto',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    bgColor: 'rgba(255,255,255,0.10)',
    overflow: 'visible',
    children: [
      Icon({ name: icon, size: 16, color: brand.goldLight }),
      Text({ text, size: 12.5, color: 'rgba(255,255,255,0.92)', weight: '500' }),
    ],
  });

const ContactCard = () => {
  const rows = [
    { icon: 'chat', label: 'WhatsApp', value: CONTACT.whatsappDisplay, href: LINKS.whatsapp },
    { icon: 'mail', label: 'Correo', value: CONTACT.email, href: LINKS.email },
    { icon: 'schedule', label: 'Horario', value: CONTACT.hours },
  ];

  return Card({
    bgColor: brand.white,
    padding: 0,
    borderRadius: 20,
    borderWidth: 0,
    shadow: `0 18px 40px ${brand.shadowStrong}`,
    width: '100%',
    flex: '1 1 320px',
    overflow: 'hidden',
    child: Column({
      gap: 0,
      overflow: 'visible',
      children: [
        Container({
          bgColor: brand.goldSoft,
          paddingVertical: 14,
          paddingHorizontal: 20,
          overflow: 'visible',
          child: Row({
            gap: 8,
            alignItems: 'center',
            overflow: 'visible',
            children: [
              Icon({ name: 'bolt', size: 18, color: brand.goldDark }),
              Text({ text: 'Asesoría sin costo', size: 13, weight: '700', color: brand.goldDark }),
            ],
          }),
        }),
        Column({
          gap: 16,
          paddingVertical: 22,
          paddingHorizontal: 20,
          overflow: 'visible',
          children: [
            Row({
              gap: 14,
              alignItems: 'center',
              overflow: 'visible',
              children: [
                PersonAvatar({
                  src: CONTACT.photo,
                  initials: CONTACT.initials,
                  name: CONTACT.person,
                  size: 52,
                  bgColor: brand.navy,
                  color: brand.white,
                }),
                Column({
                  width: 'auto',
                  gap: 2,
                  alignItems: 'flex-start',
                  overflow: 'visible',
                  children: [
                    Text({ text: CONTACT.person, size: 16, weight: '700', color: brand.navy }),
                    Text({ text: CONTACT.role, size: 12, color: brand.inkSoft }),
                  ],
                }),
              ],
            }),
            Text({
              text: `Te atiende personalmente. ${YEARS_EXPERIENCE} años resolviendo ventas, arriendos y trámites: la conversación es directa, sin call centers.`,
              size: 13.5,
              color: brand.inkSoft,
              lineHeight: 1.6,
            }),
            Column({
              gap: 10,
              overflow: 'visible',
              children: rows.map((row) => {
                const line = Row({
                  gap: 10,
                  alignItems: 'center',
                  cursor: row.href ? 'pointer' : 'default',
                  overflow: 'visible',
                  children: [
                    Icon({ name: row.icon, size: 18, color: brand.goldDark }),
                    Column({
                      width: 'auto',
                      gap: 0,
                      alignItems: 'flex-start',
                      overflow: 'visible',
                      children: [
                        Text({ text: row.label, size: 11, color: brand.inkSoft }),
                        Text({
                          text: row.value,
                          size: 13.5,
                          weight: '600',
                          color: brand.navy,
                          wordBreak: 'break-word',
                        }),
                      ],
                    }),
                  ],
                });
                if (row.href) line.onclick = () => window.open(row.href, '_blank');
                return line;
              }),
            }),
            Button({
              text: 'Escribir por WhatsApp',
              iconLeft: 'chat',
              bgColor: brand.whatsapp,
              color: brand.white,
              fullWidth: true,
              borderRadius: 12,
              padding: [13, 16],
              elevation: 1,
              onPress: () => window.open(LINKS.whatsapp, '_blank'),
            }),
            Text({
              text: 'Respondemos dentro del mismo día hábil.',
              size: 11.5,
              color: brand.inkSoft,
              align: 'center',
            }),
          ],
        }),
      ],
    }),
  });
};

// El banner se usa como fondo del hero bajo un velo azul marino; sin banner,
// el hero queda con el degradado liso de la marca.
const heroBackground = COMPANY.banner
  ? {
      gradient: `${gradients.heroVeil}, url(${COMPANY.banner})`,
      bgSize: 'cover',
      bgPosition: 'center',
    }
  : { gradient: gradients.hero };

export const HeroSection = () =>
  Container({
    width: '100%',
    flexShrink: 0,
    ...heroBackground,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: fluid(48, 84),
    paddingHorizontal: 20,
    child: Column({
      width: '100%',
      maxWidth: 1120,
      gap: 40,
      overflow: 'visible',
      children: [
        Row({
          width: '100%',
          gap: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          overflow: 'visible',
          children: [
            Column({
              gap: 22,
              flex: '1 1 420px',
              maxWidth: 640,
              alignItems: 'flex-start',
              overflow: 'visible',
              children: [
                Row({
                  width: 'auto',
                  gap: 10,
                  alignItems: 'center',
                  paddingVertical: 6,
                  paddingHorizontal: 14,
                  borderRadius: 999,
                  bgColor: 'rgba(201, 162, 39, 0.18)',
                  border: `1px solid rgba(201, 162, 39, 0.45)`,
                  overflow: 'visible',
                  children: [
                    Icon({ name: 'workspace_premium', size: 16, color: brand.goldLight }),
                    Text({
                      text: COMPANY.hero.eyebrow,
                      size: 12,
                      weight: '600',
                      color: brand.goldLight,
                    }),
                  ],
                }),
                Text({
                  text: COMPANY.hero.title,
                  type: 'h1',
                  size: fluid(30, 46),
                  weight: '800',
                  color: brand.white,
                  lineHeight: 1.16,
                  marginBottom: 0,
                }),
                Row({
                  width: 'auto',
                  gap: 12,
                  alignItems: 'center',
                  paddingLeft: 14,
                  borderLeft: `3px solid ${brand.gold}`,
                  overflow: 'visible',
                  children: [
                    Text({
                      text: COMPANY.hero.highlight,
                      size: fluid(16, 20),
                      weight: '700',
                      color: brand.goldLight,
                      lineHeight: 1.3,
                    }),
                  ],
                }),
                Text({
                  text: COMPANY.hero.subtitle,
                  size: fluid(15, 17),
                  color: 'rgba(255,255,255,0.86)',
                  lineHeight: 1.7,
                  maxWidth: 560,
                }),
                Row({
                  width: 'auto',
                  gap: 12,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  overflow: 'visible',
                  children: [
                    Button({
                      text: COMPANY.hero.primaryCta,
                      iconLeft: 'chat',
                      bgColor: brand.gold,
                      color: brand.navy,
                      size: 'large',
                      borderRadius: 14,
                      padding: [15, 26],
                      elevation: 2,
                      onPress: () => window.open(LINKS.whatsapp, '_blank'),
                    }),
                    Button({
                      text: 'Ver servicios',
                      iconRight: 'arrow_forward',
                      variant: 'outlined',
                      color: brand.white,
                      size: 'large',
                      borderRadius: 14,
                      padding: [15, 26],
                      onPress: () => {
                        const target = document.getElementById('servicios');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      },
                    }),
                  ],
                }),
                Row({
                  width: '100%',
                  gap: 10,
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  overflow: 'visible',
                  children: COMPANY.hero.chips.map((chip) => HeroChip({ text: chip })),
                }),
              ],
            }),
            ContactCard(),
          ],
        }),
      ],
    }),
  });

export default HeroSection;

// components/sections/ProfileSection.js
// Perfil de Moises Araya Carmona (página "Acerca de").
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS, YEARS_EXPERIENCE } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { IconBadge } from '../ui/IconBadge.js';
import { PersonAvatar } from '../ui/Brand.js';

const FichaRow = ({ icon, label, value }) =>
  Row({
    width: '100%',
    gap: 12,
    alignItems: 'center',
    overflow: 'visible',
    children: [
      Icon({ name: icon, size: 19, color: brand.goldDark }),
      Column({
        width: 'auto',
        gap: 1,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: label, size: 11, color: brand.inkSoft, letterSpacing: 0.4 }),
          Text({ text: value, size: 14, weight: '600', color: brand.navy }),
        ],
      }),
    ],
  });

const TimelineItem = ({ period, title, text, isLast }) =>
  Row({
    width: '100%',
    gap: 16,
    // 'stretch', not 'flex-start': the marker is a column whose connector line
    // is `flex: 1`, so it only has height to distribute when the row gives it
    // one. With 'flex-start' the marker collapsed to the dot's own height and
    // the line between hitos never appeared.
    alignItems: 'stretch',
    overflow: 'visible',
    children: [
      Column({
        // Column viene con width:'100%' por defecto: dentro de este Row el
        // marcador se quedaba con toda la fila (589px) y, como no encoge
        // (`flex: '0 0 auto'`), aplastaba el texto contra su min-content
        // (~70px), convirtiendo cada hito en una cinta vertical.
        width: 'auto',
        flex: '0 0 auto',
        alignItems: 'center',
        gap: 4,
        overflow: 'visible',
        children: [
          Container({
            width: 14,
            height: 14,
            minWidth: 14,
            borderRadius: 7,
            bgColor: brand.gold,
            border: `3px solid ${brand.goldSoft}`,
            overflow: 'visible',
            marginTop: 4,
          }),
          !isLast
            ? Container({
                width: 2,
                flex: 1,
                height: '100%',
                // `brand.border` (#E2E7EF) is a hairline meant for white cards:
                // on this panel it was invisible, so the hitos quedaban flotando
                // sin unir. El dorado claro es el mismo acento del punto.
                bgColor: brand.goldLight,
                overflow: 'visible',
              })
            : null,
        ].filter(Boolean),
      }),
      Column({
        flex: 1,
        gap: 4,
        paddingBottom: isLast ? 0 : 22,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: String(period).toUpperCase(), size: 11, weight: '700', color: brand.goldDark, letterSpacing: 1 }),
          Text({ text: title, size: 16, weight: '700', color: brand.navy }),
          Text({ text, size: 13.5, color: brand.inkSoft, lineHeight: 1.65 }),
        ],
      }),
    ],
  });

export const ProfileSection = () =>
  Section({
    id: 'perfil',
    bgColor: brand.white,
    gap: 40,
    paddingVertical: 64,
    children: [
      Row({
        width: '100%',
        gap: 32,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          // --- Tarjeta de perfil ---
          Container({
            flex: '1 1 300px',
            gap: 18,
            paddingVertical: 28,
            paddingHorizontal: 24,
            borderRadius: 20,
            bgColor: brand.navy,
            alignItems: 'center',
            overflow: 'visible',
            shadow: `0 18px 40px ${brand.shadowStrong}`,
            children: [
              PersonAvatar({
                src: CONTACT.photo,
                initials: CONTACT.initials,
                name: CONTACT.person,
                size: 96,
                border: `3px solid ${brand.goldLight}`,
                shadow: `0 10px 24px ${brand.shadowStrong}`,
              }),
              Text({
                text: CONTACT.person,
                size: 21,
                weight: '700',
                color: brand.white,
                align: 'center',
              }),
              Text({
                text: CONTACT.role,
                size: 13.5,
                color: 'rgba(255,255,255,0.78)',
                align: 'center',
              }),
              Container({
                width: '100%',
                height: 1,
                bgColor: 'rgba(255,255,255,0.14)',
                overflow: 'visible',
              }),
              Column({
                gap: 12,
                width: '100%',
                overflow: 'visible',
                children: [
                  FichaRow({ icon: 'workspace_premium', label: 'EXPERIENCIA', value: `+${YEARS_EXPERIENCE} años` }),
                  FichaRow({ icon: 'handyman', label: 'ESPECIALIDAD', value: 'Trámites y documentación' }),
                  FichaRow({ icon: 'place', label: 'COBERTURA', value: 'Presencial y online en todo Chile' }),
                  FichaRow({ icon: 'schedule', label: 'HORARIO', value: CONTACT.hours }),
                ],
              }),
              Button({
                text: 'Escribir directo a Moises',
                iconLeft: 'chat',
                bgColor: brand.whatsapp,
                color: brand.white,
                fullWidth: true,
                borderRadius: 12,
                padding: [13, 18],
                onPress: () => window.open(LINKS.whatsapp, '_blank'),
              }),
              Row({
                width: '100%',
                gap: 10,
                flexWrap: 'wrap',
                overflow: 'visible',
                children: [
                  Button({
                    text: 'Llamar',
                    iconLeft: 'call',
                    variant: 'outlined',
                    color: brand.white,
                    fullWidth: true,
                    borderRadius: 12,
                    padding: [11, 16],
                    onPress: () => window.open(LINKS.phone, '_self'),
                  }),
                  Button({
                    text: 'Correo',
                    iconLeft: 'mail',
                    variant: 'outlined',
                    color: brand.white,
                    fullWidth: true,
                    borderRadius: 12,
                    padding: [11, 16],
                    onPress: () => window.open(LINKS.email, '_self'),
                  }),
                ],
              }),
            ],
          }),

          // --- Texto + especialidades ---
          Column({
            gap: 22,
            flex: '1 1 340px',
            alignItems: 'flex-start',
            overflow: 'visible',
            children: [
              Text({
                text: 'Quién gestiona tu operación',
                type: 'h2',
                size: 26,
                weight: '700',
                color: brand.navy,
                marginBottom: 0,
              }),
              Text({
                text: COMPANY.profile.headline,
                size: 16,
                weight: '600',
                color: brand.navyLight,
                lineHeight: 1.6,
              }),
              Text({
                text: COMPANY.profile.bio,
                size: 14.5,
                color: brand.inkSoft,
                lineHeight: 1.8,
              }),
              Column({
                width: '100%',
                gap: 10,
                overflow: 'visible',
                children: [
                  Text({
                    text: 'Especialidades',
                    size: 15,
                    weight: '700',
                    color: brand.navy,
                  }),
                  ...COMPANY.profile.specialties.map((specialty) =>
                    Row({
                      width: '100%',
                      gap: 10,
                      alignItems: 'flex-start',
                      overflow: 'visible',
                      children: [
                        Icon({ name: 'check_circle', size: 18, color: brand.goldDark }),
                        Text({
                          text: specialty,
                          size: 14,
                          color: brand.ink,
                          lineHeight: 1.6,
                          flex: 1,
                        }),
                      ],
                    }),
                  ),
                ],
              }),
              Container({
                width: '100%',
                gap: 8,
                paddingVertical: 20,
                paddingHorizontal: 22,
                borderRadius: 16,
                borderLeft: `4px solid ${brand.gold}`,
                bgColor: brand.goldSoft,
                overflow: 'visible',
                children: [
                  Row({
                    width: 'auto',
                    gap: 8,
                    alignItems: 'center',
                    overflow: 'visible',
                    children: [
                      Icon({ name: 'handshake', size: 20, color: brand.goldDark }),
                      Text({ text: 'Compromiso', size: 15, weight: '700', color: brand.goldDark }),
                    ],
                  }),
                  Text({
                    text: COMPANY.profile.promise,
                    size: 14,
                    color: brand.navyLight,
                    lineHeight: 1.7,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),

      // --- Trayectoria ---
      Column({
        width: '100%',
        gap: 20,
        overflow: 'visible',
        children: [
          Row({
            width: 'auto',
            gap: 10,
            alignItems: 'center',
            overflow: 'visible',
            children: [
              IconBadge({ icon: 'route', size: 40, iconSize: 20, borderRadius: 12 }),
              Text({
                text: 'Trayectoria',
                type: 'h2',
                size: 24,
                weight: '700',
                color: brand.navy,
                marginBottom: 0,
              }),
            ],
          }),
          Container({
            width: '100%',
            maxWidth: 760,
            paddingLeft: 4,
            // Container pinta `colors.surface` cuando no le pasas bgColor, y
            // applyBrandTheme() la tiene en crema: sin esto la Trayectoria
            // salía sobre un rectángulo gris duro, sin padding ni radio, que
            // no venía de ningún diseño. La sección ya es blanca.
            bgColor: 'transparent',
            overflow: 'visible',
            child: Column({
              gap: 0,
              width: '100%',
              overflow: 'visible',
              children: COMPANY.profile.timeline.map((item, index) =>
                TimelineItem({ ...item, isLast: index === COMPANY.profile.timeline.length - 1 }),
              ),
            }),
          }),
        ],
      }),
    ],
  });

export default ProfileSection;

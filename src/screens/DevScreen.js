// screens/DevScreen.js
// Sección DEV: acerca del desarrollador, tecnología y enlaces.
import { Container, Column, Row, Text, Icon, Button, goTo } from 'flet-box';
import { brand } from '../database/themes.js';
import { DEV } from '../database/dev.js';
import { PageHero } from '../components/sections/PageHero.js';
import { DevProfileSection, DevStackSection, DevReposSection } from '../components/sections/DevSections.js';
import { ScreenShell } from '../components/ScreenShell.js';

const DevClosingBand = () =>
  Container({
    width: '100%',
    flexShrink: 0,
    gradient: `linear-gradient(135deg, ${brand.navy} 0%, ${brand.navyDark} 100%)`,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: 56,
    paddingHorizontal: 20,
    child: Column({
      width: '100%',
      maxWidth: 760,
      gap: 16,
      alignItems: 'center',
      overflow: 'visible',
      children: [
        Icon({ name: 'favorite', size: 28, color: brand.goldLight }),
        Text({
          text: '¿Te gusta este sitio?',
          type: 'h2',
          size: 24,
          weight: '700',
          color: brand.white,
          align: 'center',
          marginBottom: 0,
        }),
        Text({
          text: 'Fue diseñado y desarrollado como pieza de portafolio para un cliente real del rubro inmobiliario. Si necesitas algo parecido para tu negocio, escríbenos.',
          size: 14.5,
          color: 'rgba(255,255,255,0.82)',
          align: 'center',
          lineHeight: 1.7,
        }),
        Row({
          width: '100%',
          gap: 12,
          flexWrap: 'wrap',
          justifyContent: 'center',
          overflow: 'visible',
          children: [
            Button({
              text: 'Volver al inicio',
              iconLeft: 'home',
              bgColor: brand.gold,
              color: brand.navy,
              size: 'large',
              borderRadius: 12,
              padding: [13, 24],
              onPress: () => goTo('/'),
            }),
            Button({
              text: 'Contactar al desarrollador',
              iconLeft: 'mail',
              variant: 'outlined',
              color: brand.white,
              size: 'large',
              borderRadius: 12,
              padding: [13, 24],
              onPress: () => window.open(`mailto:${DEV.links.email}`, '_self'),
            }),
          ],
        }),
      ],
    }),
  });

export const DevScreen = () =>
  ScreenShell({
    children: [
      PageHero({
        eyebrow: 'Sección dev',
        title: 'Acerca del desarrollador',
        subtitle: DEV.disclaimer,
        icon: 'code',
        chips: ['Flet-Box', 'JavaScript vanilla', 'PWA + Capacitor'],
      }),
      DevProfileSection(),
      DevStackSection(),
      DevReposSection(),
      DevClosingBand(),
    ],
  });

export default DevScreen;

// components/sections/PageHero.js
// Encabezado compacto para las páginas interiores (Info, Acerca de, Dev).
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand, gradients } from '../../database/themes.js';
import { LINKS, COMPANY } from '../../database/company.js';
import { CONTENT_MAX } from '../ui/responsive.js';

// Piso de altura de la banda, medido sobre la más alta de las tres pantallas
// (Acerca de, que además del texto lleva el CTA): 334px, redondeado a 336.
// Sin el piso, el alto era lo que pedía el contenido de cada pantalla y la
// banda saltaba al cambiar de pestaña (Info 321 / Acerca 334 / Dev 294).
const BAND_MIN_HEIGHT = 336;

// Misma foto del hero de Inicio, bajo un velo más cerrado: la banda es baja y
// el texto va a la izquierda, así que aquí la imagen solo se insinúa.
const heroBackground = COMPANY.banner
  ? {
      gradient: `${gradients.heroVeilSoft}, url(${COMPANY.banner})`,
      bgSize: 'cover',
      bgPosition: 'center',
    }
  : { gradient: gradients.hero };

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
    ...heroBackground,
    minHeight: BAND_MIN_HEIGHT,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderBottom: `3px solid ${brand.gold}`,
    child: Column({
      width: '100%',
      // Debe ser el mismo tope de Section: con 900 el bloque quedaba centrado
      // dentro de un contenedor de 1120 y su borde izquierdo se iba
      // (1120-900)/2 = 110px hacia la derecha respecto del contenido blanco
      // que viene debajo. El largo de línea ya lo controlan los maxWidth del
      // título y del subtítulo.
      maxWidth: CONTENT_MAX,
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

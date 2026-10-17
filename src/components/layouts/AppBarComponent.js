// components/layouts/AppBarComponent.js
// Barra superior de marca + pestañas de navegación.
// Es una FÁBRICA (función): el Scaffold la vuelve a crear en cada cambio de
// ruta, así la pestaña activa siempre queda marcada sin listeners extra.
import { AppBar, Column, Row, Container, Text, Icon, Button, colors, openDrawer } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS } from '../../database/company.js';
import { NavTabs } from './NavTabs.js';
import { isMobile } from '../ui/responsive.js';

const BrandMark = () => {
  const compact = isMobile();
  return Row({
    width: 'auto',
    gap: 10,
    alignItems: 'center',
    overflow: 'visible',
    children: [
      Container({
        width: 38,
        height: 38,
        minWidth: 38,
        borderRadius: 12,
        bgColor: brand.gold,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        shadow: `0 2px 8px ${brand.shadowStrong}`,
        child: Text({ text: COMPANY.monogram, size: 15, weight: '800', color: brand.navy }),
      }),
      Column({
        width: 'auto',
        gap: 0,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({
            text: COMPANY.name,
            size: compact ? 15 : 18,
            weight: '700',
            color: brand.white,
            whiteSpace: 'nowrap',
          }),
          compact
            ? null
            : Text({
                text: COMPANY.tagline,
                size: 11,
                color: 'rgba(255,255,255,0.72)',
                whiteSpace: 'nowrap',
              }),
        ].filter(Boolean),
      }),
    ],
  });
};

const WhatsappAction = ({ withLabel = true }) => {
  const btn = Button({
    text: withLabel ? 'WhatsApp' : '',
    iconLeft: 'chat',
    bgColor: brand.whatsapp,
    color: brand.white,
    size: 'small',
    borderRadius: 999,
    elevation: 1,
    padding: withLabel ? [8, 14] : [8, 8],
    onPress: () => window.open(LINKS.whatsapp, '_blank'),
  });
  return btn;
};

export const AppBarComponent = () => {
  const compact = isMobile();

  const appBar = AppBar({
    title: BrandMark(),
    backgroundColor: brand.navy,
    titleColor: brand.white,
    iconColor: brand.white,
    elevation: 2,
    centerTitle: false,
    sticky: true,
    paddingLeft: compact ? 12 : 20,
    paddingRight: compact ? 12 : 20,
    minHeight: 64,
    leading: compact
      ? Icon({
          name: 'menu',
          size: 24,
          color: brand.white,
          cursor: 'pointer',
          onclick: () => openDrawer(),
        })
      : null,
    actions: compact
      ? [WhatsappAction({ withLabel: false })]
      : [NavTabs({ variant: 'inline' }), WhatsappAction({ withLabel: true })],
  });

  if (!compact) return appBar;

  // En móvil las pestañas van en una segunda fila, siempre visibles y
  // deslizables horizontalmente si no caben.
  return Column({
    width: '100%',
    gap: 0,
    flexShrink: 0,
    bgColor: brand.navy,
    overflow: 'visible',
    children: [appBar, NavTabs({ variant: 'bar' })],
  });
};

export default AppBarComponent;

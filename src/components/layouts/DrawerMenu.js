// components/layouts/DrawerMenu.js
// Menú lateral (móvil): navegación, contacto directo y botón de WhatsApp.
import { Drawer, DrawerItem, Container, Column, Row, Text, Icon, Button, colors, closeDrawer, goTo } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS, SOCIAL, NAV_ITEMS } from '../../database/company.js';

const Header = () =>
  Container({
    paddingVertical: 24,
    paddingHorizontal: 20,
    bgColor: brand.navy,
    overflow: 'visible',
    child: Column({
      gap: 12,
      alignItems: 'flex-start',
      overflow: 'visible',
      children: [
        Container({
          width: 52,
          height: 52,
          borderRadius: 16,
          bgColor: brand.gold,
          overflow: 'visible',
          alignItems: 'center',
          justifyContent: 'center',
          child: Text({ text: COMPANY.monogram, size: 20, weight: '800', color: brand.navy }),
        }),
        Text({ text: COMPANY.name, size: 18, weight: '700', color: brand.white }),
        Text({ text: COMPANY.tagline, size: 12, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }),
      ],
    }),
  });

const Row_Link = ({ icon, label, value, href }) => {
  const row = Row({
    gap: 12,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    cursor: href ? 'pointer' : 'default',
    overflow: 'visible',
    children: [
      Icon({ name: icon, size: 20, color: brand.navy }),
      Column({
        width: 'auto',
        gap: 0,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: label, size: 11, color: brand.inkSoft }),
          Text({ text: value, size: 14, weight: '600', color: brand.navy, wordBreak: 'break-word' }),
        ],
      }),
    ],
  });
  if (href) row.onclick = () => window.open(href, '_blank');
  return row;
};

const Footer = () =>
  Container({
    paddingVertical: 16,
    paddingHorizontal: 20,
    bgColor: brand.cream,
    borderTop: `1px solid ${brand.border}`,
    overflow: 'visible',
    child: Column({
      gap: 8,
      overflow: 'visible',
      children: [
        Text({
          text: COMPANY.claim,
          size: 12,
          color: brand.inkSoft,
          lineHeight: 1.5,
        }),
        Row({
          gap: 16,
          alignItems: 'center',
          overflow: 'visible',
          children: [
            Text({ text: SOCIAL.facebookHandle, size: 11, color: brand.navy, weight: '600' }),
            Text({ text: '·', size: 11, color: brand.border }),
            Text({
              text: `${new Date().getFullYear()} ©`,
              size: 11,
              color: brand.inkSoft,
            }),
          ],
        }),
      ],
    }),
  });

export const DrawerMenu = () =>
  Drawer({
    bgColor: brand.white,
    width: 292,
    header: Header(),
    body: [
      ...NAV_ITEMS.map((item) =>
        DrawerItem({
          icon: item.icon,
          label: item.label,
          route: item.route,
          selectedColor: brand.gold,
          unselectedColor: brand.navy,
          hintColor: brand.navySoft,
          onPress: () => closeDrawer(),
        }),
      ),
      Container({
        marginVertical: 12,
        marginHorizontal: 20,
        height: 1,
        bgColor: brand.border,
        overflow: 'visible',
      }),
      Container({
        paddingHorizontal: 20,
        paddingVertical: 4,
        bgColor: brand.white,
        overflow: 'visible',
        child: Column({
          gap: 8,
          overflow: 'visible',
          children: [
            Text({ text: 'CONTACTO DIRECTO', size: 11, weight: '700', color: brand.goldDark, letterSpacing: 1 }),
            Row_Link({
              icon: 'chat',
              label: 'WhatsApp',
              value: CONTACT.whatsappDisplay,
              href: LINKS.whatsapp,
            }),
            Row_Link({
              icon: 'call',
              label: 'Teléfono',
              value: CONTACT.phoneDisplay,
              href: LINKS.phone,
            }),
            Row_Link({
              icon: 'mail',
              label: 'Correo',
              value: CONTACT.email,
              href: LINKS.email,
            }),
            Row_Link({
              icon: 'person',
              label: 'Te atiende',
              value: CONTACT.person,
            }),
          ],
        }),
      }),
      Container({
        paddingHorizontal: 20,
        paddingVertical: 12,
        bgColor: brand.white,
        overflow: 'visible',
        child: Column({
          gap: 10,
          overflow: 'visible',
          children: [
            Button({
              text: 'Hablar por WhatsApp',
              iconLeft: 'chat',
              bgColor: brand.whatsapp,
              color: brand.white,
              fullWidth: true,
              borderRadius: 12,
              padding: [12, 16],
              onPress: () => window.open(LINKS.whatsapp, '_blank'),
            }),
            Button({
              text: 'Ver catálogo en Facebook',
              iconLeft: 'thumb_up',
              variant: 'outlined',
              color: brand.navy,
              fullWidth: true,
              borderRadius: 12,
              padding: [12, 16],
              onPress: () => window.open(LINKS.facebook, '_blank'),
            }),
            Button({
              text: 'Página del desarrollador',
              iconLeft: 'code',
              variant: 'text',
              color: brand.inkSoft,
              fullWidth: true,
              borderRadius: 12,
              padding: [8, 16],
              onPress: () => {
                closeDrawer();
                goTo('/dev');
              },
            }),
          ],
        }),
      }),
    ],
    footer: Footer(),
  });

export default DrawerMenu;

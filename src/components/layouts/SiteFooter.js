// components/layouts/SiteFooter.js
// Pie de página común a todas las vistas.
import { Container, Column, Row, Text, Icon, Divider, goTo } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS, SOCIAL, NAV_ITEMS } from '../../database/company.js';
import { BrandMark } from '../ui/Brand.js';
import { isMobile } from '../ui/responsive.js';

const ColumnTitle = ({ text }) =>
  Text({
    text: text.toUpperCase(),
    size: 12,
    weight: '700',
    color: brand.gold,
    letterSpacing: 1.2,
  });

const FooterLink = ({ label, onPress, icon = null }) => {
  const row = Row({
    width: 'auto',
    gap: 8,
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'visible',
    children: [
      icon ? Icon({ name: icon, size: 16, color: 'rgba(255,255,255,0.6)' }) : null,
      Text({ text: label, size: 13, color: 'rgba(255,255,255,0.82)', lineHeight: 1.8 }),
    ].filter(Boolean),
  });
  row.onmouseenter = () => {
    row.style.opacity = '0.75';
  };
  row.onmouseleave = () => {
    row.style.opacity = '1';
  };
  row.onclick = onPress;
  return row;
};

const ContactLine = ({ icon, value, href }) => {
  const row = Row({
    width: 'auto',
    gap: 8,
    alignItems: 'center',
    cursor: href ? 'pointer' : 'default',
    overflow: 'visible',
    children: [
      Icon({ name: icon, size: 16, color: brand.gold }),
      Text({ text: value, size: 13, color: 'rgba(255,255,255,0.85)', wordBreak: 'break-word' }),
    ],
  });
  if (href) row.onclick = () => window.open(href, '_blank');
  return row;
};

export const SiteFooter = () => {
  const compact = isMobile();

  const brandColumn = Column({
    gap: 12,
    width: '100%',
    flex: compact ? '1 1 100%' : '1 1 280px',
    overflow: 'visible',
    children: [
      Row({
        width: 'auto',
        gap: 10,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          BrandMark({ src: COMPANY.logo, monogram: COMPANY.monogram, size: 40 }),
          Text({ text: COMPANY.name, size: 16, weight: '700', color: brand.white }),
        ],
      }),
      Text({
        text: COMPANY.claim,
        size: 13,
        color: 'rgba(255,255,255,0.72)',
        lineHeight: 1.7,
        maxWidth: 320,
      }),
      Text({
        text: `${CONTACT.person} · ${CONTACT.role}`,
        size: 12,
        color: brand.goldLight,
        lineHeight: 1.6,
      }),
    ],
  });

  const navColumn = Column({
    gap: 10,
    width: 'auto',
    flex: '1 1 160px',
    overflow: 'visible',
    children: [
      ColumnTitle({ text: 'Navegación' }),
      ...NAV_ITEMS.map((item) =>
        FooterLink({ label: item.label, onPress: () => goTo(item.route) }),
      ),
    ],
  });

  const servicesColumn = Column({
    gap: 10,
    width: 'auto',
    flex: '1 1 160px',
    overflow: 'visible',
    children: [
      ColumnTitle({ text: 'Servicios' }),
      ...COMPANY.services.slice(0, 5).map((service) =>
        FooterLink({ label: service.title, onPress: () => goTo('/info') }),
      ),
    ],
  });

  const contactColumn = Column({
    gap: 10,
    width: 'auto',
    flex: '1 1 220px',
    overflow: 'visible',
    children: [
      ColumnTitle({ text: 'Contacto' }),
      ContactLine({ icon: 'chat', value: CONTACT.whatsappDisplay, href: LINKS.whatsapp }),
      ContactLine({ icon: 'call', value: CONTACT.phoneDisplay, href: LINKS.phone }),
      ContactLine({ icon: 'mail', value: CONTACT.email, href: LINKS.email }),
      ContactLine({ icon: 'schedule', value: CONTACT.hours }),
      Row({
        width: 'auto',
        gap: 10,
        alignItems: 'center',
        marginTop: 4,
        overflow: 'visible',
        children: [
          Container({
            width: 36,
            height: 36,
            borderRadius: 10,
            bgColor: 'rgba(255,255,255,0.10)',
            cursor: 'pointer',
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            child: Icon({ name: 'thumb_up', size: 18, color: brand.white }),
            onclick: () => window.open(LINKS.facebook, '_blank'),
          }),
          Container({
            width: 36,
            height: 36,
            borderRadius: 10,
            bgColor: 'rgba(255,255,255,0.10)',
            cursor: 'pointer',
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            child: Icon({ name: 'photo_camera', size: 18, color: brand.white }),
            onclick: () => window.open(LINKS.instagram, '_blank'),
          }),
          Container({
            width: 36,
            height: 36,
            borderRadius: 10,
            bgColor: brand.whatsapp,
            cursor: 'pointer',
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            child: Icon({ name: 'chat', size: 18, color: brand.white }),
            onclick: () => window.open(LINKS.whatsapp, '_blank'),
          }),
        ],
      }),
      Text({
        text: SOCIAL.instagramHandle,
        size: 11,
        color: 'rgba(255,255,255,0.55)',
      }),
    ],
  });

  return Container({
    width: '100%',
    flexShrink: 0,
    bgColor: brand.navyDark,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderTop: `3px solid ${brand.gold}`,
    child: Column({
      width: '100%',
      maxWidth: 1120,
      gap: 28,
      overflow: 'visible',
      children: [
        Row({
          width: '100%',
          gap: 28,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          overflow: 'visible',
          children: [brandColumn, navColumn, servicesColumn, contactColumn],
        }),
        Container({
          width: '100%',
          height: 1,
          bgColor: 'rgba(255,255,255,0.12)',
          overflow: 'visible',
        }),
        Row({
          width: '100%',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          overflow: 'visible',
          children: [
            Text({
              text: `© ${new Date().getFullYear()} ${COMPANY.name}. Todos los derechos reservados.`,
              size: 12,
              color: 'rgba(255,255,255,0.6)',
            }),
            Row({
              width: 'auto',
              gap: 16,
              alignItems: 'center',
              overflow: 'visible',
              children: [
                FooterLink({ label: 'Aviso de privacidad', onPress: () => goTo('/info') }),
                FooterLink({ label: 'Sitio por el desarrollador', onPress: () => goTo('/dev'), icon: 'code' }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

export default SiteFooter;

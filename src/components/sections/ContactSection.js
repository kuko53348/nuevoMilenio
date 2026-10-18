// components/sections/ContactSection.js
// Formulario de contacto: al enviar, arma un mensaje y abre WhatsApp.
// Es una página estática, no hay backend: la conversación continúa en WhatsApp.
import { Container, Column, Row, Text, Icon, Button, Input, Chip } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, CONTACT, LINKS, SOCIAL } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { PersonAvatar } from '../ui/Brand.js';

const ContactRow = ({ icon, label, value, href }) => {
  const row = Row({
    width: '100%',
    gap: 12,
    alignItems: 'center',
    cursor: href ? 'pointer' : 'default',
    overflow: 'visible',
    children: [
      Container({
        width: 40,
        height: 40,
        minWidth: 40,
        borderRadius: 12,
        bgColor: brand.goldSoft,
        overflow: 'visible',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        child: Icon({ name: icon, size: 19, color: brand.goldDark }),
      }),
      Column({
        width: 'auto',
        gap: 1,
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Text({ text: label, size: 11, color: brand.inkSoft, letterSpacing: 0.4 }),
          Text({ text: value, size: 14, weight: '600', color: brand.navy, wordBreak: 'break-word' }),
        ],
      }),
    ],
  });
  if (href) row.onclick = () => window.open(href, '_blank');
  return row;
};

export const ContactSection = ({ withForm = true } = {}) => {
  const subjectState = { value: COMPANY.contact.subjects[0] };

  // Campos del formulario (se leen al enviar).
  const nameInput = Input({
    label: 'Tu nombre',
    placeholder: 'Ej: María Pérez',
    fullWidth: true,
    variant: 'outlined',
    borderRadius: 12,
    iconLeft: 'person',
    iconColor: brand.inkSoft,
  });
  const phoneInput = Input({
    label: 'Tu teléfono o correo',
    placeholder: 'Ej: +56 9 1234 5678',
    fullWidth: true,
    variant: 'outlined',
    borderRadius: 12,
    iconLeft: 'chat',
    iconColor: brand.inkSoft,
  });
  const messageInput = Input({
    label: '¿Qué necesitas?',
    placeholder: 'Cuéntanos brevemente tu caso: comuna, tipo de propiedad y objetivo.',
    fullWidth: true,
    variant: 'outlined',
    borderRadius: 12,
  });

  const submit = () => {
    const name = nameInput.getValue().trim();
    const contact = phoneInput.getValue().trim();
    const message = messageInput.getValue().trim();

    const lines = [
      `Hola ${COMPANY.name} 👋, vengo del sitio web.`,
      `Nombre: ${name || '(sin nombre)'}`,
      contact ? `Contacto: ${contact}` : null,
      `Motivo: ${subjectState.value}`,
      message ? `Detalle: ${message}` : null,
      'Espero su respuesta. ¡Gracias!',
    ].filter(Boolean);

    window.open(
      `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    );
  };

  return Section({
    id: 'contacto',
    bgColor: brand.white,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: COMPANY.contact.eyebrow,
        title: COMPANY.contact.title,
        subtitle: COMPANY.contact.subtitle,
      }),
      Row({
        width: '100%',
        gap: 28,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        overflow: 'visible',
        children: [
          // --- Columna izquierda: formulario ---
          withForm
            ? Container({
                flex: '1 1 380px',
                gap: 18,
                paddingVertical: 26,
                paddingHorizontal: 24,
                borderRadius: 20,
                bgColor: brand.cream,
                border: `1px solid ${brand.border}`,
                overflow: 'visible',
                children: [
                  Text({
                    text: 'Solicita tu asesoría',
                    type: 'h3',
                    size: 19,
                    weight: '700',
                    color: brand.navy,
                    marginBottom: 0,
                  }),
                  Text({ text: 'Motivo de tu consulta', size: 12, weight: '600', color: brand.inkSoft }),
                  Row({
                    width: '100%',
                    gap: 8,
                    flexWrap: 'wrap',
                    overflow: 'visible',
                    children: (() => {
                      // Se crea primero la lista completa y luego se cablea el
                      // clic, así cada chip "conoce" a todos sus compañeros.
                      const chipRefs = [];
                      const chips = COMPANY.contact.subjects.map((subject) => {
                        const chip = Chip({
                          label: subject,
                          variant: 'outlined',
                          color: brand.border,
                          textColor: brand.ink,
                          size: 12,
                          padding: '6px 12px',
                          borderRadius: 999,
                        });
                        const textEl = chip.querySelector('span:last-child');
                        const entry = { subject, chip, textEl };
                        chipRefs.push(entry);
                        chip.onclick = () => {
                          subjectState.value = subject;
                          chipRefs.forEach(({ subject: s, chip: c, textEl: t }) => {
                            const active = s === subject;
                            c.style.backgroundColor = active ? brand.navy : 'transparent';
                            c.style.borderColor = active ? brand.navy : brand.border;
                            if (t) t.style.color = active ? brand.white : brand.ink;
                          });
                        };
                        return chip;
                      });
                      return chips;
                    })(),
                  }),
                  nameInput,
                  phoneInput,
                  messageInput,
                  Button({
                    text: 'Enviar consulta por WhatsApp',
                    iconLeft: 'chat',
                    bgColor: brand.whatsapp,
                    color: brand.white,
                    fullWidth: true,
                    borderRadius: 12,
                    padding: [14, 18],
                    onPress: submit,
                  }),
                  Text({
                    text: COMPANY.contact.formNote,
                    size: 11.5,
                    color: brand.inkSoft,
                    lineHeight: 1.5,
                  }),
                ],
              })
            : null,

          // --- Columna derecha: datos de contacto ---
          Container({
            flex: '1 1 300px',
            gap: 22,
            paddingVertical: 26,
            paddingHorizontal: 24,
            borderRadius: 20,
            bgColor: brand.navy,
            overflow: 'visible',
            alignItems: 'flex-start',
            shadow: `0 18px 40px ${brand.shadowStrong}`,
            children: [
              Row({
                width: 'auto',
                gap: 14,
                alignItems: 'center',
                overflow: 'visible',
                children: [
                  PersonAvatar({
                    src: CONTACT.photo,
                    initials: CONTACT.initials,
                    name: CONTACT.person,
                    size: 52,
                  }),
                  Column({
                    width: 'auto',
                    gap: 2,
                    alignItems: 'flex-start',
                    overflow: 'visible',
                    children: [
                      Text({ text: CONTACT.person, size: 16, weight: '700', color: brand.white }),
                      Text({
                        text: CONTACT.role,
                        size: 12,
                        color: 'rgba(255,255,255,0.72)',
                      }),
                    ],
                  }),
                ],
              }),
              Text({
                text: 'Contacto directo: te contesta la misma persona que gestiona tu operación.',
                size: 13,
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.6,
              }),
              Column({
                gap: 14,
                width: '100%',
                overflow: 'visible',
                children: [
                  ContactRow({ icon: 'chat', label: 'WHATSAPP', value: CONTACT.whatsappDisplay, href: LINKS.whatsapp }),
                  ContactRow({ icon: 'call', label: 'TELÉFONO', value: CONTACT.phoneDisplay, href: LINKS.phone }),
                  ContactRow({ icon: 'mail', label: 'CORREO', value: CONTACT.email, href: LINKS.email }),
                  ContactRow({ icon: 'schedule', label: 'HORARIO', value: CONTACT.hours }),
                ],
              }),
              Row({
                width: '100%',
                gap: 10,
                flexWrap: 'wrap',
                overflow: 'visible',
                children: [
                  Button({
                    text: 'WhatsApp',
                    iconLeft: 'chat',
                    bgColor: brand.whatsapp,
                    color: brand.white,
                    borderRadius: 12,
                    padding: [11, 16],
                    onPress: () => window.open(LINKS.whatsapp, '_blank'),
                  }),
                  Button({
                    text: 'Facebook',
                    iconLeft: 'thumb_up',
                    variant: 'outlined',
                    color: brand.white,
                    borderRadius: 12,
                    padding: [11, 16],
                    onPress: () => window.open(LINKS.facebook, '_blank'),
                  }),
                  Button({
                    text: 'Instagram',
                    iconLeft: 'photo_camera',
                    variant: 'outlined',
                    color: brand.white,
                    borderRadius: 12,
                    padding: [11, 16],
                    onPress: () => window.open(LINKS.instagram, '_blank'),
                  }),
                ],
              }),
              Text({
                text: SOCIAL.instagramHandle,
                size: 11.5,
                color: 'rgba(255,255,255,0.6)',
              }),
            ],
          }),
        ].filter(Boolean),
      }),
    ],
  });
};

export default ContactSection;

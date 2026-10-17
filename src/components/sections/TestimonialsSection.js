// components/sections/TestimonialsSection.js
// Testimonios de clientes (datos de relleno: edítalos en database/company.js).
import { Container, Column, Row, Text, Icon, Button } from 'flet-box';
import { brand } from '../../database/themes.js';
import { COMPANY, LINKS } from '../../database/company.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';

const Stars = ({ rating = 5 }) =>
  Row({
    width: 'auto',
    gap: 2,
    alignItems: 'center',
    overflow: 'visible',
    children: Array.from({ length: 5 }).map((_, index) =>
      Icon({
        name: index < rating ? 'star' : 'star_border',
        size: 16,
        color: index < rating ? brand.gold : brand.border,
      }),
    ),
  });

const TestimonialCard = (testimonial) =>
  Container({
    flex: '1 1 320px',
    minWidth: 300,
    gap: 16,
    paddingVertical: 24,
    paddingHorizontal: 22,
    borderRadius: 18,
    bgColor: brand.white,
    border: `1px solid ${brand.border}`,
    shadow: `0 8px 24px ${brand.shadow}`,
    alignItems: 'flex-start',
    overflow: 'visible',
    children: [
      Row({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'visible',
        children: [
          Stars({ rating: testimonial.rating }),
          Container({
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 999,
            bgColor: brand.navySoft,
            overflow: 'visible',
            child: Text({
              text: testimonial.tag,
              size: 10.5,
              weight: '700',
              color: brand.navy,
            }),
          }),
        ],
      }),
      Text({
        text: `“${testimonial.quote}”`,
        size: 14.5,
        color: brand.ink,
        lineHeight: 1.7,
      }),
      Row({
        width: 'auto',
        gap: 10,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Container({
            width: 38,
            height: 38,
            minWidth: 38,
            borderRadius: 19,
            bgColor: brand.navy,
            overflow: 'visible',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            child: Text({
              text: testimonial.name.charAt(0),
              size: 15,
              weight: '700',
              color: brand.goldLight,
            }),
          }),
          Column({
            width: 'auto',
            gap: 0,
            alignItems: 'flex-start',
            overflow: 'visible',
            children: [
              Text({ text: testimonial.name, size: 14, weight: '700', color: brand.navy }),
              Text({ text: testimonial.role, size: 12, color: brand.inkSoft }),
            ],
          }),
        ],
      }),
    ],
  });

export const TestimonialsSection = () =>
  Section({
    id: 'testimonios',
    bgColor: brand.white,
    gap: 40,
    paddingVertical: 72,
    children: [
      SectionHeading({
        eyebrow: 'Clientes reales',
        title: 'Lo que dicen quienes ya trabajaron con nosotros',
        subtitle:
          'La mejor publicidad es un cliente que vuelve y recomienda. Estas son algunas de las operaciones que acompañamos.',
      }),
      Row({
        width: '100%',
        gap: 20,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        overflow: 'visible',
        children: COMPANY.testimonials.map((testimonial) => TestimonialCard(testimonial)),
      }),
      Row({
        width: '100%',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Button({
            text: 'Ver catálogo de propiedades',
            iconLeft: 'thumb_up',
            variant: 'outlined',
            color: brand.navy,
            size: 'large',
            borderRadius: 14,
            padding: [13, 24],
            onPress: () => window.open(LINKS.facebook, '_blank'),
          }),
          Button({
            text: 'Escríbenos por WhatsApp',
            iconLeft: 'chat',
            bgColor: brand.whatsapp,
            color: brand.white,
            size: 'large',
            borderRadius: 14,
            padding: [13, 24],
            onPress: () => window.open(LINKS.whatsapp, '_blank'),
          }),
        ],
      }),
    ],
  });

export default TestimonialsSection;

// components/sections/DevSections.js
// Contenido de la sección DEV: perfil, stack, arquitectura y repositorios.
import { Container, Column, Row, Text, Icon, Button, Chip } from 'flet-box';
import { brand } from '../../database/themes.js';
import { DEV } from '../../database/dev.js';
import { Section } from '../ui/Section.js';
import { SectionHeading } from '../ui/SectionHeading.js';
import { IconBadge } from '../ui/IconBadge.js';
import { PersonAvatar } from '../ui/Brand.js';

const LinkButton = ({ icon, label, href }) =>
  Button({
    text: label,
    iconLeft: icon,
    variant: 'outlined',
    color: brand.navy,
    borderRadius: 12,
    padding: [10, 16],
    onPress: () => window.open(href, '_blank'),
  });

export const DevProfileSection = () =>
  Section({
    id: 'dev-perfil',
    bgColor: brand.white,
    gap: 32,
    paddingVertical: 64,
    children: [
      Row({
        width: '100%',
        gap: 30,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        overflow: 'visible',
        children: [
          Container({
            flex: '0 0 240px',
            gap: 14,
            paddingVertical: 26,
            paddingHorizontal: 22,
            borderRadius: 20,
            bgColor: brand.navy,
            alignItems: 'center',
            overflow: 'visible',
            shadow: `0 18px 40px ${brand.shadowStrong}`,
            children: [
              PersonAvatar({
                src: DEV.photo,
                initials: DEV.initials,
                name: DEV.name,
                size: 96,
                border: `3px solid ${brand.goldLight}`,
              }),
              Text({ text: DEV.name, size: 18, weight: '700', color: brand.white, align: 'center' }),
              Text({ text: DEV.handle, size: 13, color: brand.goldLight, align: 'center' }),
              Text({
                text: DEV.role,
                size: 12.5,
                color: 'rgba(255,255,255,0.78)',
                align: 'center',
                lineHeight: 1.5,
              }),
              Text({ text: `📍 ${DEV.location}`, size: 12, color: 'rgba(255,255,255,0.6)' }),
              Button({
                text: 'Ver GitHub',
                iconLeft: 'code',
                bgColor: brand.gold,
                color: brand.navy,
                fullWidth: true,
                borderRadius: 12,
                padding: [11, 16],
                onPress: () => window.open(DEV.links.github, '_blank'),
              }),
            ],
          }),
          Column({
            gap: 16,
            flex: '1 1 340px',
            alignItems: 'flex-start',
            overflow: 'visible',
            children: [
              Text({
                text: 'Sobre el desarrollo',
                type: 'h2',
                size: 24,
                weight: '700',
                color: brand.navy,
                marginBottom: 0,
              }),
              Text({
                text: DEV.bio,
                size: 14.5,
                color: brand.inkSoft,
                lineHeight: 1.8,
              }),
              Row({
                width: '100%',
                gap: 10,
                flexWrap: 'wrap',
                overflow: 'visible',
                children: [
                  LinkButton({ icon: 'code', label: 'GitHub', href: DEV.links.github }),
                  LinkButton({ icon: 'chat', label: 'WhatsApp', href: DEV.links.whatsapp }),
                  LinkButton({ icon: 'language', label: 'Sitio web', href: DEV.links.site }),
                  LinkButton({ icon: 'work', label: 'LinkedIn', href: DEV.links.linkedin }),
                  LinkButton({ icon: 'mail', label: 'Correo', href: `mailto:${DEV.links.email}` }),
                ],
              }),
              Text({
                text: DEV.credits,
                size: 13,
                color: brand.inkSoft,
                lineHeight: 1.6,
                maxWidth: 640,
              }),
            ],
          }),
        ],
      }),
    ],
  });

export const DevStackSection = () =>
  Section({
    id: 'dev-stack',
    bgColor: brand.cream,
    gap: 36,
    paddingVertical: 64,
    children: [
      SectionHeading({
        eyebrow: 'Tecnología',
        title: 'Con qué está construido este sitio',
        subtitle:
          'Sin frameworks pesados ni pasos de compilación: una landing rápida, instalable como app y lista para publicar en cualquier hosting estático.',
      }),
      Row({
        width: '100%',
        gap: 18,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        overflow: 'visible',
        children: DEV.stack.map((tech) =>
          Container({
            flex: '1 1 230px',
            minWidth: 220,
            gap: 12,
            paddingVertical: 22,
            paddingHorizontal: 20,
            borderRadius: 16,
            bgColor: brand.white,
            border: `1px solid ${brand.border}`,
            shadow: `0 6px 18px ${brand.shadow}`,
            alignItems: 'flex-start',
            overflow: 'visible',
            children: [
              IconBadge({ icon: tech.icon, size: 46, iconSize: 23, borderRadius: 13, bgColor: brand.goldSoft, color: brand.goldDark }),
              Text({ text: tech.name, size: 16, weight: '700', color: brand.navy }),
              Text({ text: tech.detail, size: 13, color: brand.inkSoft, lineHeight: 1.6 }),
            ],
          }),
        ),
      }),
      Column({
        width: '100%',
        gap: 18,
        overflow: 'visible',
        children: [
          Text({
            text: 'Arquitectura del proyecto',
            type: 'h3',
            size: 20,
            weight: '700',
            color: brand.navy,
            marginBottom: 0,
          }),
          Row({
            width: '100%',
            gap: 18,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            overflow: 'visible',
            children: DEV.architecture.map((item) =>
              Container({
                flex: '1 1 280px',
                minWidth: 260,
                gap: 10,
                paddingVertical: 18,
                paddingHorizontal: 18,
                borderRadius: 14,
                bgColor: brand.white,
                border: `1px solid ${brand.border}`,
                alignItems: 'flex-start',
                overflow: 'visible',
                children: [
                  Row({
                    width: 'auto',
                    gap: 10,
                    alignItems: 'center',
                    overflow: 'visible',
                    children: [
                      Icon({ name: item.icon, size: 20, color: brand.goldDark }),
                      Text({ text: item.title, size: 15, weight: '700', color: brand.navy }),
                    ],
                  }),
                  Text({ text: item.text, size: 13, color: brand.inkSoft, lineHeight: 1.6 }),
                ],
              }),
            ),
          }),
        ],
      }),
    ],
  });

export const DevReposSection = () =>
  Section({
    id: 'dev-repos',
    bgColor: brand.white,
    gap: 28,
    paddingVertical: 64,
    children: [
      SectionHeading({
        eyebrow: 'Repositorios',
        title: 'Código y referencias',
        subtitle: 'Estos son los repositorios relacionados con este proyecto.',
      }),
      Row({
        width: '100%',
        gap: 18,
        flexWrap: 'wrap',
        alignItems: 'stretch',
        overflow: 'visible',
        children: DEV.repos.map((repo) =>
          Container({
            flex: '1 1 320px',
            minWidth: 280,
            gap: 12,
            paddingVertical: 22,
            paddingHorizontal: 22,
            borderRadius: 16,
            bgColor: brand.cream,
            border: `1px solid ${brand.border}`,
            alignItems: 'flex-start',
            overflow: 'visible',
            children: [
              Row({
                width: '100%',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                overflow: 'visible',
                children: [
                  Row({
                    width: 'auto',
                    gap: 8,
                    alignItems: 'center',
                    overflow: 'visible',
                    children: [
                      Icon({ name: repo.external ? 'hub' : 'folder', size: 18, color: brand.navy }),
                      Text({ text: repo.name, size: 15.5, weight: '700', color: brand.navy }),
                    ],
                  }),
                  repo.stars !== null && repo.stars !== undefined
                    ? Chip({
                        label: `★ ${repo.stars}`,
                        variant: 'outlined',
                        color: brand.gold,
                        size: 11,
                      })
                    : null,
                ].filter(Boolean),
              }),
              Text({ text: repo.description, size: 13.5, color: brand.inkSoft, lineHeight: 1.6 }),
              Row({
                width: 'auto',
                gap: 10,
                alignItems: 'center',
                overflow: 'visible',
                children: [
                  Icon({ name: 'code', size: 15, color: brand.inkSoft }),
                  Text({ text: repo.language, size: 12.5, color: brand.inkSoft, weight: '600' }),
                ],
              }),
              Button({
                text: repo.external ? 'Ver repositorio' : 'Abrir repositorio',
                iconLeft: 'open_in_new',
                variant: 'outlined',
                color: brand.navy,
                borderRadius: 10,
                padding: [9, 14],
                onPress: () => window.open(repo.url, '_blank'),
              }),
            ],
          }),
        ),
      }),
      Container({
        width: '100%',
        gap: 14,
        paddingVertical: 22,
        paddingHorizontal: 26,
        borderRadius: 16,
        gradient: `linear-gradient(135deg, ${brand.navy} 0%, ${brand.navyDark} 100%)`,
        alignItems: 'center',
        overflow: 'visible',
        children: [
          Text({
            text: DEV.disclaimer,
            size: 14,
            color: 'rgba(255,255,255,0.85)',
            align: 'center',
            lineHeight: 1.7,
            maxWidth: 720,
          }),
        ],
      }),
    ],
  });

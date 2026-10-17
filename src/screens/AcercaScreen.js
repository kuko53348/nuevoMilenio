// screens/AcercaScreen.js
// Acerca de: el vendedor / gestor detrás de Propiedades Nuevo Milenio.
import { COMPANY, CONTACT } from '../database/company.js';
import { PageHero } from '../components/sections/PageHero.js';
import { ProfileSection } from '../components/sections/ProfileSection.js';
import { WhyUsSection } from '../components/sections/WhyUsSection.js';
import { TestimonialsSection } from '../components/sections/TestimonialsSection.js';
import { ContactSection } from '../components/sections/ContactSection.js';
import { ScreenShell } from '../components/ScreenShell.js';

export const AcercaScreen = () =>
  ScreenShell({
    children: [
      PageHero({
        eyebrow: 'Acerca de',
        title: CONTACT.person,
        subtitle: COMPANY.profile.headline,
        icon: 'person',
        chips: ['+25 años de experiencia', 'Gestor de trámites', 'Atención 1 a 1'],
        primaryCta: { text: 'Hablar con Moises' },
      }),
      ProfileSection(),
      WhyUsSection(),
      TestimonialsSection(),
      ContactSection({ withForm: false }),
    ],
  });

export default AcercaScreen;

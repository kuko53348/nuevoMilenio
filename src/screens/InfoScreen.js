// screens/InfoScreen.js
// Información de la empresa: historia, servicios completos, forma de trabajo
// y preguntas frecuentes.
import { COMPANY } from '../database/company.js';
import { PageHero } from '../components/sections/PageHero.js';
import { StorySection } from '../components/sections/StorySection.js';
import { ServicesSection } from '../components/sections/ServicesSection.js';
import { CoverageSection } from '../components/sections/CoverageSection.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { FaqSection } from '../components/sections/FaqSection.js';
import { ContactSection } from '../components/sections/ContactSection.js';
import { ScreenShell } from '../components/ScreenShell.js';

export const InfoScreen = () =>
  ScreenShell({
    children: [
      PageHero({
        eyebrow: 'Información de la empresa',
        title: COMPANY.name,
        subtitle: `${COMPANY.about.intro} ${COMPANY.claim}`,
        icon: 'info',
        chips: ['+25 años de experiencia', 'Ventas, arriendos y trámites', 'Atención directa'],
      }),
      StorySection(),
      ServicesSection({ withCta: false }),
      CoverageSection(),
      ProcessSection(),
      FaqSection({ title: 'Todo sobre nuestros servicios' }),
      ContactSection(),
    ],
  });

export default InfoScreen;

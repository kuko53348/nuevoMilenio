// screens/InicioScreen.js
// Página central de bienvenida: todo el marketing de la empresa.
import { HeroSection } from '../components/sections/HeroSection.js';
import { StatsSection } from '../components/sections/StatsSection.js';
import { ServicesSection } from '../components/sections/ServicesSection.js';
import { CatalogSection } from '../components/sections/CatalogSection.js';
import { ProcessSection } from '../components/sections/ProcessSection.js';
import { WhyUsSection } from '../components/sections/WhyUsSection.js';
import { TestimonialsSection } from '../components/sections/TestimonialsSection.js';
import { FaqSection } from '../components/sections/FaqSection.js';
import { ContactSection } from '../components/sections/ContactSection.js';
import { ScreenShell } from '../components/ScreenShell.js';

export const InicioScreen = () =>
  ScreenShell({
    children: [
      HeroSection(),
      StatsSection(),
      ServicesSection({ compact: true, withCta: false }),
      CatalogSection(),
      ProcessSection(),
      WhyUsSection(),
      TestimonialsSection(),
      FaqSection(),
      ContactSection(),
    ],
  });

export default InicioScreen;

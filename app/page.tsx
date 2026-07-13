import GsapInit         from '@/components/GsapInit';
import HeroSection      from '@/components/HeroSection';
import IdentSection     from '@/components/IdentSection';
import ProblemaSection  from '@/components/ProblemaSection';
import MecanismoSection from '@/components/MecanismoSection';
import FeaturesSection  from '@/components/FeaturesSection';
import ParaQuemSection  from '@/components/ParaQuemSection';
import ProvaSocialSection from '@/components/ProvaSocialSection';
import CtaFinalSection  from '@/components/CtaFinalSection';
import StickyBar        from '@/components/StickyBar';

export default function Home() {
  return (
    <div className="kora-page">
      <GsapInit />
      <HeroSection />
      <IdentSection />
      <ProblemaSection />
      <MecanismoSection />
      <FeaturesSection />
      <ParaQuemSection />
      <ProvaSocialSection />
      <CtaFinalSection />
      <StickyBar />
    </div>
  );
}

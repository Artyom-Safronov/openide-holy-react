import AboutHero from './sections/AboutHero';
import MissionSection from './sections/MissionSection';
import ValuesSection from './sections/ValuesSection';
import StatsSection from './sections/StatsSection';
import OpenSourceSection from './sections/OpenSourceSection';
import ContributeSection from './sections/ContributeSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <StatsSection />
      <OpenSourceSection />
      <ContributeSection />
    </>
  );
}

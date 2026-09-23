import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AboutSection from '../components/home/AboutSection';
import PartnerNetwork from '../components/home/PartnerNetwork';
import FranchisePlans from '../components/home/FranchisePlans';
import BenefitsGrid from '../components/home/BenefitsGrid';
import DashboardPreview from '../components/home/DashboardPreview';
import TrainingSection from '../components/home/TrainingSection';
import PincodeBooking from '../components/home/PincodeBooking';
import CommissionCycle from '../components/home/CommissionCycle';
import AgreementSection from '../components/home/AgreementSection';
import VisionSection from '../components/home/VisionSection';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-brand-white">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PartnerNetwork />
      <FranchisePlans />
      <BenefitsGrid />
      <DashboardPreview />
      <TrainingSection />
      <PincodeBooking />
      <CommissionCycle />
      <AgreementSection />
      <VisionSection />
      <FinalCTA />
    </div>
  );
}

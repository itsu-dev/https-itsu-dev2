import Landing from '../features/components/index/Landing';
import TopSection from '../features/components/index/TopSection';
import Articles from '../features/components/index/Articles';
import WorksAndAnnouncements from '../features/components/index/WorksAndAnnouncements';
import SkillsAndPastAffiliations from '../features/components/index/SkillsAndPastAffiliations';
import Friends from '../features/components/index/Friends';
import Footer from '../features/components/index/Footer';
import Haiku from '../features/components/index/Haiku';

export default function IndexPage() {
  return (
    <>
      <Landing />
      <TopSection />
      <Haiku />
      <Articles />
      <WorksAndAnnouncements />
      <SkillsAndPastAffiliations />
      <Friends />
      <Footer />
    </>
  );
}

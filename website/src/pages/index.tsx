import HeroEnhanced from '../components/HeroEnhanced';
import { TopBar } from '../components/TopBar';

export default function HomePage() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen pt-24">
        <HeroEnhanced />
      </main>
    </>
  );
}

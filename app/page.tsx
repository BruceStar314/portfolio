import Navigation from './components/Navigation';
import { ImageWithFallback } from './components/fallback/ImageWithFallback';
import FallingSnow from './components/FallingSnow.tsx';

export default function App() {
  return (
  <div className="min-h-screen bg-background text-foreground px-8 pb-12 relative">
      <FallingSnow />
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mt-12">
          {/*Who am I section*/}
          <div className="bg-card roounded-2xl p-8">
            <h2 className="text-3xl mb-4">Who am I?</h2>
            <p className="text-muted-foreground leading-relaxed">
              I’m Bruce, a full-stack developer driven by discipline and pressure-tested problem solving. 
              Years of MMA and Brazilian Jiu-Jitsu taught me how to stay composed, adapt fast, and keep pushing when things get hard. 
              I build clean, performant applications and take pride in doing the hard work when no one’s watching.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

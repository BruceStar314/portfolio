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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-8">
          {/*Who am I section*/}
          <div className="bg-card roounded-2xl p-8">
            <h2 className="text-3xl mb-4">Who am I?</h2>
            <p className="text-muted-foreground leading-relaxed">
              I’m Bruce, a full-stack developer driven by discipline and pressure-tested problem solving. 
              Years of MMA and Brazilian Jiu-Jitsu taught me how to stay composed, adapt fast, and keep pushing when things get hard. 
              I build clean, performant applications and take pride in doing the hard work when no one’s watching.
            </p>
        </div>

        {/*Night Sky Image*/}
      <div className="hidden lg:block">
      <ImageWithFallback
      src="https://images.unsplash.com/photo-1666583661973-2984bf59ef68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMG1pbGt5JTIwd2F5JTIwZm9yZXN0fGVufDF8fHx8MTc2ODE3MTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      alt="Night sky with milky way"
      className="w-80 h-96 object-cover rounded-2xl"
      />
      </div>
    </div>

    {/*Card Grid Section*/}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* User Detail Card */}
    <div className="bg-accent rounded-2xl p-8 flex items-center justify-center">
    <div className="text-center">
    <h3 className="text-2xl mb-2">Student &</h3>
    <h3 className="text-2xl">Full Stack Developer</h3>
    </div>
    </div>

    {/* Technologies Card */}
    <div className="bg-card rounded-2xl p-8">
    <h3 className="text-xl mb-6">Technologies I have worked with</h3>
    <div className="grid grid-cols-4 gap-4">
    {/* Temp holder */}
    {/* Row 1 */}
    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
    <span>JS</span>
    {/* Row 2 */}
    {/* Row 3 */}
    </div>
    </div>
    </div>

    {/*Users Name Card*/}
    <div className="bg-card rounded-2xl p-8 flex flex-col items-center justify-center">
    <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full">
    <span className="text-4xl">+</span>
    </div>
    <h3 className="text-2xl text-cyan-400">Bruce Reeves</h3>
    </div>

    
  );
}

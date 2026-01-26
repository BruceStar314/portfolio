import Navigation from './components/Navigation';
import { ImageWithFallback } from './components/fallback/ImageWithFallback';
import FallingSnow from './components/FallingSnow';
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground px-8 pb-12 relative">
      <FallingSnow />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-8">
            {/* Who am I Section */}
            <div className="bg-blue-900 rounded-2xl p-8">
              <h2 className="text-3xl mb-4">Who am I?</h2>
              {/*Need to put in real info*/}
              <p className="text-muted-foreground leading-relaxed">
                M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMG1pbGt5JTIwd2F5JTIwZm9yZXN0fGVufDF8fHx8MTc2ODE3MTg2Nnww
              </p>
            </div>

            {/* Night Sky Image */}
            <div className="hidden lg:block">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1666583661973-2984bf59ef68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMHNreSUyMG1pbGt5JTIwd2F5JTIwZm9yZXN0fGVufDF8fHx8MTc2ODE3MTg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Night sky with milky way"
                className="w-80 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Cards Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student & Full Stack Developer Card */}
            <div className="bg-blue-900 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl mb-2">Stundent &</h3>
                <h3 className="text-2xl">Full Stack Developer</h3>
              </div>
            </div>

            {/* Technologies Card */}
            <div className="bg-blue-900 rounded-2xl p-8">
              <h3 className="text-xl mb-6">Technologies I have worked with</h3>
              <div className="grid grid-cols-4 gap-4">
                {/* Row 1 */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">JS</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">TS</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">V</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">⚛</span>
                </div>
                
                {/* Row 2 */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">⚙</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">~</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">🦊</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">🧠</span>
                </div>
                
                {/* Row 3 */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">UI</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">//</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">ex</span>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-xs">🔥</span>
                </div>
              </div>
            </div>

            {/* Tim Gatzke Name Card */}
            <div className="bg-blue-900 rounded-2xl p-8 flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full mb-4 flex items-center justify-center">
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-2xl text-cyan-400">Bruce Reeves</h3>
            </div>

            {/* Quote Card */}
            <div className="bg-blue-900 rounded-2xl p-8 flex items-center justify-center md:col-span-2 lg:col-span-3">
              <h3 className="text-2xl text-center">
                {/*Need a real quote*/}
                "Random quote about programming that sounds deep but is actually just gibberish."
              </h3>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-8 bg-blue-900 rounded-2xl p-8">
            <h2 className="text-3xl mb-6">Education</h2>
            
            <div className="mb-6">
              <h3 className="text-xl mb-2">
                High School <span className="text-muted-foreground">(2018 - Today)</span>
              </h3>
              <p className="text-muted-foreground">
                MIT is the dream!
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl mb-2">
                CS50's Introduction to Computer Science <span className="text-muted-foreground">(2021)</span>
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">
                lorem <span className="text-muted-foreground">(2022)</span>
              </h3>
              <p className="text-muted-foreground">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

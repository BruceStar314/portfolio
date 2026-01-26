import contact from './contact';
import projects from './projects';
export default function Navigation() {
  return (
  <nav className="w-full flex justify-center py-8">
    <div className="flex gap-2 bg-muted px-4 py-3 rounded-lg bg-blue-900">
        <a href="#home" className="px-4 py-1 text-foreground hover:bg-card-foreground/10 rounded transition-colors">
          Home
        </a>
        <a href="#projects" className="px-4 py-1 text-foreground hover:bg-card-foreground/10 rounded transition-colors">
          Projects
        </a>
        <a href="#contact" className="px-4 py-1 text-foreground hover:bg-card-foreground/10 rounded transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}


import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center items-center">
        <nav className="flex gap-6">
          <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground font-medium">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground font-medium">
            About
          </NavLink>
          <NavLink to="/work" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground font-medium">
            Work
          </NavLink>
          <NavLink to="/life" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground font-medium">
            Life
          </NavLink>
          <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground" activeClassName="text-foreground font-medium">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import Logo from "../svg/Logo";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between mt-8 py-4">
      <div className="inline-flex items-center gap-x-2">
        <Logo />
        <h1 className="font-bold text-2xl">The Creator</h1>
      </div>
      <div className="text-lg font-medium flex items-center gap-x-8">
        <a href="#">Partners</a>
        <a href="#">How we work</a>
        <a href="#">Review</a>
        <a href="#">Charity</a>
      </div>
      <div>
        <button className="button-primary">Join The Creator</button>
      </div>
    </nav>
  );
};

export default Nav;

import Logo from "../svg/Logo";

const Nav = () => {
  return (
    <nav className="container">
      <div className="flex items-center justify-center md:justify-between py-4 mt-8 mx-5 gap-5 flex-wrap md:flex-nowrap">
        <div className="order-1 inline-flex items-center gap-x-2">
          <Logo />
          <h1 className="font-bold text-2xl">The Creator</h1>
        </div>
        <div className="order-3 md:order-2 text-lg font-medium flex flex-col sm:flex-row items-center gap-5 lg:gap-8 whitespace-nowrap">
          <a href="#">Partners</a>
          <a href="#">How we work</a>
          <a href="#">Review</a>
          <a href="#">Charity</a>
        </div>
        <div className="order-2 md:order-3">
          <button className="button-primary">Join The Creator</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

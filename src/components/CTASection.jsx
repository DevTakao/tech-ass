import TextCircle from "../svg/TextCircle";

function HeroText() {
  return (
    <h1>
      Spark your brand&apos;s
      <br />
      <div className="relative inline-block">
        <mark className="absolute -z-[1] w-full h-full top-0 left-0 bg-transparent scale-[120%]">
          <TextCircle />
        </mark>
        <span>imaginative</span>
      </div>{" "}
      flair
      <br />
      with us
    </h1>
  );
}

const CTASection = () => {
  return (
    <section className="py-[140px]">
      <div className="background-decorations"></div>
      <div className="inner-content max-w-[977px] mx-auto">
        <div className="hero-text text-[96px] 2xl:text-[112px] font-bold leading-[100%]">
          <HeroText />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

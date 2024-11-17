import TextCircle from "../svg/TextCircle";

function HeroText() {
  return (
    <div className="hero-text text-[96px] 2xl:text-[112px] font-bold leading-[100%]">
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
    </div>
  );
}

function HeroDescription() {
  return <div className="text-lg leading-[160%] font-normal max-w-[773px] mx-auto">Our team combines strategy, design, and technology to breathe life into your brand. Collaborate with us to leave a lasting impression on your audience.</div>;
}

function HeroCTAInput() {
  return (
    <div className="text-lg max-w-[567px] mx-auto">
      <label htmlFor="call-to-action" className="flex items-center justify-between bg-white p-2 rounded-full">
        <input
          type="text"
          name="call-to-action"
          id="call-to-action"
          className="placeholder:text-grey w-full h-full mx-6 focus:outline-none"
          placeholder="Enter your Email"
        />
        <button className="button-primary">Join</button>
      </label>
    </div>
  );
}

const CTASection = () => {
  return (
    <section className="py-[140px]">
      <div className="background-decorations"></div>
      <div className="inner-content max-w-[977px] mx-auto text-center space-y-8">
        <HeroText />
        <HeroDescription />
        <HeroCTAInput />
      </div>
    </section>
  );
};

export default CTASection;

import HeroLineLeft from "../svg/HeroLineLeft";
import HeroLineRight from "../svg/HeroLineRight";

import TextCircle from "../svg/TextCircle";
import LeftHand from "../assets/left-hand.png";
import LeftFB from "../assets/left-fb.png";
import LeftInsta from "../assets/left-insta.png";
import LeftBulb from "../assets/left-bulb.png";
import RightHand from "../assets/right-hand.png";
import RightFB from "../assets/right-fb.png";
import RightYT from "../assets/right-yt.png";
import RightBulb from "../assets/right-bulb.png";

function HeroText() {
  return (
    <div className="hero-text whitespace-nowrap text-hero 2xl:text-[112px] font-bold leading-[100%]">
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
      <label
        htmlFor="call-to-action"
        className="flex items-center justify-between bg-white p-2 rounded-full"
      >
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
    <section className="py-10 lg:py-[140px] relative w-full overflow-hidden">
      <div className="left-decorations hidden xl:block absolute -z-[1] h-full w-[282px] top-0 left-0">
        <div className="relative w-full h-full">
          <div className="max-w-full">
            <HeroLineLeft />
          </div>
          <img
            src={LeftHand}
            alt=""
            className="absolute top-0 left-0"
          />
          <img
            src={LeftFB}
            alt=""
            className="absolute bottom-[5%] left-[38.2%]"
          />
          <img
            src={LeftInsta}
            alt=""
            className="absolute top-[40%] left-[12%]"
          />
          <img
            src={LeftBulb}
            alt=""
            className="absolute top-[30%] left-[72.5%]"
          />
        </div>
      </div>
      <div className="inner-content max-w-[977px] mx-auto text-center space-y-8 px-5 lg:px-0">
        <HeroText />
        <HeroDescription />
        <HeroCTAInput />
      </div>
      <div className="right-decorations hidden xl:block absolute -z-[1] h-full w-[269px] top-0 right-0">
        <div className="relative w-full h-full">
          <div className="h-[62.7%] absolute top-[25.86%] right-0">
            <HeroLineRight />
          </div>
          <img
            src={RightHand}
            alt=""
            className="absolute -z-[1] -bottom-[4%] right-0"
          />
          <img
            src={RightFB}
            alt=""
            className="absolute top-[17%] right-[5%]"
          />
          <img
            src={RightYT}
            alt=""
            className="absolute top-[79%] left-[27%]"
          />
          <img
            src={RightBulb}
            alt=""
            className="absolute top-[25%] left-[5%]"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;

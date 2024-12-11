import People from '../images/cover/people.png';
const About = () => {
  return (
    <div id='about' className="mx-auto max-w-[1440px] lg:px-0 px-4 flex md:flex-row flex-col gap-4  justify-between items-center lg:py-24 py-12 w-full">
    <div className="md:w-[50%]">
      <img src={People} alt="" className="w-[598px]" />
    </div>
    <div className="md:w-[50%] md:mt-0 mt-4">
      <h3 className="text-[20px] leading-[50px] font-[700] text-[#D50E3C]">
        About Us
      </h3>
      <h3 className="lg:text-[40px] text-[20px] lg:leading-[50px] leading-[25px] font-[700] text-[#000000]">
        Simplifying Digital Onboarding, One Account at a Time.
      </h3>
      <p className="text-[18px] text-[#475569] mt-2 leading-[28.8px]">
        Acctworld was founded with a clear goal: to make accessing social
        media accounts easy, fast, and stress-free. We know the digital
        world is always moving, and the demand for a seamless social media
        start has never been higher. Our solution eliminates the hassle of
        signing up, verifying, and setting up new profiles, allowing you to
        jump right in—whether you're an individual or a business.
      </p>
    </div>
  </div>
  );
};

export default About;

import React from "react";

function About() {
  return (
    <div>
      <div className="lg:h-[25rem] h-[20rem] relative">
        <div className="h-full w-full bg-black/70 absolute"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://res.cloudinary.com/druohnmyv/image/upload/v1742397482/pexels-photo-7709201_v87yam.jpg`}
          alt="logo"
        />
        <p className="absolute top-[50%] text-white font-bold text-center block w-full">
          <span className="border-b-4 border-[#F59583] lg:text-[70px] text-[40px]">
            About Us
          </span>
        </p>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8 text-[20px]">
        <div className="mx-auto">
          <p className="mb-4">
            Hello there! My name is Patrick, and I’m the proud owner of The
            Webmaster Company. With a history in the digital world dating back
            to 1996, I’ve been at the forefront of website development and
            management for nearly three decades. My journey began in the United
            States Marine Corps, where I honed the skills and discipline that
            would later serve me well in the tech industry.
          </p>
          <p className="mb-4">
            At the core of my business is a philosophy that I learned as a young
            Marine: readiness and reliability are paramount. Data and instinct
            are the pillars that support our approach to web management and
            creating success for clients.
          </p>
          <p className="mb-4">
            One thing has remained constant throughout the years is the
            importance of a solid website foundation. We understand that the
            reliability of all the elements that depend on it is crucial to
            long-term success in the digital realm. Things like hosting, SEO,
            conversion rate optimization, product placement, and the tedious
            hundreds of other things matter to your online success.
          </p>
          <p className="mb-4">
            At The Webmaster Company, we specialize in helping businesses
            organize the complex aspects of running a website into a manageable
            and easy-to-understand overview. We seamlessly integrate with your
            team, minimizing overhead and maximizing efficiency.
          </p>
        </div>
      </div>
      <div className="bg-[#ec6a2a] text-white text-center py-10">
        <h3 className="text-[30px] font-bold">
          Tired of Chasing Down Your Web Team?
        </h3>
        <p className="mt-2 text-[20px]">
          You're looking for a reliable partner and team to be there when you
          need them. We're ready!
        </p>
        <div className="mt-4 text-[16px]">
          <a
            href="/contact"
            className="inline-block text-white bg-[#ec6a2a] px-6 p-3 rounded-full font-bold border-2 border-white mx-2"
          >
            CONTACT US
          </a>
          <a
            href="/contact"
            className="inline-block bg-white text-[#ec6a2a] px-6 p-3 rounded-full font-bold border-2 border-white mx-2"
          >
            SCHEDULE CONSULT
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

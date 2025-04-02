import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const pricing = () => {
  return (
    <div>
      <div className="lg:h-[25rem] h-[20rem] relative">
        <div className="h-full w-full bg-black/70 absolute"></div>

        <img
          className="w-full h-full object-cover"
          src={`https://res.cloudinary.com/druohnmyv/image/upload/v1742398422/0_GettyImages-1062463482jpgThe-model-may-also-have-advantages-for-current-owners_jcfufk.webp`}
          alt="logo"
        />
        <p className="absolute top-[50%] text-white font-bold text-center block w-full">
          <span className="border-b-4 border-[#F59583] lg:text-[70px] text-[40px]">
            Plans & Pricing
          </span>
        </p>
      </div>
      <div className="bg-[#ec6a2a] text-white text-center p-7 text-[20px] algin-center mx-auto">
        <p>
          We share baseline pricing so you can gauge if our service is for you.
          We’re not the cheapest, but we aim the best.{" "}
          <a href="#" className="underline font-bold">
            Get a quote
          </a>{" "}
          for more accurate pricing.
        </p>
      </div>
      <div className="container mx-auto my-10 px-6">
        <section className="grid md:grid-cols-2 gap-10 justify-self self-center max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-[35px] font-bold">
              Support Plans From $500 <span className="italic">/mo</span>
            </h2>
            <p className="mt-2 font-semibold text-[#ec6a2a] text-[25px]">
              Who This Plan is A Good Fit For:
            </p>
            <p className="mt-2 text-gray-700 text-[18px]">
              You understand your website and its needs enough to construct
              single tasks. All work comes directly from you. You are okay with
              having one open task at a time. You have very little need for
              consulting but are open to ideas and suggestions from our team. If
              you don’t have a team or idea of what needs to be done, we can
              help formulate this for you during our initial meeting.{" "}
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <div className="max-w-4xl mx-auto mt-9">
                <div className="space-y-9">
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742327643/R.767b8815b8d061684f5d37dfbc02ea9d_zomgag.png"
                      alt="eCommerce Support"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        Intro eCommerce Support
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        We support both WooCommerce and Shopify. We can help
                        manage and implement any plugin or app.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742327861/illustration-graphic-cartoon-character-of-small-business-free-vector_tia44v.jpg"
                      alt="Small Business"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        Great for small businesses
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        Includes up to 8 incidents a month. An incident is a
                        task or issue that will take over 15 minutes to
                        complete.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742328010/smiling-mans-clapping-hands-thanking-or-showing-appreciation-at-event-happy-people-applaud-celebrate-good-deal-acknowledgement-and-gratitude-flat-illustration-isolated-on-white-background-vector_tcauuk.jpg"
                      alt="Responsive Service"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        Responsive and thorough service
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        We don't leave you guessing. The thing clients love most
                        about us is our responsiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="bg-[#ec6a2a] text-white p-6 px-9 flex lg:flex-col justify-center w-full">
            <p className="text-[26px] font-bold text-black">Starting at</p>
            <span className="text-[50px]">$500/mo</span>

            <ul className="list-disc ml-2 mt-2 flex flex-col gap-2 py-6 text-[18px]">
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Single task-driven
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Up to 10 incidents/mo{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Site updates included{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Offsite backups included{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                HackFix™ Guaranteed{" "}
              </li>
            </ul>
            <button className="mt-4 bg-white text-[#ec6a2a] p-3 rounded-full w-full">
              CHAT WITH US
            </button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-10 justify-self self-center max-w-[1200px] mx-auto lg:my-20">
          <div className="bg-[#ec6a2a] text-white p-6 px-9 flex lg:flex-col justify-center">
            <p className="text-[26px] font-bold text-black">Starting at</p>
            <span className="text-[50px]">$1500/mo</span>

            <ul className="list-disc ml-2 mt-2 flex flex-col gap-2 py-6 text-[18px]">
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                AI work in level above{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Up to 10 incidents/mo
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Tech Strategy Support
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                SEO Audit
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Monthly Meeting
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Direct Text Support
              </li>
            </ul>
            <button className="mt-4 bg-white text-[#ec6a2a] p-3 rounded-full w-full">
              CHAT WITH US
            </button>
          </div>
          <div>
            <h2 className="text-[35px] font-bold">
              Support Plans From $500 <span className="italic">/mo</span>
            </h2>
            <p className="mt-2 font-semibold text-[#ec6a2a] text-[25px]">
              Who This Plan is A Good Fit For:
            </p>
            <p className="mt-2 text-gray-700 text-[18px]">
              You understand your site, and you want us to help you schedule
              future work and mind-map some of the projects. You also need us to
              attend meetings, consult you about SEO/SEM, and even help create
              actionable audits. You might need us to work on CRM, automation
              within, or other more email marketing support.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <div className="max-w-4xl mx-auto mt-9">
                <div className="space-y-9">
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742387993/OIP_jeorpz.jpg"
                      alt="eCommerce Support"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        Deeper Consulting
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        We respond to mission-critical things that we agree on.
                        You need to connect with us once a month or more to stay
                        updated.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742388064/OIP_g0a1bn.jpg"
                      alt="Small Business"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        Workload Automation & Scheduling
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        We can automate and schedule some tasks. For example, if
                        you want a monthly audit of forms - we'lll get that
                        scheduled and included!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742388249/illustration-vector-graphic-cartoon-character-seo_516790-70_jh1xe1.jpg"
                      alt="Responsive Service"
                      className="w-20 h-20"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        SEO Audits & SEM Consulting
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        We'll run a monthly ongoing audit and share custom
                        reports with you. We can also action the results based
                        on your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-10 justify-self self-center max-w-[1200px] mx-auto">
          <div>
            <h2 className="text-[35px] font-bold">
              Expanded Marketing & eCommerce
            </h2>
            <p className="mt-2 font-semibold text-[#ec6a2a] text-[25px]">
              Who This Plan is A Good Fit For:
            </p>
            <p className="mt-2 text-gray-700 text-[18px]">
              In addition to all the perks mentioned in the plans prior, you
              have a need for more marketing implementation. You need help
              ensuring products are seen in search engines and social channels.
              Your want your conversion rates checked and tweaking for optimal
              performance. Help with product automations or funnels.
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <div className="max-w-4xl mx-auto mt-9">
                <div className="space-y-9">
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742388931/pngtree-online-shop-ecommerce-testimoni-png-image_14621796_hiydhb.png"
                      alt="eCommerce Support"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        In Depth eCommerce Consulting
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        Deeper site dives and creative planning to help you and
                        your business grow. Channel discovery and product
                        pushing to appropriate channels. Checkout conversion
                        optimization.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742388674/ab-testing-application-on-display-smartphone-screen-bug-fixing-3d-icon-cartoon-minimal-style-vector_yywrxs.jpg"
                      alt="Small Business"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        A/B Optimization and Testing
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        Budget-friendly A/B testing for medium-sized but nimble
                        companies.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-7">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1742388807/seo-sem_bpuwpm.png"
                      alt="Responsive Service"
                      className="w-20 h-20 object-cover"
                    />
                    <div>
                      <h3 className="text-[25px] font-bold text-black">
                        SEO / SEM / Competitor Research
                      </h3>
                      <p className="text-gray-700 text-[18px]">
                        Help in optimizing your message. We can help see what
                        your competition is up to and how you can better
                        position your marketing efforts to win more customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="bg-[#ec6a2a] text-white p-6 px-9 flex lg:flex-col justify-center w-full">
            <p className="text-[26px] font-bold text-black">Starting at</p>
            <span className="text-[50px]">$2500/mo</span>

            <ul className="list-disc ml-2 mt-2 flex flex-col gap-2 py-6 text-[18px]">
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                A/B Testing and Setup
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Up to 10 incidents/mo{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Site updates included{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                Offsite backups included{" "}
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <CheckCircle size={24} />
                HackFix™ Guaranteed{" "}
              </li>
            </ul>
            <button className="mt-4 bg-white text-[#ec6a2a] p-3 rounded-full w-full">
              LET’S TALK
            </button>
          </div>
        </section>
      </div>

      <div className=" mx-auto py-12 container">
        <h2 className="text-3xl font-bold text-center mb-8">
          Getting Started Is Simple & Fast
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center text-[18px]">
          <div>
            <img
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1742390198/checklist-concept-illustration_86047-109_cvr64l.jpg"
              alt="Connect & Learn More"
              width={300}
              height={300}
              className="mx-auto"
            />
            <h3 className="font-bold mt-4">We Connect & Learn More</h3>
            <p className="text-gray-600">
              In our initial free consultation we’ll get to know you and your
              specific needs.
            </p>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1742390463/social-media-signup-illustration-download-in-svg-png-gif-file-formats--user-registration-interface-account-sign-up-login-or-pack-illustrations-3723266_grcd9e.png"
              alt="Sign Up & Get Access"
              width={340}
              height={340}
              className="mx-auto"
            />
            <h3 className="font-bold mt-4">You Sign Up & Get Us Access</h3>
            <p className="text-gray-600">
              At this point we’ve crafted a plan and we’ll have you sign up in
              our client portal. It’s easy 😊
            </p>
          </div>

          <div>
            <img
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1742390647/business-people-elegant-in-the-workplace-vector_cakoqr.jpg"
              alt="Off to the Races"
              width={370}
              height={370}
              className="mx-auto"
            />
            <h3 className="font-bold mt-4">Off To the Races!</h3>
            <p className="text-gray-600">
              We start to get tasks from you, or we work a prior formulated plan
              to get your work started ASAP.
            </p>
          </div>
        </div>

        <div className="bg-[#ec6a2a] text-white text-center p-6 mt-12 rounded-lg">
          <h3 className="text-[27px] font-bold">
            Tired of Chasing Down Your Web Team?
          </h3>
          <p className="mt-2 text-gray-300">
            You’re looking for a reliable partner and team to be there when you
            need them. We’re ready!
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a
              href="/contact"
              className="border border-white p-4 rounded-full hover:bg-white hover:text-[#ec6a2a]"
            >
              CONTACT US
            </a>
            <a
              href="/contact"
              className="bg-white text-[#ec6a2a] p-4 rounded-full hover:bg-opacity-80"
            >
              SCHEDULE CONSULT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pricing;

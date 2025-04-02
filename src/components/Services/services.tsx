import { CheckCircle, CheckIcon } from "lucide-react";
import React from "react";

function services() {
  const services = [
    "CMS (Joomla, Shopify, WordPress, Magento etc...)",
    "Photoshop & Illustrator editing",
    "eCommerce setup and management",
    "Checkout optimization / conversion optimization",
    "Payment & Shipping setup for eCommerce",
    "SSH / Cron automation",
    "Cross browser / mobile compatibility",
    "SSL for Ecommerce, custom needs",
    "Mobile website compatibility & customizations",
    "CSS, XHTML, HTML, Javascript",
    "Sandbox testing, Dev Site Deployment",
    "HackFlux™ Service included in all plans",
    "Payment Systems integration with Forms",
    "FTP / SFTP / SSH",
    "Unix Server Administration (any flavor)",
    "Firewall setup and management",
    "CRM Setup & Automation support",
    "Adwords Management & Shopping Integration",
    "Google Console Management / Support",
    "Newsletter Design & management",
    "Ghost work (we fix YOUR client sites *)",
    "Complete Website Design (* quoted separately )",
    "Website Speed Testing & Optimization",
    "Website backup planning & integration",
    "Digital Ocean, Unode support (and limited AWS )",
    "WordPress & Joomla module/plugin modifications",
    "and much, much more....",
  ];
  return (
    <div className="relative">
      {" "}
      <div className="absolute h-[33.4rem] bg-[rgba(0,0,0,.8)] w-full top-0 right-0 z-10" />
      <section className=" mt-20 bg-[url('https://res.cloudinary.com/druohnmyv/image/upload/v1742398173/if-you-recognize-these-signs-youre-finally-finding-your-voice-and-standing-up-for-yourself-1-1024x538_rkbfst.png')] py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-20">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              We Help Tame
              <br />
              <span className="text-white mt-3">Your Website</span>
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-lg text-white mb-4">
                The core of our service is providing you with a webmaster to
                help manage your existing websites. This ranges from ensuring
                your site is always up to date to adding new features you may
                need to passing technical audits and other web projects.
              </p>

              <div className="space-y-6">
                <button className="bg-[#ec6a2a] hover:bg-[#ec6a2a]/90 text-white font-semibold py-3 px-6 rounded-full transition duration-200">
                  LEARN MORE
                </button>

                <div className="flex items-center space-x-3 border rounded-full w-[18rem] p-4 shadow-md">
                  <svg
                    className="h-6 w-6 text-[#ec6a2a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg font-medium text-white">
                    WEBMASTER SERVICE
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-[#ec6a2a]"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "Their level of responsiveness and expertise is at a level I
                have never before encountered."
              </blockquote>
              <div className="font-medium text-gray-900">
                Allison P
                <span className="block text-sm text-gray-500 mt-1 not-italic">
                  COMMUNICATIONS DIRECTOR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Webmaster Support
            </h1>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Whether you need assistance with your existing website, security
              enhancements, regular blog posting, custom landing page creation,
              plugin setup, or comprehensive technical SEO audits, The Webmaster
              Company is here to help. Our foundational service block, The
              Webmaster Company service, is tailored to meet the unique needs of
              each client, and every partnership begins with a discovery call.
            </p>
            <p>
              During this initial consultation, which is completely free, we'll
              talk about your specific requirements and develop a personalized
              plan that aligns with your goals and budget.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              If it's related to your website we can help:
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-[#ec6a2a] mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-gray-200 pt-12">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                <strong>FREE DISCOVERY CALL:</strong> LETS SEE HOW WE CAN HELP?
              </p>
              <button className="bg-[#ec6a2a] hover:bg-[#ec6a2a]/90 text-white font-semibold py-3 px-8 rounded-full transition duration-200 text-lg">
                Schedule Your Free Call
              </button>
              <p className="text-sm text-gray-500 mt-4">
                *Ghost work requires allowing Mobile Phone login
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hyper-Responsive Web Service Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Having processes from our team are starting to do a different
              "life hard" for website owners. We don't sit on your website or
              manage and respond online when to discuss all requests.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className=" bg-[url('https://res.cloudinary.com/druohnmyv/image/upload/v1742317952/3d-network-connections-with-plexus-design-blue-background-wallpaper-generative-ai-weber_31965-189498_pfwtpd.jpg')] py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-no-repeat bg-center">
          <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hyper-Responsive Web Service Team
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Having processes from our team are starting to do a different
                "life hard" for website owners. We don't sit on your website or
                manage and respond online when to discuss all requests.
              </p>
            </div>
          </section>
          <div className="container mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-end mb-6">
                <span className="text-5xl font-bold text-[#ec6a2a] mr-2">
                  28+
                </span>
                <span className="text-xl font-medium text-gray-700">
                  Year of Experience
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Home Today
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Create, attend healthy</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Write, visit</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>
                    Contact me too. Visit every site, and they'll find out what
                    the customer needs to say.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-end mb-6">
                <span className="text-5xl font-bold text-[#ec6a2a] mr-2">
                  3.1k
                </span>
                <span className="text-xl font-medium text-gray-700">
                  Firm & Scholar
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Paths
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>PNG Center, internet URL Company</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>A: 0, 0, 5, 6, 7</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>
                    Writing with Data Paths by partner in the team's great
                    enterprise.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-10 justify-self self-center container mx-auto my-9">
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
        {/* Web Consulting Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Web Consulting
            </h2>
            <div className="max-w-3xl mx-auto text-xl text-gray-600">
              <p>
                As The Webmaster Company we are deeply committed to providing
                input consulting that empowers you to take decision advice on
                your website, brands, and SEO clients. Our dedicated team will
                always value your subscription, advising how your specific needs
                and goals.
              </p>
              <p className="mt-4">
                We'll work closely with your many steps of the way, providing
                the guidance and support needed to ensure your online success.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-5">
              Data informed, results driven.
            </h3>
            <div className=" text-lg text-gray-600 mb-10">
              <p>
                We monitor what type of consulting you need for your web
                business, we bring consulting with credentials such as/of
                Internet Advisions. We take the firm to touch your day articles
                and feedback reports the way they click.
              </p>
              <p className="mt-4">
                The most informed you know is the more clearly you understand
                how to identify and of your web presence it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {/* <CogIcon className="h-6 w-6 text-[#ec6a2a]" /> */}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Technical Audit Consulting
                  </h4>
                </div>
                <p className="text-gray-600">
                  From technical SEO tools according to site host practices. We
                  can help implement or improve your SEO's for any web
                  component.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    {/* <ChartBarIcon className="h-6 w-6 text-green-600" /> */}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Conversion and Sales Improvement
                  </h4>
                </div>
                <p className="text-gray-600">
                  The results of doing so, your website layout can have produced
                  impacts on your connections. We help improve your website
                  experience from start to finish.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    {/* <LightningBoltIcon className="h-6 w-6 text-purple-600" /> */}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    Automation Setup & Improvement
                  </h4>
                </div>
                <p className="text-gray-600">
                  We can review tasks that might be better suited for automation
                  or help improve your existing workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Information & Finance Section */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Information & Finance
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Business Strategy",
                "Tech Stack Consulting",
                "Advanced Analytics",
                "Marketing Optimization",
                "Revenue Opportunities",
                "And much more coverage...",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 px-4 py-3 rounded-lg"
                >
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* HackFix Guarantee */}
          <div className="bg-[#ec6a2a] p-8 rounded-xl mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              HackFix™ Guarantee
            </h3>
            <p className="text-gray-200 mb-6">
              When our Facebook LinkedIn™ services, we will fix AWS code or
              Windows Server™ licensed being websites that work over a week.
              This includes filing the source of the problem to prevent future
              attacks of the same nature.
            </p>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-4">
                <CheckIcon className="h-6 w-6 text-[#ec6a2a]" />
              </div>
              <span className="font-medium">HTS PETER RECORD</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Tired of Chasing Down Your Web Team?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              You're looking for a reliable partner and users to see them show
              you more (www.Web.com)!
            </p>
            <a
              href="/contact"
              className="bg-[#ec6a2a] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 text-lg"
            >
              COMPACTED | SCIENCE CONSULT
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default services;

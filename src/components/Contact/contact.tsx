import React from "react";

function contact() {
  return (
    <div className="relative">
      <>
        <div className=" z-20 min-h-screen bg-[url('https://res.cloudinary.com/druohnmyv/image/upload/v1742317952/3d-network-connections-with-plexus-design-blue-background-wallpaper-generative-ai-weber_31965-189498_pfwtpd.jpg')] bg-cover bg-no-repeat py-12 px-4 sm:px-6 lg:px-8 lg:mt-20 ">
          <div className="max-w-7xl mx-auto ">
            <h1 className="text-4xl font-extrabold text-center text-white mb-12">
              Contact Us Or Schedule a Call
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you're looking for web service or simply have some
                  feedback, we'd love to hear from you!
                </p>

                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://mywebsite.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="help"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      How Can We Help Today?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="help"
                      name="help"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="" disabled selected>
                        Select an option
                      </option>
                      <option value="webmaster">
                        I'd Like To Hire A Webmaster
                      </option>
                      <option value="design">I Need Web Design</option>
                      <option value="development">
                        I Need Development Help
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you today? Share a little about your needs here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className=" bg-[#ec6a2a] hover:bg-[#ec6a2a]/90 text-white font-bold py-3 px-4 rounded-full transition duration-200 uppercase"
                  >
                    SUBMIT NOW
                  </button>
                </form>
              </div>

              {/* Schedule a Call */}
              <div className="bg-gray-700 text-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Schedule A Call</h2>
                <p className="text-gray-300 mb-6">
                  You'll be in good hands and good company.
                </p>

                <div className="flex flex-wrap gap-4 mb-8 items-center">
                  {/* Replace these with actual logo components or images */}
                  <span className="text-gray-300 font-medium">saveday</span>
                  <span className="text-gray-300 font-medium">netconcepts</span>
                  <span className="text-gray-300 font-medium">FORESIGHT</span>
                  <span className="text-gray-300 font-medium">LIVING</span>
                  <span className="text-gray-300 font-medium">WEAKER</span>
                </div>

                <p className="text-gray-300 mb-6">
                  Want to talk to a human about our services to see if we're a
                  good fit?
                </p>

                <button className="w-full bg-[#ec6a2a] hover:bg-[#ec6a2a]/90 text-white font-bold py-3 px-4 rounded-full transition duration-200">
                  FREE CONSULT
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default contact;

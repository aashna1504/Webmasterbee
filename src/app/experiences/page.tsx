export default function WebsiteExperiences() {
  return (
    <section className="w-full min-h-[600px] bg-gradient-to-br from-blue-500 to-blue-600 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Deliver excellent website experiences
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              An effective website is a like having a top sales person that
              never sleeps, and knows exactly what to say to put your business
              in the best light.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              With a Clix website, you'll be able to lay out the key information
              visitors are looking for in the most intuitive way, allowing you
              to gain more customers in less time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

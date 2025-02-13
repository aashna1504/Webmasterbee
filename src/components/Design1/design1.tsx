"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Clock, Sparkles, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Network, LayoutTemplate, Code, Rocket } from "lucide-react";
import { Smile, Share2, BarChart2, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of services - our goal is to deliver real business outcomes for your company. So while we start with a website, we also offer conversion optimization, website maintenance, paid ads, reputation management, and more. Book a call and we'll scope out your project and provide a quote.",
  },
  {
    question: "Why develop with Webflow?",
    answer:
      "Webflow provides a powerful, visual development platform that allows us to create custom, responsive websites quickly and efficiently. It combines the flexibility of custom code with the ease of a visual interface, resulting in faster development times and easier maintenance for our clients.",
  },
  {
    question: "What happens after the project finishes?",
    answer:
      "After launch, we provide comprehensive support and maintenance services. We'll train your team on how to make basic updates, and we're always available for ongoing development needs, performance optimization, and strategic improvements to keep your site performing at its best.",
  },
  {
    question: "Will the site load fast?",
    answer:
      "Yes! We optimize all our websites for speed using modern best practices. This includes image optimization, efficient code structure, and leveraging Webflow's global CDN. We regularly achieve excellent performance scores on Google's PageSpeed Insights.",
  },
  {
    question: "How long does it take to make a website?",
    answer:
      "Typical projects take 4-8 weeks from kickoff to launch, depending on the scope and complexity. We work in focused sprints and maintain clear communication throughout the process to ensure we meet your timeline requirements.",
  },
];

const projects = [
  {
    id: 1,
    title: "Mortgage Rate Calculator",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RSwvLvk65pa2z9m6RAteoOWZwSy4ow.png",
    bgColor: "bg-[#e6f7f5]",
  },
  {
    id: 2,
    title: "Accounting Services",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RSwvLvk65pa2z9m6RAteoOWZwSy4ow.png",
    bgColor: "bg-[#faf9f6]",
  },
  {
    id: 3,
    title: "AdConnect 2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RSwvLvk65pa2z9m6RAteoOWZwSy4ow.png",
    bgColor: "bg-[#e6e9ff]",
  },
  {
    id: 4,
    title: "Custom Project",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RSwvLvk65pa2z9m6RAteoOWZwSy4ow.png",
    bgColor: "bg-[#e6f7f5]",
  },
];
const features2 = [
  "Webflow Development",
  "High Quality, Custom Designs",
  "Dedicated Slack Channel",
  "Analytics Installation",
  "Fast, Secure, Easy to Update",
];
const processSteps = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We get on a call to establish your website goals. Are you looking to drive more signups, customers, or something else? We'll determine where users are in terms of their level interaction, awareness, and engagement with your brand.",
    Icon: Network,
  },
  {
    number: "2",
    title: "Ideation",
    description:
      "We'll create design ideas and write the copy for your page. The pages we build tell a clear story about how your offering will benefit them. This helps build groups of customers that are more engaged from the start.",
    Icon: LayoutTemplate,
  },
  {
    number: "3",
    title: "Development",
    description:
      "We'll take the approved design and develop it into a fully responsive site with clean, semantic code using Webflow.",
    Icon: Code,
  },
  {
    number: "4",
    title: "Go-Live",
    description:
      "Once your new page is ready, we'll hand over ownership to your team and provide a simple training session to ensure you can maximize its potential.",
    Icon: Rocket,
  },
];
export default function HomePage() {
  const benefits = [
    {
      icon: Eye,
      title: "Deliver a great first impression",
      description:
        "Site visitors that have a great first impression go on to be more engaged customers, who buy more, and stick around longer.",
    },
    {
      icon: Sparkles,
      title: "Amplify your marketing efforts",
      description:
        "Every % increase to your conversion rate will stoke gas on the fire of any marketing campaign or traffic spike.",
    },
    {
      icon: Clock,
      title: "Cut the time to understand your value",
      description:
        "If users 'get' your value proposition from just a short site visit, you'll see fewer objections during your sales process and higher close rates.",
    },
    {
      icon: Users,
      title: "Get more engaged, higher quality leads",
      description:
        "A page that effectively pitches provides more of the best leads - those that are engaged, interested, and ready to buy.",
    },
  ];
  const features = [
    {
      icon: Smile,
      title: "Eye-catching, premium designs",
      description:
        "We create custom, premium-quality website designs are tailored to your brand and put your best foot forward.",
    },
    {
      icon: Share2,
      title: "Personalized user experiences",
      description:
        "Each page we build takes careful consideration of the path visitors went through to get there in order to deliver a great experience.",
    },
    {
      icon: BarChart2,
      title: "Conversion focused website layouts",
      description:
        "We won't just design a website that looks good, we'll set it up to perform through implementing high impact conversion techniques.",
    },
    {
      icon: Calendar,
      title: "From kickoff to go-live in a few weeks",
      description:
        "We're fast moving and work in sprints, so you can launch and iterate on several variations before competitors even push publish.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const slideWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentSlide - 1)
        : Math.min(projects.length - 1, currentSlide + 1);
    scrollToSlide(newIndex);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Webmaster Bee
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/packages"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Packages
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="/our-work"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Our Work
              </Link>
              <Button className="bg-black hover:bg-black/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-bold tracking-tight">
              We build top-notch
              <br /> sites that
              <br />
              <span className="relative z-50">
                <span className=" inline-block">
                  unlock growth.
                  <span className="absolute left-0 right-0 bottom-1 h-3 bg-yellow-300 rounded-xl z-10" />
                </span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Well work with your team to build a custom, high-performing
              website that helps you gain customers and keep them for longer.
            </p>
            <Button
              className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg"
              size="lg"
            >
              Get Started
            </Button>
          </div>

          {/* Right Column - Image Grid */}
          <div className="relative lg:h-[600px] h-[200px] w-full">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mIWklaBFEI2qYEjyFD5mW0ZdfK5cmO.png"
              alt="Collection of website examples including accounting, sales, and mortgage platforms"
              className="object-contain"
            />
          </div>
        </div>
      </main>
      <section className="w-full min-h-[300px] bg-blue-400 py-24 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Heading */}
            <div>
              <h2 className="text-4xl font-bold text-white leading-tight">
                Deliver excellent website experiences
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <p className="text-[18px] text-white/90 leading-relaxed">
                An effective website is a like having a top sales person that
                never sleeps, and knows exactly what to say to put your business
                in the best light.
              </p>
              <p className="text-[18px] text-white/80 leading-relaxed">
                With a Clix website, you&apos;ll be able to lay out the key
                information visitors are looking for in the most intuitive way,
                allowing you to gain more customers in less time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gray-50 py-24 px-4">
        {/* Decorative Star */}
        <div className="absolute top-12 right-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="currentColor"
                d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
              />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-10 relative inline-block">
            <span className="relative z-50"> Why a great website matters</span>
            <span className="absolute left-0 right-0 bottom-1 h-3 bg-yellow-300 rounded-xl z-10" />
          </h2>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="text-[18px] bg-black hover:bg-black/90 text-white px-8 py-6"
            >
              Start now
            </Button>
          </div>
        </div>
      </section>
      <section className="pb-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">Recent work</h2>
            <p className="text-gray-600 text-[18px]">
              Samples of past projects
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={cn(
                    "min-w-full md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] p-4 snap-start",
                    project.bgColor
                  )}
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll("prev")}
                disabled={currentSlide === 0}
                className="bg-black text-white border border-black rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleScroll("next")}
                disabled={currentSlide === projects.length - 1}
                className="bg-black text-white border border-black rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentSlide === index ? "bg-black w-4" : "bg-gray-300"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
      <section className="bg-black text-white py-24 px-4">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[36px] font-bold mb-1"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-[18px]"
            >
              A look into how our team will take your new website from an idea
              to launch
            </motion.p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5 }}
                className="bg-white/20 rounded-lg p-2 md:p-5"
              >
                <div className="grid md:grid-cols-[120px,1fr] gap-6 items-center">
                  <div className="bg-white/10 rounded-lg p-6 aspect-square max-w-[120px]">
                    <step.Icon className="w-full h-full text-white/80" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl md:text-2xl font-semibold text-white ">
                        {step.number}.
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="realative py-24 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Decorative Star */}
          <motion.div
            className="absolute top-12 right-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 24 24" className="w-12 h-12">
              <path
                fill="currentColor"
                d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"
              />
            </svg>
          </motion.div>

          {/* Heading */}
          <div className="">
            <h2 className="text-4xl font-bold mb-10 relative inline-block">
              <span className="relative z-50"> What sets us apart</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-yellow-300 rounded-xl z-10" />
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-gray-900" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-8 py-6 text-[18px]"
            >
              Start now
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="py-10 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl font-bold">Our Solution</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Perfect for converting more site visitors into signups, leads, and
              customers for your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-500 text-white overflow-hidden">
              <CardHeader className="space-y-2 pb-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-blue-100 font-medium"
                >
                  Project Based Pricing
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Custom Website Build
                </motion.h3>
              </CardHeader>

              <CardContent className="pb-8">
                <div className="space-y-1">
                  <p className="text-blue-100 text-left mb-4">Includes:</p>
                  {features2.map((features2) => (
                    <div
                      key={features2}
                      // initial={{ opacity: 0, x: -20 }}
                      // whileInView={{ opacity: 1, x: 0 }}
                      // transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3 text-left"
                    >
                      <div className="rounded-full bg-blue-400/70 p-1">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-blue-50">{features2}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 py-6 text-lg font-medium"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">FAQs</h2>
              <p className="text-gray-600">
                You might have some questions in mind - let&apos;s answer them!
              </p>
              <Button variant="outline" size="lg" className="border-2">
                Contact
              </Button>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6 bg-white"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
      <footer>
        {/* CTA Section */}
        <section className="bg-black text-white py-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Boost conversion rates higher than they&apos;ve ever been
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Drive more sales with an eye-catching website that does the leg
              work of laying out your offering for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 text-[18px] py-6"
              >
                Start now
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer Content */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-8">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold">
                <span className="relative">
                  Webmaster Bee
                  <span className="absolute -right-1 -top-1 h-2 w-2 bg-yellow-400 rounded-full" />
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex flex-wrap justify-center gap-8 text-sm">
                <Link
                  href="/why-us"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Why us?
                </Link>
                <Link
                  href="/our-work"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Our work
                </Link>
                <Link
                  href="/how-it-works"
                  className="text-gray-600 hover:text-gray-900"
                >
                  How it works
                </Link>
                <Link
                  href="/get-started"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Get Started
                </Link>
              </nav>

              {/* Legal */}
              <div className="w-full border-t border-gray-200 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                  <div>© 2024 Webmaster Bee</div>
                  <div className="flex gap-6">
                    <Link href="/privacy" className="hover:text-gray-900">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-gray-900">
                      Terms of Service
                    </Link>
                    <button className="hover:text-gray-900">
                      Cookies Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

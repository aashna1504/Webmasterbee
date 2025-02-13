import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Check, CheckSquare, Play, Star } from "lucide-react";
import { BarChart3, Cog, Monitor, Gauge, Users, Shield } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";

function Design() {
  const services = [
    {
      icon: BarChart3,
      title: "Google Analytics Setup",
      description:
        "Whether you need a simple GA4 setup or a complex Google Tag Manager deployment, we can help manage and streamline your measurement efforts.",
    },
    {
      icon: Cog,
      title: "WordPress Automation / CRM",
      description:
        "Need to tie forms to your CRM? Need your mailing management to fix all abandoned cart emails? We'll help you get things in place to help your business run more smoothly.",
    },
    {
      icon: Monitor,
      title: "WordPress Website Updates",
      description:
        "We insist on keeping your site up to date so you'll never fall victim to \"new\" plugins or themes causing issues for your site. We're always patching & updating to keep your site secure.",
    },
    {
      icon: Gauge,
      title: "PageSpeed Site Optimization",
      description:
        "We understand that sometimes simple changes to navigation or layout can have big impacts on your marketing or e-commerce. We can help optimize these flows.",
    },
    {
      icon: Users,
      title: "Deep Web Consulting",
      description:
        "How does my SEO tie into my landing page efforts? Why should I be considering certain pages? What is cornerstone content and why do I need it? We're here for big time consulting, and it's what we do best.",
    },
    {
      icon: Shield,
      title: "Security Setup WAF / CDN / DNS",
      description:
        "Web application firewalls are a must these days if you're in certain industries. Most hosting companies today couple with a WAF in some way. We can help manage, setup and deploy your setup no matter how complex.",
    },
  ];
  const securityFeatures = [
    "We update all your plugins weekly ( minimum )",
    "Patch any vital security issues as they appear",
    "Ensure firewalls are updated and protecting your site",
    "Configure and control access where needed",
    "And many more custom security features...",
  ];
  interface BlogPost {
    title: string;
    categories: string[];
    image: string;
    slug: string;
  }

  const blogPosts: BlogPost[] = [
    {
      title:
        "Data-Driven Email Marketing Strategies to Outsmart Your Competition",
      categories: ["WORDPRESS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "email-marketing-strategies",
    },
    {
      title:
        "Optimize Your About Page: 7 Essential Ingredients to Build Credibility",
      categories: ["WORDPRESS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "optimize-about-page",
    },
    {
      title: "Homepage Hacks: Essential Techniques to Boost Conversions",
      categories: ["DESIGN", "GENERAL", "MARKETING"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "homepage-hacks",
    },
    {
      title: "5 Smart Ways to Use AI to Create Content for Your Business",
      categories: ["AI"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "ai-content-creation",
    },
    {
      title:
        "SEO Unpacked: 7 Easy Steps to Improve Your Website's Organic Reach",
      categories: ["SEO", "SEM", "MARKETING"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "seo-unpacked",
    },
    {
      title:
        "Is Your WordPress Website Stuck in Maintenance Mode? Here's How to Repair It",
      categories: ["WORDPRESS"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jQVFeG0o7Fb2MytIG4ltBi1joCRZKC.png",
      slug: "wordpress-maintenance-mode",
    },
  ];
  interface InnovationCard {
    title: string;
    imageUrl: string;
  }

  const innovations: InnovationCard[] = [
    {
      title: "Room Panel",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
    {
      title: "Real-Time Intelligence",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
    {
      title: "Student Connect",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
    {
      title: "Meeting Personal",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
    {
      title: "Any Platform",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
    {
      title: "Meeting Personal",
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0pCSjWVHfTnjLWim9zp6FrhradGfrk.png",
    },
  ];

  return (
    <div>
      {" "}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <img
                src="/placeholder.svg"
                alt="Webmaster Team"
                width={40}
                height={40}
                className="w-10 h-10"
              /> */}
              <span className="text-white font-semibold">WEBMASTER TEAM</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/learn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LEARN
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                PRICING
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/account"
                className="text-gray-300 hover:text-white transition-colors"
              >
                MY ACCOUNT
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_IMAGE_URL ||
              "https://th.bing.com/th/id/OIP.yNf1SRzDCkV1lLtPiCvHeQHaE8?rs=1&pid=ImgDetMain"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="py-40">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                WordPress and Shopify
                <br />
                Management Experts
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Struggling to keep your WordPress website secure? WP plugin
                updates causing site crashes? Shopify apps causing indecision
                and frustration? We can help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  LEARN MORE
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 px-8 py-6 text-lg"
                >
                  GET SERVICE
                </Button>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
        </div>
      </div>
      <div className="py-20 bg-[url(https://img.freepik.com/premium-photo/green-mosaic-abstract-texture-background-pattern-backdrop-wallpaper_41691-6689.jpg)] object-cover bg-center bg-no-repeat bg-cover">
        <div className="text-center">
          <h2 className="text-[30px] text-white mb-20">
            TRUSTED BY CLIENTS WORLDWIDE
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Replace with actual client logos */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-32 h-12 flex items-center justify-center"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.FlcG6zg-UdT2VTUzoyafmwHaHa?w=197&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                  alt={`Client ${i + 1}`}
                  width={100}
                  height={40}
                  className="opacity-75 hover:opacity-100 transition-opacity rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              From Server To Site, We Tackle Everything
            </h1>

            <p className="text-gray-600">
              From e-commerce to non-profits to membership sites, we can help
              you manage your websites and navigate the complexities of Google's
              various management channels. These include Google Console™,
              formerly Webmaster Tools™, Merchant Center™, My Business™, and
              more.
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">
                With nearly 30 years of experience
              </span>{" "}
              our insight into these channels will give you the leading edge you
              need to succeed when it comes to keeping your website in top
              shape.
            </p>

            <div className="grid grid-cols-3 gap-4 bg-[#F5E6D3] rounded-lg p-6 my-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B5E20]">29+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B5E20]">3.7k+</div>
                <div className="text-sm">Site Fixes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1B5E20]">100%</div>
                <div className="text-sm">Awesomeness</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold">WordPress & Shopify Pros</h2>

            <p className="text-gray-600">
              From WordPress hosting to SEO we approach each challenge
              differently, but with a{" "}
              <span className="font-semibold">
                knowledge-base that is vastly superior to our competitors
              </span>
              . If you want to get ahead of the pack and need a reliable
              WordPress or Shopify industry partner expert, we're your team.
            </p>

            <p className="text-gray-600">
              While we can just perform tasks for your team,{" "}
              <span className="font-semibold">
                our true strength is in helping you navigate your web experience
              </span>{" "}
              in way that helps you grow across all channels.
            </p>

            <Button className="bg-[#1B5E20] hover:bg-[#1B5E20]/90 text-white px-8 py-6 text-lg">
              SCHEDULE A CALL TODAY!
            </Button>
          </div>

          <div className="relative">
            <img
              src={
                encodeURI(
                  "https://th.bing.com/th/id/OIP.yNf1SRzDCkV1lLtPiCvHeQHaE8?rs=1&pid=ImgDetMain"
                ) || "/placeholder.svg"
              }
              alt="Code editor screenshot with colorful overlay"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
      <section className="">
        <div className=" bg-[url(https://img.freepik.com/premium-photo/green-mosaic-abstract-texture-background-pattern-backdrop-wallpaper_41691-6689.jpg)] object-cover bg-center bg-no-repeat bg-cover">
          <div className="container mx-auto  py-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-white mb-3 md:text-3xl">
                Our Innovations
              </h2>
              <p className="text-gray-100 max-w-2xl mx-auto">
                Discover some of the ways technology can enhance your
                organization
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {innovations.map((innovation, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white p-2 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className=" relative mb-4">
                    <img
                      src="https://th.bing.com/th/id/OIP.qXogeR3wbHxy57sfu5C1VgHaEK?rs=1&pid=ImgDetMain"
                      alt={innovation.title}
                      className="h-full w-full object-contain rounded-xl"
                    />
                  </div>
                  <h3 className="mb-2 text-center text-xl font-medium text-gray-900">
                    {innovation.title}
                  </h3>
                  <div className="text-center">
                    <Button
                      variant="default"
                      className="bg-orange-500 text-white"
                    >
                      Discover
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white">
          <div className="container py-12 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    src="https://th.bing.com/th/id/OIP.4Tz9ywGYaY_oDrvbpJTgxQHaE8?w=2560&h=1707&rs=1&pid=ImgDetMain"
                    alt="Business professionals discussing insurance"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-2xl font-bold text-green-600 md:text-3xl lg:text-4xl">
                  WE ARE THE MOST PROFESSIONAL INSURANCE COMPANY IN AMERICA
                  RIGHT NOW!!
                </h1>
                <p className="mb-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labored dolore magna aliquam erat
                  volutpat. Ut wisi enim ad minim veniam tabeo allianco duorouti
                  noobris moe.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Consequat vel illum.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Honestquat vel illum dolore.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Sequat vel illum dolore tu feug.</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Consequat vel illum.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Honestquat vel illum dolore.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span>Sequat vel illum dolore wayflier.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50">
          <div className="container py-16 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Our features makes your business & life easier
                </h2>
                <p className="text-gray-600">
                  Suscipit lobortis nisl ut aliquip eara. world inconsectetuer
                  in autem vel eum illure dolor in hendrerit envolutate velit
                  esse consequat vel illum dolore feugiat nulla facilisis vero
                  eriosti dignissi odiand. there is no change to minbie vey
                  earth.
                </p>
                <p className="text-gray-600">
                  Suscipit lobortis nisl ut aliquip eara. world inconsectetuer
                  in autem vel eum illure dolor in hendrerit envolutate velit
                  esse consequat vel illum dolore feugiat nulla facilisis vero
                  eriosti dignissi odiand. there is no change to minbie vey
                  earth.
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg object-cover">
                <img
                  src="https://th.bing.com/th/id/OIP.qXogeR3wbHxy57sfu5C1VgHaEK?rs=1&pid=ImgDetMain"
                  alt="Happy family on their porch"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className=" py-16 mx-auto container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How We Help Optimize Your Site To The Fullest
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Website Fundamentals We Help Manage
          </p>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Our team understands what it takes to keep your WordPress or Shopify
            current. There are thousands of plugins and themes and keeping your
            site updated helps make things future-proof.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-[#f5f5f2] rounded-lg border border-border transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <service.icon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-green-600">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            VIEW ALL WEBSITE SERVICES
          </Button>
        </div>
      </section>
      <div className="bg-[url(https://img.freepik.com/premium-photo/green-mosaic-abstract-texture-background-pattern-backdrop-wallpaper_41691-6689.jpg)] object-cover bg-center bg-no-repeat bg-cover">
        <div className=" text-white py-20 text-center container mx-auto">
          <h2 className="text-3xl font-bold">
            We're Laser Focused On Responsiveness & Quality
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Having someone from our team on standby is the{" "}
            <span className="font-semibold">ultimate "life hack"</span> for
            website owners. We don’t sit on your emails or messages and respond
            within hours to almost all requests.
          </p>

          <div className="flex justify-center mt-8 space-x-12">
            <div>
              <p className="text-4xl font-bold">28+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold">3.1k</p>
              <p>Fixes & Updates</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p>Satisfaction</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-orange-600 p-6 text-left rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold">Stephanie Ariel</h3>
              <p className="text-sm opacity-80">Owner – Artisan Aromatics</p>
              <div className="flex space-x-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p>
                Patrick and The Webmaster Company are aces on all fronts –
                building beautiful designs, solving any issue quickly and
                smartly, always holding your best interests at heart as an
                invaluable partner in growing your business.
              </p>
            </Card>

            <Card className="bg-orange-500 p-6 text-left rounded-2xl shadow-lg">
              <h3 className="text-lg font-semibold">Lanie Wingert</h3>
              <p className="text-sm opacity-80">
                Executive Director – IgniteMindShift Impact
              </p>
              <div className="flex space-x-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p>
                Patrick and the team are phenomenal – they have been flexible to
                help us with our changing needs as we have grown and expanded. I
                run a non-profit, and they have not only provided service but
                have been interested in our mission.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-8">
          {/* Header */}
          <header className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">
                Web Development
                <br />
                Blogs & Articles
              </h1>
              <div className="text-sm">
                Free articles and blogs to help you up your web knowledge. Want
                to guest post for The Webmaster Company?{" "}
                <Link
                  href="/contact"
                  className="text-orange-500 hover:text-orange-600"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </header>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={
                      "https://thewebco.b-cdn.net/wp-content/uploads/2024/02/ai-to-create-content-768x515.webp"
                    }
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="space-x-2 mb-3">
                      {post.categories.map((category, catIndex) => (
                        <Badge
                          key={catIndex}
                          variant="secondary"
                          className="text-xs font-semibold"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                      {post.title}
                    </h2>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap justify-between items-center">
              <nav className="space-x-6 text-sm">
                <Link href="/about" className="hover:text-orange-500">
                  ABOUT
                </Link>
                <Link href="/services" className="hover:text-orange-500">
                  WEBSITE SERVICES
                </Link>
                <Link href="/learn" className="hover:text-orange-500">
                  LEARN
                </Link>
                <Link href="/contact" className="hover:text-orange-500">
                  CONTACT
                </Link>
                <Link href="/privacy" className="hover:text-orange-500">
                  PRIVACY
                </Link>
              </nav>
              <div className="text-sm text-gray-500">
                Copyright © 2025 The Webmaster Company
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Design;

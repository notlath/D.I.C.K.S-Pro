"use client";

import { Button, Card, Section, SectionHeader } from "@/components/ui";
import {
  ArrowRight,
  BarChart,
  Briefcase,
  Building,
  CheckCircle,
  Code,
  DollarSign,
  FileText,
  Lightbulb,
  PenTool,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";

const courses = [
  { name: "Video Editing", price: "₱80", icon: <Video className="w-5 h-5" /> },
  {
    name: "Blog/Freelance Writing",
    price: "₱80",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    name: "Online Business",
    price: "₱80",
    icon: <ShoppingBag className="w-5 h-5" />,
  },
  {
    name: "Website Development",
    price: "₱80",
    icon: <Code className="w-5 h-5" />,
  },
  {
    name: "Social Media Marketing",
    price: "₱80",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    name: "Bundle (All 5 Courses)",
    price: "₱400",
    icon: <CheckCircle className="w-5 h-5" />,
    highlight: true,
  },
];

const startupCosts = [
  { item: "Maintenance Cost per Month", cost: "₱600", yearly: "₱7,200" },
  { item: "Permits/Licenses/Documents", cost: "₱2,500", yearly: "₱2,500" },
];

export default function BusinessPlanPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/background-2.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011459]/95 to-[#2798c4]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Business Plan
              </h1>
              <p className="text-white/70">
                D.I.C.K.S. Pro Strategic Documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <Section background="white" id="summary">
        <SectionHeader
          title="Executive Summary"
          subtitle="A comprehensive overview of D.I.C.K.S. Pro's mission, services, and market opportunity"
        />

        <Card className="p-6 md:p-10">
          <p className="text-gray-600 leading-relaxed mb-6">
            D.I.C.K.S. Pro is a digital service that involves community support
            groups collaborating to provide an exceptional digital learning
            environment for all. Through the inclusion of its diverse training
            courses, D.I.C.K.S. Pro envisions digital citizens geared with
            bonafide digital information and supporting computer knowledge,
            complementing steps towards the future of the digital world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Most Filipinos have shifted from being company workers to
            freelancers as data has revealed that 32% of freelancers claim that
            demand has grown as a result of the COVID-19 epidemic, and the
            number of full-time freelancers surged from 17% to 28% between 2014
            and 2019.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The company&apos;s initial capitalization is{" "}
            <span className="font-bold text-[#011459]">₱9,700</span>, with
            non-recurring licenses/permits. D.I.C.K.S. Pro will be home-based
            and our team will use social media, specifically our Facebook page,
            to advertise the courses we will offer.
          </p>
        </Card>
      </Section>

      {/* Management & Organization */}
      <Section background="light" id="management">
        <SectionHeader
          title="Management & Organization"
          subtitle="Meet our dedicated team and organizational structure"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-[#2798c4]" />
              <h3 className="text-xl font-bold text-[#011459]">
                Company Information
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Company Name</p>
                <p className="font-semibold text-[#011459]">
                  Digital Information and Computer Knowledge Services
                  (D.I.C.K.S) Pro
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-gray-700">
                  19 A 2nd St., Juliana Dos Subd., Sta. Lucia, Pasig City
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Legal Structure</p>
                <p className="text-gray-700">Cooperative</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Capitalization</p>
                <p className="font-semibold text-[#2798c4] text-xl">₱9,700</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden" hover={false}>
            <div className="relative aspect-video">
              <Image
                src="/assets/dickspro.png"
                alt="D.I.C.K.S Pro"
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#011459] flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#011459] mb-3">Vision</h3>
            <p className="text-gray-600">
              D.I.C.K.S. Pro envisions a society that has equal digital
              knowledge regardless of age and aims to expand its service
              globally by adding more courses. In D.I.C.K.S. Pro, no one is left
              behind.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="w-12 h-12 rounded-xl bg-[#2798c4] flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#011459] mb-3">Mission</h3>
            <p className="text-gray-600">
              Our time, effort, and knowledge is our utmost service. We focus on
              you, in learning and preparing your skills in the field. Here at
              D.I.C.K.S Pro, learning has no barriers. Your success is our
              success.
            </p>
          </Card>
        </div>

        {/* Organizational Chart */}
        <Card className="p-6 md:p-8">
          <h3 className="text-xl font-bold text-[#011459] mb-6 text-center">
            Organizational Chart
          </h3>
          <div className="relative aspect-[16/9] max-w-4xl mx-auto">
            <Image
              src="/assets/management team.png"
              alt="Organizational Chart"
              fill
              className="object-contain"
            />
          </div>
        </Card>
      </Section>

      {/* Product/Service Plan */}
      <Section background="white" id="service">
        <SectionHeader
          title="Product/Service Plan"
          subtitle="Our comprehensive digital training offerings"
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-[#011459] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#2798c4]" />
              Purpose of the Service
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              D.I.C.K.S. Pro aims to bridge information gaps with no boundaries
              in terms of digital knowledge. Assist people with an interest in
              diving into the technological market. The company envisions a
              learning community that has equal digital knowledge regardless of
              age, background, abilities, occupations, and position.
            </p>

            <h3 className="text-xl font-bold text-[#011459] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#2798c4]" />
              Service&apos;s Unique Features
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With the several digital competitors in today&apos;s society,
              D.I.C.K.S. Pro offers its utmost service through dedication, time,
              effort, and knowledge. Real-time focus on the customers&apos;
              needs and technological queries.
            </p>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#011459] mb-4">
              Material Requirements
            </h3>
            <ul className="space-y-3">
              {[
                "PC/Laptop/Smartphone",
                "Internet",
                "Editing Software",
                "Microsoft Excel",
                "Facebook & Discord",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2798c4]" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Pricing */}
        <Card className="p-6 md:p-8 gradient-primary">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Training Courses Pricing
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl ${
                  course.highlight
                    ? "bg-white text-[#011459]"
                    : "bg-white/10 text-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`${
                      course.highlight ? "text-[#2798c4]" : "text-[#4cc2f0]"
                    }`}
                  >
                    {course.icon}
                  </div>
                  <span className="font-medium">{course.name}</span>
                </div>
                <p
                  className={`text-2xl font-bold ${
                    course.highlight ? "text-[#2798c4]" : "text-[#4cc2f0]"
                  }`}
                >
                  {course.price}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* Market Plan */}
      <Section background="light" id="market">
        <SectionHeader
          title="Market Plan"
          subtitle="Our strategic approach to reaching and serving customers"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-[#2798c4]" />
              <h3 className="text-xl font-bold text-[#011459]">
                Market Analysis
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              When there is a major leap of technological advancements,
              companies have to follow in order to keep up with the
              technological trends. The consumers themselves are convinced to
              keep up with the ever-changing state of technology. This generates
              new sets of problems that depict technological aliteracy.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#2798c4]" />
              <h3 className="text-xl font-bold text-[#011459]">
                Marketing Strategy
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The D.I.C.K.S. Pro team will focus on attempts to garner
              widespread popularity through various leading digital forefronts,
              by using the likes of Facebook as our main advertising platform.
              Facebook itself is the leading social media platform by reaching
              59% of the internet&apos;s user shares.
            </p>
          </Card>

          <Card className="p-6 md:p-8 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#2798c4]" />
              <h3 className="text-xl font-bold text-[#011459]">
                Sales Strategy
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              In order to facilitate the digital services of D.I.C.K.S. Pro, the
              team will create a webpage presenting the available bundle
              courses, service prices, as well as company and product details.
              The webpage will maintain to be most user-friendly, accommodating
              the needs of its consumers with ease regardless of age and
              technological literacy.
            </p>
          </Card>
        </div>
      </Section>

      {/* Financial Plan */}
      <Section background="gradient" id="financial">
        <SectionHeader
          title="Financial Plan"
          subtitle="Startup costs and financial projections"
          light
        />

        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-[#2798c4]" />
            <h3 className="text-xl font-bold text-[#011459]">
              Startup Summary
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#011459]">
                  <th className="text-left py-3 text-[#011459]">Expenses</th>
                  <th className="text-right py-3 text-[#011459]">Cost</th>
                  <th className="text-right py-3 text-[#011459]">1-Year</th>
                </tr>
              </thead>
              <tbody>
                {startupCosts.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 text-gray-600">{item.item}</td>
                    <td className="py-3 text-right text-gray-700">
                      {item.cost}
                    </td>
                    <td className="py-3 text-right text-gray-700">
                      {item.yearly}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#011459]/5">
                  <td className="py-3 font-bold text-[#011459]">Total</td>
                  <td className="py-3 text-right"></td>
                  <td className="py-3 text-right font-bold text-[#2798c4] text-xl">
                    ₱9,700
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center">
            *Non-recurring licenses/permits, excluding renewals
          </p>
        </Card>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011459] mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Explore our other resources and see our work in action
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/pubmats" size="lg">
              View Our Pubmats
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="https://drive.google.com/drive/folders/1jy-aVCuXUZxZEvgwoVWOY-eJY7Cep55G?usp=sharing"
              size="lg"
              variant="outline"
              external
            >
              Watch Videos
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

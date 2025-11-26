"use client";

import {
  Button,
  Card,
  FeatureCard,
  Section,
  SectionHeader,
  TeamCard,
} from "@/components/ui";
import {
  ArrowRight,
  BookOpen,
  Code,
  Globe,
  Lightbulb,
  PenTool,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#011459]/95 via-[#011459]/85 to-[#2798c4]/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2798c4]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4cc2f0]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 fade-in">
                <Sparkles className="w-4 h-4 text-[#4cc2f0]" />
                <span>Empowering Digital Learning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in-up">
                Digital Information &
                <span className="text-[#4cc2f0] block">Computer Knowledge</span>
                Service Pro
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl fade-in-up fade-in-delay-1">
                Bridging information gaps where learning has no barriers. We
                provide digital knowledge and training courses for all ages.
              </p>

              <div className="flex flex-wrap gap-4 fade-in-up fade-in-delay-2">
                <Button href="#about" size="lg" variant="secondary">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  href="/business-plan"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#011459]"
                >
                  View Business Plan
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 fade-in-up fade-in-delay-3">
                {[
                  { value: "5+", label: "Training Courses" },
                  { value: "₱80", label: "Per Course" },
                  { value: "∞", label: "Age Limit" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#4cc2f0]">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2798c4] to-[#4cc2f0] rounded-full blur-2xl opacity-30 animate-pulse" />
                <Image
                  src="/assets/logo.png"
                  alt="D.I.C.K.S Pro Logo"
                  fill
                  className="object-contain animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" background="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Who We Are"
              subtitle="D.I.C.K.S. Pro is a digital service that entails collaboration efforts backed by community support groups to build an excellent digital learning environment for all."
              centered={false}
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Through the inclusion of its diverse training courses, D.I.C.K.S.
              Pro envisions digital citizens geared with bonafide digital
              information with supporting computer knowledge, complementing
              steps towards the future of the digital world.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At this age we are open to looking for possible profit-making
              activities considering that we are at home with digital resources.
              Opening more opportunities on job/freelance for those willing to
              learn and proceed with technological trends would be an initial
              step.
            </p>
            <Button href="/business-plan">
              Read Our Business Plan
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/dickspro.png"
                alt="D.I.C.K.S Pro Team"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2798c4] rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4cc2f0]/30 rounded-full -z-10" />
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section background="light" id="vp">
        <SectionHeader
          title="Value Proposition"
          subtitle="D.I.C.K.S. Pro assists anyone of any age who wants to catch up with current technologies by offering digital knowledge which makes it easier for everybody to have accessibility in the digital world."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Globe className="w-7 h-7" />}
            title="Digital Accessibility"
            description="Making technology accessible for everyone, regardless of age or background."
          />
          <FeatureCard
            icon={<Users className="w-7 h-7" />}
            title="Inclusive Learning"
            description="Bridging generation gaps by providing knowledge to people from all walks of life."
          />
          <FeatureCard
            icon={<BookOpen className="w-7 h-7" />}
            title="Practical Skills"
            description="Learn real-world digital skills that can lead to freelance and job opportunities."
          />
        </div>
      </Section>

      {/* Training Courses */}
      <Section background="gradient" id="courses">
        <SectionHeader
          title="Training Courses"
          subtitle="Comprehensive digital training programs designed to equip you with market-ready skills."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {[
            {
              icon: <Video className="w-6 h-6" />,
              title: "Video Editing",
              price: "₱80",
            },
            {
              icon: <PenTool className="w-6 h-6" />,
              title: "Blog/Freelance Writing",
              price: "₱80",
            },
            {
              icon: <ShoppingBag className="w-6 h-6" />,
              title: "Online Business",
              price: "₱80",
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: "Website Development",
              price: "₱80",
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: "Social Media Marketing",
              price: "₱80",
            },
          ].map((course, index) => (
            <Card
              key={index}
              className="p-6 text-center group bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/20 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#011459]">
                {course.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-[#4cc2f0] text-2xl font-bold">
                {course.price}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Card className="inline-block p-6 bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-white mb-2">Get all 5 courses in one bundle</p>
            <p className="text-4xl font-bold text-[#4cc2f0]">₱400</p>
          </Card>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section background="white" id="vision-mission">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-[#011459] flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#011459] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              D.I.C.K.S. Pro envisions a society that has equal digital
              knowledge regardless of age and aims to expand its service
              globally by adding more courses. In D.I.C.K.S. Pro, no one is left
              behind.
            </p>
          </Card>

          <Card className="p-8 md:p-10">
            <div className="w-14 h-14 rounded-xl bg-[#2798c4] flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#011459] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our time, effort, and knowledge is our utmost service. We focus on
              you, in learning and preparing your skills in the field. Here at
              D.I.C.K.S Pro, learning has no barriers. Your success is our
              success.
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card variant="bordered" className="inline-block px-8 py-6">
            <p className="text-lg md:text-xl text-gray-700 italic">
              &quot;Here at D.I.C.K.S. Pro, we are bridging information gaps
              where learning has no barriers.&quot;
            </p>
          </Card>
        </div>
      </Section>

      {/* Management Team */}
      <Section background="light" id="team">
        <SectionHeader
          title="Management Team"
          subtitle="Meet the dedicated individuals behind D.I.C.K.S. Pro"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <TeamCard
            name="Jeuz Argenald Salvedia"
            role="Chief Executive Officer"
          />
          <div className="sm:col-span-2 lg:col-span-1">
            <Card className="p-6 h-full">
              <h4 className="font-bold text-[#011459] mb-4 text-center">
                Finance Team
              </h4>
              <div className="space-y-2">
                {["Lathrell Pagsuguiron", "Jermane Jiro Jabson"].map(
                  (name, i) => (
                    <div key={i} className="text-center">
                      <p className="text-gray-700 font-medium">{name}</p>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <Card className="p-6 h-full">
              <h4 className="font-bold text-[#011459] mb-4 text-center">
                HR & Production
              </h4>
              <div className="space-y-2">
                {["Alyssa Gwyneth Rivera", "Gabrielle Dela Cruz"].map(
                  (name, i) => (
                    <div key={i} className="text-center">
                      <p className="text-gray-700 font-medium">{name}</p>
                    </div>
                  )
                )}
              </div>
            </Card>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <Card className="p-6 h-full">
              <h4 className="font-bold text-[#011459] mb-4 text-center">
                Marketing & Sales
              </h4>
              <div className="space-y-2">
                {["Craig Joshua Ibarra", "Kathleen Marquina"].map((name, i) => (
                  <div key={i} className="text-center">
                    <p className="text-gray-700 font-medium">{name}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <TeamCard
            name="Franchine Samantha Sablay"
            role="Public Relations Officer"
          />
        </div>
      </Section>

      {/* Advertisements */}
      <Section background="dark" id="ads">
        <SectionHeader
          title="Advertisements"
          subtitle="Our creative campaigns showcasing the spirit of D.I.C.K.S. Pro"
          light
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {[
            { src: "/assets/pina-weaving.png", title: "Pina Weaving Art" },
            {
              src: "/assets/literary art (poetry).png",
              title: "Literary Art - Poetry",
            },
            {
              src: "/assets/media art (digital art).png",
              title: "Media Art - Digital",
            },
          ].map((ad, index) => (
            <Card key={index} className="overflow-hidden group" hover={false}>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={ad.src}
                  alt={ad.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
          <Card className="overflow-hidden group" hover={false}>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/assets/performing art ad.gif"
                alt="Performing Art"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011459] mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join D.I.C.K.S. Pro today and gain the digital skills you need to
            succeed in the modern world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/business-plan" size="lg">
              View Business Plan
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

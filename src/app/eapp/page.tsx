"use client";

import { Button, Card, Section } from "@/components/ui";
import { ArrowRight, BookOpen, FileText, Globe, Lightbulb } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  "DELA CRUZ, Gabrielle",
  "IBARRA, Craig Joshua",
  "JABSON, Jermane Jiro",
  "MARQUINA, Kathleen",
  "PAGSUGUIRON, Lathrell",
  "RIVERA, Alyssa Gwyneth",
  "SABLAY, Franchine Samantha",
  "SALVEDIA, Jeuz Argenald",
];

export default function EAPPPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/books.jpg"
            alt="Books Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#011459]/95 via-[#011459]/85 to-[#6780da]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Integrative Assessment II</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Concept Paper
            </h1>

            <p className="text-xl text-white/80 mb-4">
              Definition, Explication, Clarification
            </p>

            <p className="text-white/60 text-sm">April 30, 2022</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section background="white">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar - Company Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src="/assets/logo.png"
                    alt="D.I.C.K.S Pro Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#011459]">
                  D.I.C.K.S Pro
                </h3>
                <p className="text-xs text-[#2798c4] uppercase tracking-wider">
                  Digital Information & Computer Knowledge Service
                </p>
              </div>

              <hr className="my-4" />

              <p className="text-gray-600 text-sm text-center italic leading-relaxed">
                &quot;A digital service that entails collaboration efforts
                backed by community support groups to build an excellent digital
                learning environment for all.&quot;
              </p>

              <hr className="my-4" />

              <div>
                <h4 className="font-bold text-[#011459] mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2798c4]" />
                  Output By:
                </h4>
                <ul className="space-y-1">
                  {teamMembers.map((member, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Definition */}
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#011459] flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#2798c4] font-medium">
                    Formal Definition
                  </p>
                  <h2 className="text-2xl font-bold text-[#011459]">
                    Definition (Service)
                  </h2>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#011459] mb-1">
                  Service
                </h3>
                <p className="text-gray-500 text-sm italic">(noun)</p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                A service business is a type of company that provides
                professional services to its customers, such as banking,
                education, medical treatment, and transportation. In contrast to
                businesses that offer goods, the product in these businesses is
                not a tangible item but rather a set of values such as outcomes,
                experiences, knowledge, management, and customer service.
              </p>
            </Card>

            {/* Explication */}
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#2798c4] flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#2798c4] font-medium">
                    Detailed Explanation
                  </p>
                  <h2 className="text-2xl font-bold text-[#011459]">
                    Explication (Dichotomous Key)
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Jean-Baptiste Lamarck developed the dichotomous key, also known
                as the &quot;descriptive key&quot; or &quot;descriptive
                table.&quot; Its name originated from the Greek word
                &quot;di&quot; which means &quot;two&quot; and &quot;tome&quot;
                which means &quot;cutting instrument,&quot; and it is used to
                identify different organisms based on their observable traits.
              </p>

              <p className="text-gray-600 leading-relaxed">
                This is sufficient to identify the species accurately in many
                environments; however, complications may arise if multiple
                closely-related species with very similar traits live in the
                same geographic area. It consists of a series of statements with
                two choices in each step that guide users to the correct
                identification.
              </p>
            </Card>

            {/* Clarification */}
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#4cc2f0] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#2798c4] font-medium">
                    Common Misconception
                  </p>
                  <h2 className="text-2xl font-bold text-[#011459]">
                    Clarification (Internet)
                  </h2>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                People frequently use the term &quot;Internet&quot; to describe
                the World Wide Web; however, these are two distinct concepts.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#011459]/5">
                  <h4 className="font-bold text-[#011459] mb-2">
                    The Internet
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A global computer network composed of interconnected
                    networks that use standardized communication protocols that
                    provides various information and communication services.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#2798c4]/10">
                  <h4 className="font-bold text-[#011459] mb-2">
                    World Wide Web
                  </h4>
                  <p className="text-gray-600 text-sm">
                    An information space that allows users to access documents
                    and other web resources via a web browser and web-based
                    applications. It allows documents to be linked to other
                    documents.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore More Projects
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Check out our Biology project and business documentation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/bio"
              variant="secondary"
              className="bg-white text-[#011459] hover:bg-white/90"
            >
              Biology Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              href="/business-plan"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#011459]"
            >
              Business Plan
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

"use client";

import { Button, Card, Section, SectionHeader } from "@/components/ui";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const pubmats = [
  {
    id: 1,
    src: "/assets/pubmats/pubmat 1.png",
    title: "Training Courses Promo",
    description: "Promotional material for our digital training courses",
  },
  {
    id: 2,
    src: "/assets/pubmats/pubmat 2.png",
    title: "Service Overview",
    description: "Overview of D.I.C.K.S. Pro services",
  },
  {
    id: 3,
    src: "/assets/pubmats/pubmat 3.png",
    title: "Community Support",
    description: "Highlighting our community support features",
  },
  {
    id: 4,
    src: "/assets/pubmats/pubmat 4.png",
    title: "Digital Learning",
    description: "Promoting digital learning opportunities",
  },
  {
    id: 5,
    src: "/assets/pubmats/pubmat 5.png",
    title: "Get Started",
    description: "Call to action for new learners",
  },
];

export default function PubmatsPage() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof pubmats)[0] | null
  >(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 gradient-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
            <ImageIcon className="w-4 h-4" />
            <span>Marketing Materials</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Pubmats Gallery
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our collection of promotional materials and advertisements for
            D.I.C.K.S. Pro
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section background="light">
        <SectionHeader
          title="Publication Materials"
          subtitle="Click on any image to view it in full size"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pubmats.map((pubmat) => (
            <Card
              key={pubmat.id}
              className="group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(pubmat)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={pubmat.src}
                  alt={pubmat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011459]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold">{pubmat.title}</h3>
                  <p className="text-white/80 text-sm">{pubmat.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#4cc2f0] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={1200}
              height={1500}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white font-bold text-lg">
                {selectedImage.title}
              </h3>
              <p className="text-white/80 text-sm">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Additional Ads Section */}
      <Section background="dark">
        <SectionHeader
          title="Creative Advertisements"
          subtitle="Our artistic campaigns showcasing the spirit of D.I.C.K.S. Pro"
          light
        />

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              src: "/assets/pina-weaving.png",
              title: "Pina Weaving Art",
              desc: "Applied Art Advertisement",
            },
            {
              src: "/assets/literary art (poetry).png",
              title: "Literary Art",
              desc: "Poetry Advertisement",
            },
            {
              src: "/assets/media art (digital art).png",
              title: "Media Art",
              desc: "Digital Art Advertisement",
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
              <div className="p-4 bg-white">
                <h3 className="font-bold text-[#011459]">{ad.title}</h3>
                <p className="text-gray-600 text-sm">{ad.desc}</p>
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
            <div className="p-4 bg-white">
              <h3 className="font-bold text-[#011459]">Performing Art</h3>
              <p className="text-gray-600 text-sm">Animated Advertisement</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011459] mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Explore our business plan or watch our video content
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

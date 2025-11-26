"use client";

import { Button, Card, Section, SectionHeader } from "@/components/ui";
import { ArrowDown, ChevronRight, Leaf } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const plants = [
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    scientificName: "Ficus elastica",
    image: "/assets/bio/rubber_plant.jpg",
    description: `Ficus elastica is a large tree of the family Moraceae and was once an important source of inferior natural rubber. It was largely replaced as a source of rubber by the unrelated rubber tree (Hevea brasiliensis) in the early 20th century. It is native to Southeast Asia and is commonly grown as an indoor pot plant elsewhere. The young plants are durable and grow well under less-than-ideal indoor conditions.`,
  },
  {
    id: "san-francisco-plant",
    name: "San Francisco Plant",
    scientificName: "Codiaeum variegatum",
    image: "/assets/bio/san_francisco_plant.jpg",
    description: `Codiaeum variegatum, also called croton, is a colorful-leaved plant of the spurge family (Euphorbiaceae), native to Malaysia and the Pacific and extensively cultivated. It can reach a height of about 6 meters (20 feet), though varieties kept as houseplants can be significantly smaller. The plants are evergreen with brilliantly colored, glossy, leathery leaves. Leaf colors occur solid or in combinations of green, yellow, white, orange, pink, red, crimson, and purple.`,
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    scientificName: "Dracaena trifasciata",
    image: "/assets/bio/snake_plant.jpg",
    description: `Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa. It is an evergreen perennial plant forming dense stands, spreading by way of its creeping rhizome. Its stiff leaves grow vertically from a basal rosette, dark green with light grey-green cross-banding, usually ranging from 70–90 cm long. The plant exchanges oxygen and carbon dioxide using the crassulacean acid metabolism process.`,
  },
  {
    id: "money-plant",
    name: "Money Plant",
    scientificName: "Epipremnum aureum",
    image: "/assets/bio/money_plant.jpg",
    description: `Epipremnum aureum is a hardy indoor foliage plant of the arum family (Araceae) native to southeastern Asia. It is an evergreen plant with thick, waxy, green leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant. It can climb by means of aerial roots, and wild or cultivated plants grown outdoors can reach enormous heights using tall trees as support.`,
  },
  {
    id: "fortune-plant",
    name: "Fortune Plant",
    scientificName: "Dracaena sanderiana",
    image: "/assets/bio/fortune_plant.jpg",
    description: `Dracaena sanderiana is a species of flowering plant in the family Asparagaceae, native to Central Africa. It is a perennial herb reaching a height of 100 cm, the plant has slightly twisted leaves of grey-green color. The stem is fleshy, which distinguishes it from bamboo. It requires bright, ventilated areas and tolerates dry air. A very tenacious plant, it is rather difficult to destroy.`,
  },
];

const characteristics = [
  {
    letter: "A",
    text: "Plant more complex, with stems, leaves, and roots generally > 1 cell thick, with vascular tissue, reproducing by seeds or spores (+), Plant lacks complexity (-)",
  },
  {
    letter: "B",
    text: "Plant terrestrial, wetland, or aquatic, normally rooted to the substrate (+), Plant is not terrestrial, wetland, or aquatic, not normally rooted to the substrate (-)",
  },
  {
    letter: "C",
    text: "Plants woody, either trees, shrubs, lianas, subshrubs, or rosette shrubs, with perennating structures borne on long-lived, above-ground, woody stems or caudices (+), Plant is not woody (-)",
  },
  {
    letter: "D",
    text: "Plants herbaceous, herbs, or herbaceous vines, annual, biennial, or perennial, if the latter, with perennating structures borne below-ground as crowns, offsets, etc. (+), Plant is not herbaceous (-)",
  },
  {
    letter: "E",
    text: "Leaves generally not stiff, usually broader and with well-developed leaf blades, usually with a midvein and well developed secondary and tertiary venation (+), Leaves generally stiff (-)",
  },
  {
    letter: "F",
    text: "Woody angiosperms with opposite, compound leaves (+), Non-woody angiosperms, compound leaves not opposite (-)",
  },
  { letter: "G", text: "Stamen ascending (+), Stamen not ascending (-)" },
];

export default function BioPage() {
  const [selectedPlant, setSelectedPlant] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/bio/halaman.gif"
            alt="Plants Background"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#22b350]/90 via-[#22b350]/80 to-[#4fba70]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-6">
            <Leaf className="w-4 h-4" />
            <span>Biology Project</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Plant Systematics
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Explore the fascinating world of indoor plants, their
            characteristics, and classification
          </p>

          <Button
            href="#plants"
            variant="secondary"
            size="lg"
            className="bg-white text-[#22b350] hover:bg-white/90"
          >
            Explore Plants
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Plants Gallery */}
      <Section id="plants" background="white">
        <SectionHeader
          title="Featured Plants"
          subtitle="Click on any plant to learn more about its characteristics and origin"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {plants.map((plant) => (
            <button
              key={plant.id}
              onClick={() =>
                setSelectedPlant(selectedPlant === plant.id ? null : plant.id)
              }
              className={`group relative aspect-[3/4] rounded-2xl overflow-hidden transition-all duration-300 ${
                selectedPlant === plant.id
                  ? "ring-4 ring-[#22b350] scale-105 z-10"
                  : "hover:scale-105 hover:shadow-2xl"
              }`}
            >
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg">{plant.name}</h3>
                <p className="text-white/70 text-xs italic">
                  {plant.scientificName}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Plant Details */}
      <Section background="light">
        <SectionHeader
          title="Complete Descriptions"
          subtitle="Detailed information about each plant species"
        />

        <div className="space-y-8">
          {plants.map((plant, index) => (
            <Card
              key={plant.id}
              id={plant.id}
              className={`overflow-hidden transition-all duration-500 ${
                selectedPlant === plant.id ? "ring-2 ring-[#22b350]" : ""
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] md:aspect-auto ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-[#22b350] text-sm font-medium mb-2">
                    <Leaf className="w-4 h-4" />
                    <span>{plant.scientificName}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#011459] mb-4">
                    {plant.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {plant.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Characteristics Table */}
      <Section background="gradient" id="characteristics">
        <SectionHeader
          title="Characteristics"
          subtitle="Key features used to classify and identify plants"
          light
        />

        <div className="grid md:grid-cols-2 gap-4">
          {characteristics.map((char) => (
            <Card
              key={char.letter}
              className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 group hover:bg-white/20 transition-all duration-300"
              hover={false}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-xl group-hover:bg-white group-hover:text-[#22b350] transition-colors duration-300">
                  {char.letter}
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {char.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Dichotomous Key */}
      <Section background="white" id="dichotomy">
        <SectionHeader
          title="Dichotomous Key"
          subtitle="A step-by-step guide to identify plant species"
        />

        <Card className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="border-l-4 border-[#22b350] pl-4">
              <h4 className="font-bold text-[#011459] mb-2">
                1. Complex Plants
              </h4>
              <p className="text-gray-600 mb-2">
                Plants that are more complex, with stems, leaves, and roots
                generally &gt; 1 cell thick, with vascular tissue, reproducing
                by seeds or spores
              </p>
              <div className="ml-4 mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#22b350] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-600">
                      1.1 Plants not terrestrial, wetland or aquatic, not rooted
                      to substrate:
                    </span>
                    <span className="ml-2 text-[#22b350] font-medium">
                      Dracaena trifasciata, Dracaena sanderiana
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#22b350] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-600">
                      1.2 Plants not woody, lacks perennating structure:
                    </span>
                    <span className="ml-2 text-[#2798c4] font-medium">
                      Refer to 2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[#2798c4] pl-4">
              <h4 className="font-bold text-[#011459] mb-2">
                2. Herbaceous Plants
              </h4>
              <p className="text-gray-600 mb-2">
                Plants or vines without perennating structure borne below-ground
                as crowns, offsets, or buds on woody rhizomes; not herbaceous
              </p>
              <div className="ml-4 mt-4">
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-[#2798c4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#22b350] font-medium">
                      Ficus elastica, Codiaeum variegatum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Cladogram */}
      <Section background="light" id="cladogram">
        <SectionHeader
          title="Cladogram"
          subtitle="Visual representation of evolutionary relationships"
        />

        <div className="grid gap-6">
          <Card className="overflow-hidden" hover={false}>
            <div className="relative aspect-[16/9]">
              <Image
                src="/assets/bio/Cladogram/Slide1.PNG"
                alt="Cladogram"
                fill
                className="object-contain bg-white"
              />
            </div>
          </Card>

          <Card className="overflow-hidden" hover={false}>
            <div className="relative aspect-[16/9]">
              <Image
                src="/assets/bio/hsadg.png"
                alt="Plant Classification Diagram"
                fill
                className="object-contain"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore More Projects
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Check out our other academic projects and business documentation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/eapp" variant="secondary">
              View EAPP Project
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

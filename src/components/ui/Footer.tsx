import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#011459] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image
                  src="/assets/logo.png"
                  alt="D.I.C.K.S Pro"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">D.I.C.K.S Pro</h3>
                <p className="text-[#4cc2f0] text-xs uppercase tracking-wider">
                  Digital Information & Computer Knowledge Service
                </p>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-md mt-4">
              Bridging information gaps where learning has no barriers. We
              provide digital knowledge and training courses for all ages,
              helping everyone keep up with the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#4cc2f0]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/business-plan", label: "Business Plan" },
                { href: "/pubmats", label: "Pubmats" },
                { href: "/bio", label: "Biology" },
                { href: "/eapp", label: "EAPP" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors duration-200 animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#4cc2f0]">
              Training Courses
            </h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Video Editing</li>
              <li>Blog/Freelance Writing</li>
              <li>Online Business</li>
              <li>Website Development</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} D.I.C.K.S Pro. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              19 A 2nd St., Juliana Dos Subd., Sta. Lucia, Pasig City
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Pic from "@/public/pics/palm/pool.jpg";
import { CTA } from "../sections";

export default function FooterBgImage() {
  return (
    <footer className="z-10 pt-20 p-4 md:pt-40 md:p-6 lg:p-8 lg:pt-24">
      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          src={Pic}
          alt="WYZ Rent"
        />
        <CTA withLogo />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 relative z-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="md:col-span-2 lg:col-span-2 mb-8 md:mb-0">
              <div className="mb-6">
                <Image
                  src="/wyz-logo-white.png"
                  alt="WYZRENT"
                  width={360}
                  height={100}
                  className="h-10 w-auto mb-4 drop-shadow-lg"
                />
                <p className="text-gray-100 text-lg leading-relaxed max-w-md drop-shadow-md">
                  Premium short-term rental management in Dubai. We're property
                  owners ourselves, bringing personal care to professional
                  service.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4 drop-shadow-lg text-xl">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-blue-200 transition-colors text-lg drop-shadow-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-white hover:text-blue-200 transition-colors text-lg drop-shadow-md"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-blue-200 transition-colors text-lg drop-shadow-md"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-blue-200 transition-colors text-lg drop-shadow-md"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4 drop-shadow-lg text-xl">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white">
                  <MapPin className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0 drop-shadow-lg" />
                  <span className="text-lg leading-relaxed drop-shadow-md">
                    Office 419, Blue Bay Tower by Al Sayyah, Dubai, UAE
                  </span>
                </div>
                <Link
                  href="tel:+971585885060"
                  className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform drop-shadow-lg" />
                  <span className="text-lg drop-shadow-md">
                    +971 58 588 5060
                  </span>
                </Link>
                <Link
                  href="mailto:info@wyzrent.com"
                  className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform drop-shadow-lg" />
                  <span className="text-lg drop-shadow-md">
                    info@wyzrent.com
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/30 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white text-sm drop-shadow-md">
              © {new Date().getFullYear()} WYZRENT. All rights reserved
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a
                href="https://www.instagram.com/wyzrent/"
                className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/wyz-rent/"
                className="text-white hover:text-blue-200 transition-colors drop-shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

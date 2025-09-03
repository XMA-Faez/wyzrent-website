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

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="WYZRENT"
              width={360}
              height={100}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-600 leading-relaxed max-w-md">
              Luxury short-term rental management in Dubai. We maximize your
              property's revenue while providing exceptional guest experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-black mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-sm">
                  Office 419, Blue Bay Tower by Al Sayyah, Dubai, UAE
                </span>
              </div>
              <Link
                href="tel:+971585885060"
                className="flex items-center gap-3 text-gray-600"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span className="text-sm">+971 58 588 5060</span>
              </Link>
              <Link
                href="mailto:info@wyzrent.com"
                className="flex items-center gap-3 text-gray-600"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm">info@wyzrent.com</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WYZRENT. All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/wyzrent/"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/wyz-rent/"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

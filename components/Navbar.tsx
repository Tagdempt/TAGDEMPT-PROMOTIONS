"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { useState } from "react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/projects", label: "المشاريع" },
  {
    href: "/opportunities",
    label: "فرص الاستثمار",
    featured: true,
  },
  { href: "/investment", label: "الاستثمار" },
  { href: "/investor-center", label: "مركز المستثمر" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-white/95 shadow-md backdrop-blur-xl">

      <div className="mx-auto flex h-24 max-w-[1600px] items-center px-6 lg:px-10">

        {/* LEFT - Phone + Social */}

        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          {/* Phone */}

          <a
            href="tel:+213659100227"
            className="flex h-12 items-center gap-3 rounded-xl bg-[#08152B] px-5 font-bold text-white transition hover:bg-yellow-500 hover:text-[#08152B]"
          >
            <Phone size={18} />

            <span
              dir="ltr"
              className="whitespace-nowrap text-sm"
            >
              +213 659 100 227
            </span>
          </a>

          {/* Social Icons */}

          <div className="flex items-center gap-2">

            {/* WhatsApp */}

            <a
              href="https://wa.me/213659100227"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Facebook - سيتم ربطه لاحقًا */}

            <a
              href="https://www.facebook.com/TagemptPromotions"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
            >
              <FaFacebookF size={17} />
            </a>

            {/* Instagram - سيتم ربطه لاحقًا */}

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white transition hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            {/* LinkedIn - سيتم ربطه لاحقًا */}

            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white transition hover:scale-110"
            >
              <FaLinkedinIn size={17} />
            </a>

          </div>

        </div>

        {/* CENTER - Navigation */}

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex xl:gap-9">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className={
                link.featured
                  ? "whitespace-nowrap rounded-xl bg-yellow-500 px-4 py-2 text-[15px] font-black text-[#08152B] shadow-sm transition hover:bg-yellow-400 hover:shadow-md"
                  : "whitespace-nowrap text-[15px] font-bold text-slate-700 transition hover:text-yellow-600"
              }
            >
              {link.label}
            </Link>

          ))}

        </nav>

        {/* RIGHT - Logo */}

        <Link
          href="/"
          className="ml-auto flex shrink-0 items-center gap-4"
        >

          <div className="text-right">

            <h1 className="text-2xl font-black tracking-[2px] text-[#08152B] xl:text-3xl">
              TAGDEMPT
            </h1>

            <p className="text-xs font-bold tracking-[4px] text-yellow-600 xl:text-sm">
              PROMOTIONS
            </p>

          </div>

          <div className="flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-slate-200">

            <Image
              src="/logo.png"
              alt="TAGDEMPT PROMOTIONS"
              width={68}
              height={68}
              priority
              className="h-full w-full object-contain"
            />

          </div>

        </Link>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={open}
          className="ml-4 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={32} />
          ) : (
            <Menu size={32} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                link.featured
                  ? "block border-b border-yellow-100 bg-yellow-500 px-6 py-4 font-black text-[#08152B] transition hover:bg-yellow-400"
                  : "block border-b border-slate-100 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-yellow-600"
              }
            >
              {link.label}
            </Link>

          ))}

          {/* Mobile Phone */}

          <a
            href="tel:+213659100227"
            className="flex items-center gap-3 px-6 py-5 font-bold text-[#08152B]"
            dir="ltr"
          >
            <Phone size={18} />

            +213 659 100 227
          </a>

          {/* Mobile WhatsApp */}

          <a
            href="https://wa.me/213659100227"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-5 font-bold text-green-600"
            dir="ltr"
          >
            <FaWhatsapp size={20} />

            WhatsApp
          </a>

        </div>

      )}

    </header>
  );
}
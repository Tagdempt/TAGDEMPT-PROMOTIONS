"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-[#020814]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="TAGDEMPT PROMOTIONS"
                width={78}
                height={78}
                className="drop-shadow-xl"
              />

              <div>
                <h2 className="text-2xl font-black text-yellow-400">
                  TAGDEMPT
                </h2>

                <p className="tracking-widest text-gray-400">
                  PROMOTIONS
                </p>
              </div>

            </div>

            <p className="mt-8 leading-9 text-gray-400">
              شركة جزائرية متخصصة في الترقية العقارية،
              تطوير المشاريع، والاستثمار العقاري وفق
              أعلى معايير الجودة والحوكمة والاستدامة.
            </p>
          </div>

          {/* Links */}

<div>
  <h3 className="mb-8 text-2xl font-black text-white">
    روابط سريعة
  </h3>

  <div className="space-y-4">

    <Link
      href="/"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      الرئيسية
    </Link>

    <Link
      href="/projects"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      المشاريع
    </Link>

    <Link
      href="/investment"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      الاستثمار
    </Link>

    <Link
      href="/investor-center"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      مركز المستثمر
    </Link>

    <Link
      href="/contact"
      className="block text-gray-400 transition hover:text-yellow-400"
    >
      تواصل معنا
    </Link>

  </div>
</div>
          {/* Offices */}

          <div>
            <h3 className="mb-8 text-2xl font-black text-white">
              مكاتبنا
            </h3>

            <div className="space-y-8">

              {/* ORAN */}

              <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-5">

                <h4 className="mb-4 font-black text-yellow-400">
                  🏢 مكتب وهران
                </h4>

                <div className="space-y-3 text-sm leading-7 text-gray-300">

                  <p>
                    📍 حي الصباح
                  </p>

                  <p>
                    ☎{" "}
                    <a
                      href="tel:+213562259823"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-yellow-400"
                    >
                      +213 562 259 823
                    </a>
                  </p>

                  <p>
                    📠{" "}
                    <span
                      dir="ltr"
                      className="inline-block tracking-wide"
                    >
                      0421 18 71 0
                    </span>
                  </p>

                  <p>
                    💬{" "}
                    <a
                      href="https://wa.me/213562259823"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-green-400"
                    >
                      +213 562 259 823
                    </a>
                  </p>

                  <p>
                    ✉ tagdemptpro@gmail.com
                  </p>

                </div>

              </div>

              {/* TIARET */}

              <div>

                <h4 className="mb-3 font-bold text-yellow-400">
                  🏢 مكتب تيارت
                </h4>

                <div className="space-y-3 text-sm leading-7 text-gray-400">

                  <p>
                    📍 حي المنظر الجميل
                  </p>

                  <p>
                    ☎{" "}
                    <a
                      href="tel:+213659100227"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-yellow-400"
                    >
                      +213 659 100 227
                    </a>
                  </p>

                  <p>
                    📠{" "}
                    <span
                      dir="ltr"
                      className="inline-block tracking-wide"
                    >
                      0421 18 71 0
                    </span>
                  </p>

                  <p>
                    💬{" "}
                    <a
                      href="https://wa.me/213659100227"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-green-400"
                    >
                      +213 659 100 227
                    </a>
                  </p>

                  <p>
                    ✉ tagdemptpromotions@gmail.com
                  </p>

                </div>

              </div>

              {/* ALGIERS */}

              <div>

                <h4 className="mb-3 font-bold text-yellow-400">
                  🏙 مكتب الجزائر
                </h4>

                <div className="space-y-3 text-sm leading-7 text-gray-400">

                  <p>
                    📍 قريبًا
                  </p>

                  <p>
                    ☎{" "}
                    <a
                      href="tel:+213562259823"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-yellow-400"
                    >
                      +213 562 259 823
                    </a>
                  </p>

                  <p>
                    📠{" "}
                    <span
                      dir="ltr"
                      className="inline-block tracking-wide"
                    >
                      0421 18 71 0
                    </span>
                  </p>

                  <p>
                    💬{" "}
                    <a
                      href="https://wa.me/213562259823"
                      target="_blank"
                      rel="noopener noreferrer"
                      dir="ltr"
                      className="inline-block tracking-wide transition hover:text-green-400"
                    >
                      +213 562 259 823
                    </a>
                  </p>

                  <p>
                    ✉ tagdemptpro@gmail.com
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Vision */}

          <div>

            <h3 className="mb-8 text-2xl font-black text-white">
              رؤيتنا
            </h3>

            <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl">

              <p className="leading-9 text-gray-300">
                نسعى إلى أن تكون TAGDEMPT PROMOTIONS
                من الشركات العقارية الرائدة في الجزائر،
                من خلال الجودة والابتكار والشفافية
                وبناء شراكات تحقق قيمة مستدامة.
              </p>

            </div>

          </div>

        </div>

        {/* Social */}

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/10 pt-10 md:flex-row">

          <div className="flex items-center gap-4">

            <a
              href="https://www.facebook.com/share/1BUxWmi6ZK/"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#020814]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/tagdemptpromotions?igsh=MTloY2tnNnJpc2FvNg=="
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#020814]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/tagdempt-promotions-a05455425"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-[#020814]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <VisitorCounter />

          </div>

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TAGDEMPT PROMOTIONS.
            جميع الحقوق محفوظة.
          </p>

        </div>

      </div>
    </footer>
  );
}
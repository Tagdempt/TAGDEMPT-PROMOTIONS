"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Send,
  MessageCircle,
} from "lucide-react";

import { createContact } from "@/app/actions/contact";

const contacts = [
  {
    icon: Building2,
    title: "مكتب وهران",
    value: "وهران - الجزائر",
  },
  {
    icon: MapPin,
    title: "مكتب تيارت",
    value: "تيارت - الجزائر",
  },
  {
    icon: Building2,
    title: "مكتب الجزائر",
    value: "الجزائر - الجزائر",
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: (
      <span dir="ltr" className="inline-block">
        +213 659 100 227
      </span>
    ),
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "tagdemptpromotions@gmail.com",
  },
];

export default function Contact() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    await createContact(formData);
    setSuccess(true);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#08152B] via-[#07121F] to-[#020814] py-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-24 text-center">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-bold tracking-widest text-yellow-400">
            CONTACT US
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            تواصل معنا
          </h2>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600" />

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            يسعدنا استقبال استفساراتكم ومقترحاتكم وطلبات الشراكة
            والاستثمار، وسيقوم فريقنا بالرد عليكم في أقرب وقت.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <div className="space-y-7">

            {contacts.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: -8 }}
                  className="flex items-center gap-5 rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                >

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-300 to-yellow-600">
                    <Icon
                      size={34}
                      className="text-[#08152B]"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white">
                      {item.title}
                    </h3>

                    <div className="mt-2 text-lg text-slate-300">
                      {item.value}
                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Contact Form */}

          <motion.form
            action={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <input
              name="name"
              required
              placeholder="الاسم الكامل"
              className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="البريد الإلكتروني"
              className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400"
            />

            <input
              name="company"
              placeholder="الشركة"
              className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400"
            />

            <textarea
              name="message"
              rows={6}
              required
              placeholder="اكتب رسالتك..."
              className="mb-6 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 py-4 text-lg font-black text-[#08152B] transition hover:scale-[1.02]"
            >
              <Send size={20} />
              إرسال الرسالة
            </button>

            {success && (
              <p className="mt-5 text-center font-bold text-green-400">
                ✓ تم إرسال رسالتك بنجاح.
              </p>
            )}

            <a
              href="https://wa.me/213659100227"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-green-500 bg-green-500/10 py-4 font-bold text-green-400 transition hover:bg-green-500/20"
            >
              <MessageCircle size={22} />
              التواصل عبر واتساب
            </a>

          </motion.form>

        </div>

      </div>
    </section>
  );
}
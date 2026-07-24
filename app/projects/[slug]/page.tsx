import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  MapPin,
  Building2,
  Maximize,
  BadgeDollarSign,
  Calendar,
  ArrowLeft,
  CheckCircle2,
  Star,
  Phone,
  Download,
  ShieldCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectDetails({
  params,
}: Props) {
  const { slug } = await params;

  const project = await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      images: {
        orderBy: {
          isCover: "desc",
        },
      },
    },
  });

  if (!project) {
    notFound();
  }

  const relatedProjects = await prisma.project.findMany({
    where: {
      id: {
        not: project.id,
      },
    },
    include: {
      images: {
        where: {
          isCover: true,
        },
        take: 1,
      },
    },
    take: 3,
  });

  return (
    <main className="overflow-hidden bg-gradient-to-b from-[#071528] via-[#0A1C34] to-[#F7F8FA]">

      {/* ================= HERO ================= */}

      <section className="relative h-[780px] overflow-hidden">

        {project.images.length > 0 && (
          <Image
            src={project.images[0].url}
            alt={project.title}
            fill
            priority
            className="object-cover scale-105"
          />
        )}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#041226] via-[#041226]/55 to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.22),transparent_45%)]" />

        <div className="absolute bottom-0 left-0 right-0">

          <div className="mx-auto max-w-7xl px-6 pb-24">

            <div className="flex flex-wrap items-center gap-4">

              <span className="rounded-full bg-yellow-500 px-6 py-3 text-sm font-black text-[#08152B] shadow-xl">
                {project.status}
              </span>

              {project.featured && (
                <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[#08152B] shadow-xl">

                  <Star size={16} />

                  مشروع مميز

                </span>
              )}

            </div>

            <h1 className="mt-8 max-w-5xl text-6xl font-black leading-tight text-white md:text-8xl">
              {project.title}
            </h1>

            {project.shortDescription && (
              <p className="mt-8 max-w-3xl text-xl leading-10 text-gray-200">
                {project.shortDescription}
              </p>
            )}

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-xl">

                <MapPin className="text-yellow-400" />

                <span className="font-semibold text-white">
                  {project.city} • {project.state}
                </span>

              </div>

              {project.price && (

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-xl">

                  <BadgeDollarSign className="text-yellow-400" />

                  <span className="font-bold text-white">
                    {project.price}
                  </span>

                </div>

              )}

              {project.area && (

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-xl">

                  <Maximize className="text-yellow-400" />

                  <span className="font-bold text-white">
                    {project.area} م²
                  </span>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>

            {/* ================= CONTENT ================= */}

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[2fr_420px]">

        {/* LEFT SIDE */}

        <div className="space-y-12">

          {/* About */}

          <section className="rounded-[36px] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-500">

                <Building2 className="text-[#08152B]" size={32} />

              </div>

              <div>

                <span className="font-bold uppercase tracking-[3px] text-yellow-600">
                  PROJECT
                </span>

                <h2 className="text-4xl font-black text-[#08152B]">
                  نبذة عن المشروع
                </h2>

              </div>

            </div>

            <p className="leading-[2.4] text-lg text-gray-700">
              {project.description}
            </p>

          </section>

          {/* Information */}

          <section className="rounded-[36px] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

            <h2 className="mb-10 text-4xl font-black text-[#08152B]">
              معلومات المشروع
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              {project.type && (

                <div className="rounded-3xl border border-slate-200 p-7">

                  <h3 className="mb-3 font-black text-[#08152B]">
                    نوع المشروع
                  </h3>

                  <p className="text-gray-600">
                    {project.type}
                  </p>

                </div>

              )}

              {project.category && (

                <div className="rounded-3xl border border-slate-200 p-7">

                  <h3 className="mb-3 font-black text-[#08152B]">
                    التصنيف
                  </h3>

                  <p className="text-gray-600">
                    {project.category}
                  </p>

                </div>

              )}

              {project.featured && (

                <div className="rounded-3xl border border-yellow-300 bg-yellow-50 p-8 md:col-span-2">

                  <div className="mb-4 flex items-center gap-3">

                    <Star className="text-yellow-600" />

                    <h3 className="text-2xl font-black text-[#08152B]">
                      مشروع مميز
                    </h3>

                  </div>

                  <p className="leading-9 text-gray-700">
                    هذا المشروع من المشاريع الاستراتيجية للشركة ويتميز
                    بموقعه وجودة التنفيذ وقيمته الاستثمارية المرتفعة.
                  </p>

                </div>

              )}

            </div>

          </section>

          {/* Advantages */}

          <section className="rounded-[36px] bg-[#08152B] p-12 text-white">

            <h2 className="mb-10 text-4xl font-black">
              لماذا الاستثمار في هذا المشروع؟
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="flex gap-4">

                <ShieldCheck className="mt-1 text-yellow-400" />

                <div>

                  <h3 className="mb-2 text-xl font-black">
                    استثمار آمن
                  </h3>

                  <p className="leading-8 text-gray-300">
                    جميع المشاريع تنفذ وفق معايير الجودة والحوكمة.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <TrendingUp className="mt-1 text-yellow-400" />

                <div>

                  <h3 className="mb-2 text-xl font-black">
                    قيمة متزايدة
                  </h3>

                  <p className="leading-8 text-gray-300">
                    عائد استثماري طويل الأجل مع نمو مستمر للقيمة.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Sparkles className="mt-1 text-yellow-400" />

                <div>

                  <h3 className="mb-2 text-xl font-black">
                    تصميم فاخر
                  </h3>

                  <p className="leading-8 text-gray-300">
                    حلول معمارية حديثة ومساحات مدروسة.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 text-yellow-400" />

                <div>

                  <h3 className="mb-2 text-xl font-black">
                    جودة التنفيذ
                  </h3>

                  <p className="leading-8 text-gray-300">
                    إشراف هندسي احترافي في جميع مراحل المشروع.
                  </p>

                </div>

              </div>

            </div>

          </section>

                    {/* Gallery */}

          {project.images.length > 1 && (

            <section className="rounded-[36px] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

              <h2 className="mb-10 text-4xl font-black text-[#08152B]">
                معرض الصور
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                {project.images.slice(1).map((image) => (

                  <div
                    key={image.id}
                    className="group relative h-[320px] overflow-hidden rounded-[30px]"
                  >

                    <Image
                      src={image.url}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                  </div>

                ))}

              </div>

            </section>

          )}

          {/* Video */}

          {project.videoUrl && (

            <section className="rounded-[36px] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

              <h2 className="mb-10 text-4xl font-black text-[#08152B]">
                فيديو المشروع
              </h2>

              <div className="aspect-video overflow-hidden rounded-3xl">

                <iframe
                  src={project.videoUrl}
                  className="h-full w-full"
                  allowFullScreen
                />

              </div>

            </section>

          )}

          {/* Map */}

          {project.mapUrl && (

            <section className="rounded-[36px] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,.08)]">

              <h2 className="mb-10 text-4xl font-black text-[#08152B]">
                موقع المشروع
              </h2>

              <div className="aspect-video overflow-hidden rounded-3xl">

                <iframe
                  src={project.mapUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />

              </div>

            </section>

          )}

        </div>

        {/* ================= SIDEBAR ================= */}

        <aside>

          <div className="sticky top-24 rounded-[36px] bg-white p-10 shadow-[0_25px_80px_rgba(0,0,0,.10)]">

            <h3 className="mb-10 text-3xl font-black text-[#08152B]">
              معلومات المشروع
            </h3>

            <div className="space-y-6">

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <BadgeDollarSign size={20} />

                  السعر

                </span>

                <strong>{project.price || "حسب الطلب"}</strong>

              </div>

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <Maximize size={20} />

                  المساحة

                </span>

                <strong>{project.area || "-"} م²</strong>

              </div>

              <div className="flex justify-between">

                <span className="flex items-center gap-2">

                  <Building2 size={20} />

                  الوحدات

                </span>

                <strong>{project.units ?? "-"}</strong>

              </div>

              {project.deliveryDate && (

                <div className="flex justify-between">

                  <span className="flex items-center gap-2">

                    <Calendar size={20} />

                    التسليم

                  </span>

                  <strong>
                    {project.deliveryDate.toLocaleDateString("ar-DZ")}
                  </strong>

                </div>

              )}

            </div>

            <div className="mt-10 space-y-4">

              <a
                href="https://wa.me/213659100227"
                target="_blank"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"
              >
                <Phone size={20} />
                واتساب
              </a>

              {project.brochureUrl && (

                <a
                  href={project.brochureUrl}
                  target="_blank"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-500 py-4 font-bold text-[#08152B] transition hover:bg-yellow-400"
                >
                  <Download size={20} />
                  تحميل البروشور
                </a>

              )}

              <Link
                href="/projects"
                className="flex w-full items-center justify-center gap-3 rounded-2xl border py-4 font-bold transition hover:bg-slate-50"
              >
                <ArrowLeft size={18} />
                العودة للمشاريع
              </Link>

            </div>

          </div>

        </aside>

      </section>

      {/* ================= RELATED ================= */}

      {relatedProjects.length > 0 && (

        <section className="mx-auto max-w-7xl px-6 pb-28">

          <h2 className="mb-14 text-center text-5xl font-black text-[#08152B]">
            مشاريع مشابهة
          </h2>

          <div className="grid gap-8 lg:grid-cols-3">

            {relatedProjects.map((item) => (

              <Link
                key={item.id}
                href={`/projects/${item.slug}`}
                className="group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-3"
              >

                <div className="relative h-[270px] overflow-hidden">

                  {item.images.length > 0 ? (

                    <Image
                      src={item.images[0].url}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                  ) : (

                    <div className="flex h-full items-center justify-center bg-slate-100">
                      لا توجد صورة
                    </div>

                  )}

                </div>

                <div className="space-y-4 p-8">

                  <h3 className="text-2xl font-black text-[#08152B]">
                    {item.title}
                  </h3>

                  <p className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    {item.city} • {item.state}
                  </p>

                  <div className="flex items-center justify-between">

                    <span className="font-black text-yellow-600">
                      {item.price ?? "حسب الطلب"}
                    </span>

                    <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
                      {item.status}
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>

      )}

    </main>

  );
}
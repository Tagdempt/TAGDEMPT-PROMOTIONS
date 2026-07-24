import InvestorForm from "@/components/InvestorForm";

export default function InvestorCenter() {
  return (
    <main className="min-h-screen bg-[#F7F8FA]">
      {/* HERO */}
      <section className="bg-[#08152b] py-24 px-6 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-8 text-6xl font-black text-yellow-400">
            مركز المستثمر
          </h1>

          <p className="mx-auto max-w-4xl text-xl leading-10 text-gray-200">
            جميع المعلومات التي يحتاجها المستثمر أو الشريك في مكان واحد.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <InvestorForm />
        </div>
      </section>

      {/* CARDS */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">🏢</div>
            <h2 className="mb-3 text-2xl font-bold">نبذة عن المؤسسة</h2>
            <p>التعريف الكامل بـ TAGDEMPT PROMOTIONS.</p>
          </a>

          <a
            href="#"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">📊</div>
            <h2 className="mb-3 text-2xl font-bold">عرض المستثمر</h2>
            <p>Investor Deck.</p>
          </a>

          <a
            href="/projects"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">🏗️</div>
            <h2 className="mb-3 text-2xl font-bold">المشاريع</h2>
            <p>المشاريع الحالية والمستقبلية.</p>
          </a>

          <a
            href="#"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">🤝</div>
            <h2 className="mb-3 text-2xl font-bold">الشراكات</h2>
            <p>نماذج التعاون والاستثمار.</p>
          </a>

          <a
            href="/governance"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">⚖️</div>
            <h2 className="mb-3 text-2xl font-bold">الحوكمة</h2>
            <p>سياسات الشفافية والإدارة.</p>
          </a>

          <a
            href="/contact"
            className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
          >
            <div className="mb-5 text-5xl">📅</div>
            <h2 className="mb-3 text-2xl font-bold">طلب اجتماع</h2>
            <p>حجز اجتماع مع إدارة المؤسسة.</p>
          </a>
        </div>
      </section>
    </main>
  );
}
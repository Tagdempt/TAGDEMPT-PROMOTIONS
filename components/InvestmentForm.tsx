export default function InvestmentForm() {
  return (
    <section className="py-24 px-6 bg-white">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-black text-center text-[#08152b] mb-12">
          طلب شراكة أو استثمار
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="الاسم الكامل"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="الدولة"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="قيمة الاستثمار التقريبية"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={6}
            placeholder="اكتب رسالتك..."
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-400 py-4 rounded-xl font-bold text-black"
          >
            إرسال الطلب
          </button>

        </form>

      </div>

    </section>
  );
}
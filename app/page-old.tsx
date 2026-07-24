import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <Image
        src="/logo.png"
        alt="TAGDEMPT PROMOTIONS"
        width={220}
        height={220}
        priority
      />

      <h1 className="mt-8 text-5xl md:text-7xl font-bold text-yellow-500 text-center">
        TAGDEMPT PROMOTIONS
      </h1>

      <h2 className="mt-4 text-2xl text-center">
        مؤسسة الترقية العقارية
      </h2>

      <p className="mt-8 max-w-3xl text-center text-gray-300 text-lg">
        نبني المستقبل بمشاريع عقارية تجمع بين الجودة والابتكار والاستدامة.
      </p>

      <a
        href="https://wa.me/213659100227"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 rounded-xl bg-green-600 px-8 py-4 font-bold hover:bg-green-700 transition"
      >
        💬 تواصل عبر واتساب
      </a>

      <a
        href="https://wa.me/213659100227"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-600 px-5 py-4 text-white font-bold shadow-lg hover:bg-green-700 transition"
      >
        💬 واتساب
      </a>

    </main>
  );
}
"use client";

import { useActionState } from "react";
import { createInvestor } from "@/app/actions/investor";

const initialState = {
  success: false,
  message: "",
};

export default function InvestorForm() {
  const [state, formAction, pending] = useActionState(
    createInvestor,
    initialState
  );

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">
      <h2 className="mb-8 text-center text-4xl font-black text-[#08152B]">
        طلب استثمار
      </h2>

      <form action={formAction} className="space-y-6">
        <input
          name="name"
          type="text"
          placeholder="الاسم الكامل"
          required
          className="w-full rounded-xl border p-4"
        />

        <input
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
          required
          className="w-full rounded-xl border p-4"
        />

        <input
          name="phone"
          type="text"
          placeholder="رقم الهاتف"
          className="w-full rounded-xl border p-4"
        />

        <input
          name="company"
          type="text"
          placeholder="الشركة"
          className="w-full rounded-xl border p-4"
        />

        <input
          name="investment"
          type="text"
          placeholder="قيمة الاستثمار"
          className="w-full rounded-xl border p-4"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="رسالتك"
          className="w-full rounded-xl border p-4"
        />

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-xl bg-[#08152B] py-4 font-bold text-white hover:bg-yellow-500 hover:text-[#08152B] disabled:opacity-50"
        >
          {pending ? "جارٍ الإرسال..." : "إرسال الطلب"}
        </button>

        {state.message && (
          <p
            className={`text-center font-semibold ${
              state.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
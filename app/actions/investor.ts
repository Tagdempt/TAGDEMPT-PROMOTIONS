"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type InvestorState = {
  success: boolean;
  message: string;
};

export async function createInvestor(
  prevState: InvestorState,
  formData: FormData
): Promise<InvestorState> {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const company = String(formData.get("company") ?? "");
  const investment = String(formData.get("investment") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!name.trim() || !email.trim()) {
    return {
      success: false,
      message: "الاسم والبريد الإلكتروني مطلوبان.",
    };
  }

  try {
    await prisma.investor.create({
      data: {
        name,
        email,
        phone,
        company,
        investment,
        message,
      },
    });

    revalidatePath("/admin/investment");

    return {
      success: true,
      message: "تم إرسال الطلب بنجاح.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "حدث خطأ أثناء حفظ البيانات.",
    };
  }
}
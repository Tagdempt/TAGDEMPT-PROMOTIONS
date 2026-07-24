import type { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
  },

  providers: [],

  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;

      // السماح بصفحة تسجيل الدخول
      if (pathname === "/admin/login") {
        return true;
      }

      // حماية جميع صفحات الإدارة
      if (pathname.startsWith("/admin")) {
        return !!auth?.user;
      }

      // السماح بباقي صفحات الموقع
      return true;
    },
  },
};

export default authConfig;
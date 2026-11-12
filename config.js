// ============================================================
// تنظیمات اپ مدیر / إعدادات تطبيق المدير
// فقط همین فایل را ویرایش کنید / عدّلوا هذا الملف فقط
// ============================================================
window.MANAGER_CONFIG = {
  // همان آدرس /exec که در اپ سرپرست‌ها گذاشتید
  // نفس رابط /exec المستخدم في تطبيق المشرفين
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycby8woPa32vTVcT_YRd9JauE2yACxjPvYM0b4ScFgGEz4Mui3lR18FQPRJzPfJxemiig/exec",

  // حساب مدیر. id باید با کلید داخل MANAGERS در apps-script.gs یکی باشد
  // رمز در apps-script.gs تنظیم می‌شود، نه اینجا
  // حساب المدير. id يجب أن يطابق المفتاح داخل MANAGERS في apps-script.gs
  managers: [
    { id: "m1", fa: "مدیر", ar: "المدير" }
  ]
};

    مجلد src/
/my-lms-project
├── node_modules/
├── public/                # صور، أيقونات، ملفات ثابتة (Favicons, assets)
├── src/
│   ├── app/               # App Router: ملفات الـ pages والـ layouts
│   ├── components/        # المكونات القابلة لإعادة الاستخدام (Reusable UI Components)
│   ├── lib/               # (Library/Utilities) الكود المنطقي (Business Logic)، الخدمات، الدوال 
│   ├── types/             # تعريفات TypeScript العامة (Global Types/Interfaces)
│   ├── styles/            # ملفات الـ CSS/Sass/Tailwind
│   └── hooks/             # الـ React Hooks المخصصة (Custom Hooks)
├── .env.local             # متغيرات البيئة
├── next.config.js
├── package.json
├── tsconfig.json
└── ...


تقسيم جزء الـ app/
/src/app
├── (student)/             # مجموعة مسارات الطالب
│   ├── dashboard/         # /dashboard - الصفحة الرئيسية للطالب
│   │   └── page.tsx
│   ├── courses/           # /courses
│   ├── exams/             # /exams
│   ├── profile/           # /profile
│   └── layout.tsx         # Layout مخصص لصفحات الطالب (Student Layout)
├── (teacher)/             # مجموعة مسارات المدرس
│   ├── dashboard/         # /dashboard/teacher - (أو /teacher/dashboard إذا لم تستخدم المجموعات)
│   ├── courses/manage/    # لرفع وإدارة الكورسات
│   ├── students/          # لتقييمات الطلاب وإدارة الجروبات
│   ├── analytics/         # تقارير المدرس
│   └── layout.tsx         # Layout مخصص لصفحات المدرس (Teacher Dashboard Layout)
├── login/
├── register/
├── page.tsx               # الصفحة الرئيسية للمنصة (Home Page)
├── layout.tsx             # Layout العام (Root Layout)
└── middleware.ts          # لتوجيه المستخدمين بناءً على الدور (مثلاً: التحقق من الصلاحيات)


تنظيم الـ Components

/src/components
├── ui/                    # المكونات الذرية (Atomic) - (Button, Input, Card, Modal)
├── common/                # المكونات المشتركة بين كل التطبيق (Header, Footer, Navigation)
├── student/               # مكونات خاصة بواجهة الطالب (StudentVideoPlayer, ExamHistory)
├── teacher/               # مكونات خاصة بواجهة المدرس (CourseUploadForm, StudentRatingChart)
└── layouts/


/src/lib
├── api/                   # طبقة خدمات API (API Service Layer)
│   ├── courseService.ts   # دوال لاستدعاء الـ API الخاص بالكورسات (fetchCourses, createCourse)
│   ├── studentService.ts  # دوال لاستدعاء الـ API الخاص بالطالب
│   └── teacherService.ts  # دوال لاستدعاء الـ API الخاص بالمدرس
├── utils/                 # دوال مساعدة عامة (Formatters, Validators, Date Helpers)
├── auth/                  # منطق المصادقة (Authentication) (Sign-in, Sign-out)
└── z-schema/


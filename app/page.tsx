
'use client';

import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import StatsCards from '../components/Dashboard/StatsCards';
import ProjectChart from '../components/Dashboard/ProjectChart';
import RecentProjects from '../components/Dashboard/RecentProjects';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30" dir="rtl">
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section with Background */}
            <div className="relative mb-10 rounded-3xl overflow-hidden shadow-2xl" 
                 style={{
                   backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20city%20infrastructure%20development%20project%20management%20dashboard%20with%20construction%20cranes%20and%20buildings%20in%20Eastern%20Province%20Saudi%20Arabia%20Dammam%20cityscape%20professional%20blue%20clean%20background%20overlook%20view&width=1200&height=400&seq=hero-dashboard&orientation=landscape')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/80 via-slate-900/60 to-blue-900/70"></div>
              <div className="relative z-10 p-12 text-white">
                <h1 className="text-5xl font-bold mb-4 text-gradient-blue text-shadow-lg">لوحة التحكم الرئيسية</h1>
                <p className="text-slate-200 text-xl font-semibold text-shadow">نظرة شاملة على أداء المشاريع في أمانة المنطقة الشرقية</p>
                <div className="mt-6 flex gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold text-gradient-green">156</span>
                    <span className="text-slate-200 mr-2">مشروع نشط</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold text-gradient-orange">2.1B</span>
                    <span className="text-slate-200 mr-2">ريال استثمار</span>
                  </div>
                </div>
              </div>
            </div>

            <StatsCards />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              <ProjectChart />
              
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-gradient-blue text-shadow">التوزيع حسب النوع</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-blue-50 to-transparent rounded-xl border-r-4 border-blue-500">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
                      <span className="text-gray-700 font-semibold">مشاريع البنية التحتية</span>
                    </div>
                    <span className="font-bold text-2xl text-blue-600 text-shadow">45</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-green-50 to-transparent rounded-xl border-r-4 border-green-500">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg"></div>
                      <span className="text-gray-700 font-semibold">مشاريع الحدائق والترفيه</span>
                    </div>
                    <span className="font-bold text-2xl text-green-600 text-shadow">32</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-orange-50 to-transparent rounded-xl border-r-4 border-orange-500">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-lg"></div>
                      <span className="text-gray-700 font-semibold">مشاريع الطرق والنقل</span>
                    </div>
                    <span className="font-bold text-2xl text-orange-600 text-shadow">28</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-purple-50 to-transparent rounded-xl border-r-4 border-purple-500">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
                      <span className="text-gray-700 font-semibold">مشاريع المباني العامة</span>
                    </div>
                    <span className="font-bold text-2xl text-purple-600 text-shadow">25</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-l from-red-50 to-transparent rounded-xl border-r-4 border-red-500">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg"></div>
                      <span className="text-gray-700 font-semibold">مشاريع الخدمات البيئية</span>
                    </div>
                    <span className="font-bold text-2xl text-red-600 text-shadow">26</span>
                  </div>
                </div>
              </div>
            </div>

            <RecentProjects />

            {/* Project Gallery Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-gradient-blue text-shadow">معرض المشاريع المميزة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Dammam%20corniche%20waterfront%20development%20project%20construction%20site%20with%20cranes%20and%20modern%20buildings%20along%20Arabian%20Gulf%20coast%20blue%20sky%20professional%20photography&width=400&height=250&seq=project-1&orientation=landscape"
                    alt="تطوير كورنيش الدمام"
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 left-6 text-white">
                    <h4 className="font-bold text-xl mb-2 text-shadow-lg">تطوير كورنيش الدمام</h4>
                    <p className="text-blue-200 font-semibold text-shadow">مشروع تطوير الواجهة البحرية الحديثة</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="https://readdy.ai/api/search-image?query=King%20Fahd%20Park%20construction%20in%20Dammam%20Saudi%20Arabia%20with%20landscaping%20green%20areas%20playground%20equipment%20and%20palm%20trees%20clean%20modern%20design%20construction%20workers&width=400&height=250&seq=project-2&orientation=landscape"
                    alt="حديقة الملك فهد"
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 left-6 text-white">
                    <h4 className="font-bold text-xl mb-2 text-shadow-lg">حديقة الملك فهد</h4>
                    <p className="text-green-200 font-semibold text-shadow">مشروع إنشاء الحدائق العامة المتطورة</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="https://readdy.ai/api/search-image?query=road%20construction%20and%20maintenance%20project%20in%20Dammam%20Saudi%20Arabia%20with%20asphalt%20paving%20machines%20construction%20equipment%20and%20workers%20modern%20highway%20infrastructure&width=400&height=250&seq=project-3&orientation=landscape"
                    alt="صيانة الطرق"
                    className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 left-6 text-white">
                    <h4 className="font-bold text-xl mb-2 text-shadow-lg">صيانة الطريق الدائري</h4>
                    <p className="text-orange-200 font-semibold text-shadow">مشروع تطوير الطرق والمواصلات</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Map Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-gradient-blue text-shadow">خريطة المشاريع التفاعلية - أمانة المنطقة الشرقية</h3>
              <div className="relative rounded-2xl overflow-hidden shadow-inner">
                <img 
                  src="https://readdy.ai/api/search-image?query=Eastern%20Province%20Saudi%20Arabia%20administrative%20map%20showing%20Dammam%20city%20with%20project%20locations%20marked%20infrastructure%20development%20points%20clean%20professional%20cartographic%20style%20blue%20and%20green%20colors&width=800&height=400&seq=regional-map&orientation=landscape"
                  alt="خريطة أمانة المنطقة الشرقية"
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4 text-gradient-blue">مفتاح الخريطة</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-semibold">مشاريع مكتملة</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-semibold">قيد التنفيذ</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full shadow-sm"></div>
                      <span className="text-sm text-gray-700 font-semibold">في المرحلة التخطيطية</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
      
      <Sidebar />
    </div>
  );
}

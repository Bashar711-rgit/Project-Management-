
'use client';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Project Management Visual Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient-blue text-shadow-lg">إدارة المشاريع الذكية</h2>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg font-semibold">
                نستخدم أحدث التقنيات في متابعة وإدارة المشاريع لضمان تحقيق أعلى معايير الجودة والكفاءة في خدمة المواطنين وتطوير البنية التحتية للمنطقة الشرقية.
              </p>
              <div className="flex gap-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-gradient-blue text-shadow">156</div>
                  <div className="text-slate-300 text-lg font-semibold">مشروع نشط</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-gradient-green text-shadow">89</div>
                  <div className="text-slate-300 text-lg font-semibold">مشروع مكتمل</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-gradient-orange text-shadow">2.1B</div>
                  <div className="text-slate-300 text-lg font-semibold">ريال استثمار</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20project%20management%20dashboard%20interface%20on%20computer%20screens%20showing%20construction%20projects%20charts%20and%20analytics%20in%20government%20office%20professional%20Saudi%20Arabian%20setting%20blue%20themed%20technology&width=600&height=350&seq=footer-management&orientation=landscape"
                alt="إدارة المشاريع"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Regional Coverage Map */}
        <div className="mb-16 bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Eastern%20Province%20Saudi%20Arabia%20map%20with%20Dammam%20Khobar%20Dhahran%20cities%20marked%20administrative%20boundaries%20infrastructure%20projects%20locations%20pins%20professional%20government%20cartographic%20style&width=500&height=400&seq=footer-map&orientation=squarish"
                alt="خريطة المنطقة الشرقية"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
              />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4 text-lg text-gradient-blue">نغطي كامل المنطقة</h4>
                <div className="space-y-2 text-sm text-gray-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>الدمام</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>الخبر</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>الظهران</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>القطيف</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>الجبيل</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-green text-shadow">تغطية شاملة للمنطقة الشرقية</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed font-semibold">
                نشرف على تنفيذ ومتابعة المشاريع التنموية في جميع أنحاء المنطقة الشرقية، من الدمام إلى الجبيل، لضمان التطوير المتوازن والشامل للمنطقة.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-slate-700 to-blue-700 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-gradient-blue text-shadow">12</div>
                  <div className="text-slate-300 text-lg font-semibold">مدينة</div>
                </div>
                <div className="bg-gradient-to-r from-slate-700 to-green-700 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-gradient-green text-shadow">45</div>
                  <div className="text-slate-300 text-lg font-semibold">حي سكني</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient-blue text-shadow">أمانة المنطقة الشرقية</h3>
            <p className="text-slate-300 leading-relaxed text-lg font-semibold">
              نسعى لتقديم أفضل الخدمات للمواطنين وتطوير البنية التحتية بأعلى معايير الجودة والكفاءة.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient-green text-shadow">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <span className="text-slate-300 font-semibold text-lg">+966 13 123 4567</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <i className="ri-mail-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <span className="text-slate-300 font-semibold text-lg">info@eastern-municipality.gov.sa</span>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                  <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-white"></i>
                </div>
                <span className="text-slate-300 font-semibold text-lg">الدمام، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient-orange text-shadow">تابعونا</h3>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:transform hover:scale-110">
                <i className="ri-twitter-line text-white w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-14 h-14 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center hover:from-blue-900 hover:to-blue-950 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:transform hover:scale-110">
                <i className="ri-facebook-line text-white w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-14 h-14 bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl flex items-center justify-center hover:from-pink-700 hover:to-pink-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:transform hover:scale-110">
                <i className="ri-instagram-line text-white w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:transform hover:scale-110">
                <i className="ri-youtube-line text-white w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-slate-700/50 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-lg font-semibold">
            © 2024 أمانة المنطقة الشرقية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

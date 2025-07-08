
'use client';

import { useState } from 'react';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notifications = [
    { id: 1, title: 'مشروع تطوير الكورنيش متأخر', type: 'warning', time: 'منذ ساعة' },
    { id: 2, title: 'تم اكتمال مشروع حديقة الملك فهد', type: 'success', time: 'منذ 3 ساعات' },
    { id: 3, title: 'شكوى جديدة حول مشروع الطريق الدائري', type: 'info', time: 'منذ 5 ساعات' },
  ];

  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-100 px-8 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <i className="ri-government-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gradient-blue text-shadow">أمانة المنطقة الشرقية</h1>
              <p className="text-slate-600 font-semibold">نظام إدارة ومتابعة المشاريع</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600 hover:from-blue-100 hover:to-blue-200 rounded-xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <i className="ri-notification-line text-xl w-6 h-6 flex items-center justify-center"></i>
              <span className="absolute -top-2 -left-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg">
                3
              </span>
            </button>

            {showNotifications && (
              <div className="absolute left-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
                  <h3 className="font-bold text-xl text-gradient-blue text-shadow">الإشعارات الجديدة</h3>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-5 border-b border-gray-50 hover:bg-gradient-to-l hover:from-gray-50 hover:to-transparent cursor-pointer transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-3 h-3 rounded-full mt-2 shadow-sm ${
                          notification.type === 'warning' ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                          notification.type === 'success' ? 'bg-gradient-to-r from-green-500 to-green-600' : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900 text-shadow-sm">{notification.title}</p>
                          <p className="text-xs text-gray-500 mt-2 font-medium">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-l hover:from-gray-50 hover:to-blue-50 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-right">
                <div className="text-gray-900 font-bold text-lg text-shadow-sm">صالح بن مطلق الأصقه</div>
                <div className="text-blue-600 text-sm font-semibold">متدرب - إدارة عامة</div>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-user-line text-white text-lg w-6 h-6 flex items-center justify-center"></i>
              </div>
              <i className="ri-arrow-down-s-line text-gray-500 w-5 h-5 flex items-center justify-center"></i>
            </button>

            {showUserMenu && (
              <div className="absolute left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-2xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <i className="ri-user-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 text-shadow">صالح بن مطلق بن صالح الأصقه</h3>
                    <p className="text-blue-600 font-semibold mt-1">متدرب - إدارة عامة</p>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-gradient-to-l from-blue-50 to-transparent p-4 rounded-xl border-r-4 border-blue-500">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-semibold">الرقم الأكاديمي:</span>
                      <span className="text-blue-600 font-bold">223067038</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-l from-green-50 to-transparent p-4 rounded-xl border-r-4 border-green-500">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-semibold">الجوال:</span>
                      <span className="text-green-600 font-bold">0507778837</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-l from-purple-50 to-transparent p-4 rounded-xl border-r-4 border-purple-500">
                    <div>
                      <span className="text-gray-600 font-semibold">البريد الجامعي:</span>
                      <div className="text-purple-600 font-bold break-all mt-1">223067038@student.kfu.edu.sa</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-l from-orange-50 to-transparent p-4 rounded-xl border-r-4 border-orange-500">
                    <div>
                      <span className="text-gray-600 font-semibold">المشرف المباشر:</span>
                      <div className="text-orange-600 font-bold mt-1">سعيد بن علي المشجري</div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <button className="w-full text-right px-5 py-3 text-gray-700 hover:bg-gradient-to-l hover:from-blue-50 hover:to-transparent rounded-xl cursor-pointer whitespace-nowrap font-semibold transition-all duration-300">
                    الملف الشخصي
                  </button>
                  <button className="w-full text-right px-5 py-3 text-red-600 hover:bg-gradient-to-l hover:from-red-50 hover:to-transparent rounded-xl cursor-pointer whitespace-nowrap font-semibold transition-all duration-300">
                    تسجيل الخروج
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

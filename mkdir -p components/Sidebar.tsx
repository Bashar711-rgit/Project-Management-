
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'لوحة التحكم', href: '/', icon: 'ri-dashboard-line' },
    { name: 'المشاريع', href: '/projects', icon: 'ri-building-line' },
    { name: 'التقارير', href: '/reports', icon: 'ri-file-chart-line' },
    { name: 'الشكاوى', href: '/complaints', icon: 'ri-feedback-line' },
    { name: 'المستخدمون', href: '/users', icon: 'ri-user-line' },
    { name: 'الإعدادات', href: '/settings', icon: 'ri-settings-line' },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white w-72 min-h-screen p-6 shadow-2xl">
      <div className="mb-10">
        <div className="text-center py-6 border-b border-slate-700/50">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <i className="ri-building-4-line text-2xl text-white w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h2 className="text-xl font-bold text-gradient-blue text-shadow">
            نظام إدارة المشاريع
          </h2>
          <p className="text-slate-300 text-sm mt-2">أمانة المنطقة الشرقية</p>
        </div>
      </div>
      
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap group ${
              pathname === item.href
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                : 'text-slate-300 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600 hover:text-white hover:shadow-md hover:transform hover:scale-102'
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              pathname === item.href 
                ? 'bg-white/20 shadow-inner' 
                : 'bg-slate-700/50 group-hover:bg-slate-600/70'
            }`}>
              <i className={`${item.icon} text-lg w-5 h-5 flex items-center justify-center`}></i>
            </div>
            <span className="font-semibold text-shadow-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-12 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20">
        <div className="text-center">
          <i className="ri-notification-badge-line text-2xl text-blue-400 mb-2 w-6 h-6 flex items-center justify-center mx-auto"></i>
          <h4 className="font-bold text-white mb-1">إشعارات جديدة</h4>
          <p className="text-slate-300 text-xs">لديك 3 تحديثات جديدة</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

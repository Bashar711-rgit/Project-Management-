
'use client';

import Link from 'next/link';

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      name: 'تطوير كورنيش الدمام',
      contractor: 'شركة البناء المتقدم',
      status: 'قيد التنفيذ',
      progress: 75,
      budget: '15,000,000',
      dueDate: '2024-08-15',
      statusColor: 'text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200'
    },
    {
      id: 2,
      name: 'إنشاء حديقة الملك فهد',
      contractor: 'مؤسسة الحدائق الخضراء',
      status: 'مكتمل',
      progress: 100,
      budget: '8,500,000',
      dueDate: '2024-06-30',
      statusColor: 'text-green-700 bg-gradient-to-r from-green-100 to-green-200'
    },
    {
      id: 3,
      name: 'صيانة الطريق الدائري',
      contractor: 'شركة الطرق السريعة',
      status: 'متأخر',
      progress: 45,
      budget: '12,000,000',
      dueDate: '2024-07-20',
      statusColor: 'text-red-700 bg-gradient-to-r from-red-100 to-red-200'
    },
    {
      id: 4,
      name: 'تجديد مبنى البلدية',
      contractor: 'مقاولات النجاح',
      status: 'قيد التنفيذ',
      progress: 60,
      budget: '6,800,000',
      dueDate: '2024-09-10',
      statusColor: 'text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200'
    },
    {
      id: 5,
      name: 'إنارة شوارع حي الخليج',
      contractor: 'شركة الإنارة الحديثة',
      status: 'قيد التنفيذ',
      progress: 30,
      budget: '3,200,000',
      dueDate: '2024-08-05',
      statusColor: 'text-blue-700 bg-gradient-to-r from-blue-100 to-blue-200'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-10">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gradient-blue text-shadow">المشاريع الحديثة</h3>
        <Link href="/projects" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 cursor-pointer whitespace-nowrap font-bold shadow-lg hover:shadow-xl transition-all duration-300">
          عرض جميع المشاريع
        </Link>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gradient-to-l from-gray-50 to-blue-50">
              <th className="text-right py-5 px-6 font-bold text-gray-800 text-lg">اسم المشروع</th>
              <th className="text-right py-5 px-6 font-bold text-gray-800 text-lg">الجهة المنفذة</th>
              <th className="text-right py-5 px-6 font-bold text-gray-800 text-lg">الحالة</th>
              <th className="text-right py-5 px-6 font-bold text-gray-800 text-lg">التقدم</th>
              <th className="text-right py-5 px-6 font-bold text-gray-800 text-lg">الميزانية</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id} className={`border-b border-gray-100 hover:bg-gradient-to-l hover:from-blue-50/50 hover:to-transparent transition-all duration-300 ${index % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
                <td className="py-6 px-6">
                  <Link href={`/projects/${project.id}`} className="font-bold text-xl text-gray-900 hover:text-blue-600 cursor-pointer text-shadow-sm transition-colors duration-300">
                    {project.name}
                  </Link>
                </td>
                <td className="py-6 px-6 text-gray-700 font-semibold text-lg">{project.contractor}</td>
                <td className="py-6 px-6">
                  <span className={`px-5 py-2 rounded-xl text-sm font-bold ${project.statusColor} whitespace-nowrap shadow-sm`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-6 px-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-gray-200 rounded-full h-3 shadow-inner">
                      <div 
                        className={`h-3 rounded-full shadow-sm transition-all duration-500 ${
                          project.progress === 100 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                          project.progress >= 70 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-orange-500 to-orange-600'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-gray-700 whitespace-nowrap text-shadow-sm">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-6 px-6 text-gray-700 whitespace-nowrap font-bold text-lg">{project.budget} ريال</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentProjects;

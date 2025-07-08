
'use client';

const StatsCards = () => {
  const stats = [
    {
      title: 'إجمالي المشاريع',
      value: '156',
      change: '+12%',
      changeType: 'positive',
      icon: 'ri-building-line',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      title: 'المشاريع المكتملة',
      value: '89',
      change: '+8%',
      changeType: 'positive',
      icon: 'ri-checkbox-circle-line',
      color: 'from-green-500 to-green-700',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      title: 'المشاريع قيد التنفيذ',
      value: '52',
      change: '+5%',
      changeType: 'positive',
      icon: 'ri-time-line',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      title: 'المشاريع المتأخرة',
      value: '15',
      change: '-3%',
      changeType: 'negative',
      icon: 'ri-error-warning-line',
      color: 'from-red-500 to-red-700',
      bgColor: 'from-red-50 to-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      {stats.map((stat, index) => (
        <div key={index} className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105`}>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-gray-700 text-lg font-bold mb-3 text-shadow-sm">{stat.title}</p>
              <p className="text-4xl font-bold text-gray-900 mb-4 text-shadow">{stat.value}</p>
              <div className="flex items-center">
                <span className={`text-lg font-bold ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                } text-shadow-sm`}>
                  {stat.change}
                </span>
                <span className="text-gray-600 text-base font-semibold mr-3">من الشهر الماضي</span>
              </div>
            </div>
            <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
              <i className={`${stat.icon} text-white text-2xl w-8 h-8 flex items-center justify-center`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

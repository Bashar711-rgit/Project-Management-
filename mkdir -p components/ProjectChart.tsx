
'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProjectChart = () => {
  const data = [
    { name: 'يناير', مكتملة: 12, 'قيد التنفيذ': 8, متأخرة: 2 },
    { name: 'فبراير', مكتملة: 15, 'قيد التنفيذ': 10, متأخرة: 3 },
    { name: 'مارس', مكتملة: 18, 'قيد التنفيذ': 12, متأخرة: 1 },
    { name: 'أبريل', مكتملة: 22, 'قيد التنفيذ': 15, متأخرة: 4 },
    { name: 'مايو', مكتملة: 25, 'قيد التنفيذ': 18, متأخرة: 2 },
    { name: 'يونيو', مكتملة: 28, 'قيد التنفيذ': 20, متأخرة: 5 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gradient-blue text-shadow">تطور المشاريع الشهري</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm"></div>
            <span className="text-lg font-semibold text-gray-700">مكتملة</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm"></div>
            <span className="text-lg font-semibold text-gray-700">قيد التنفيذ</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-sm"></div>
            <span className="text-lg font-semibold text-gray-700">متأخرة</span>
          </div>
        </div>
      </div>
      
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.2}/>
              </linearGradient>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2}/>
              </linearGradient>
              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              style={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                fill: '#374151'
              }}
            />
            <YAxis 
              style={{ 
                fontSize: '14px', 
                fontWeight: 'bold',
                fill: '#374151'
              }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="مكتملة" 
              stackId="1"
              stroke="#10B981" 
              strokeWidth={3}
              fill="url(#greenGradient)"
            />
            <Area 
              type="monotone" 
              dataKey="قيد التنفيذ" 
              stackId="1"
              stroke="#3B82F6" 
              strokeWidth={3}
              fill="url(#blueGradient)"
            />
            <Area 
              type="monotone" 
              dataKey="متأخرة" 
              stackId="1"
              stroke="#EF4444" 
              strokeWidth={3}
              fill="url(#redGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectChart;

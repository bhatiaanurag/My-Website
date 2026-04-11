import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

export default function DataChart() {
  return (
    <div style={{ width: "100%", height: "150px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            fill="url(#colorValue)"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fillOpacity={0.6 + (index * 0.1)} />
            ))}
          </Bar>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--background))', 
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '10px'
            }}
            cursor={{ fill: 'transparent' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

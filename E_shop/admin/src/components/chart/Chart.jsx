import "./chart.css"
import { LineChart, Line, XAxis,  Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey }) {

    return (
      <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
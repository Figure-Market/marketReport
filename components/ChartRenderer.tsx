// /components/ChartRenderer.tsx
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { ChartSpec } from "@/lib/marketReportData";

type Props = { spec: ChartSpec };

export default function ChartRenderer({ spec }: Props) {
  const height = spec.height ?? 280;

  const DEFAULTS = ["#2563eb","#16a34a","#f59e0b","#ef4444","#8b5cf6","#06b6d4","#94a3b8"];
  const COLORS = spec.colors ?? DEFAULTS;

  if (spec.type === "bar") {
    // stacked if multiple series provided
    const isStacked = (spec.series?.length ?? 0) > 1;
    return (
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800">{spec.title}</div>
        {spec.description && (
          <p className="text-sm text-gray-500 mb-2">{spec.description}</p>
        )}
        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={spec.data}>
              <CartesianGrid strokeDasharray="3 3" />
              {spec.xKey && <XAxis dataKey={spec.xKey} />}
              <YAxis />
              <Tooltip />
              <Legend />
              {isStacked
                ? spec.series!.map((s, i) => (
                    <Bar
                      key={s.key}
                      dataKey={s.key}
                      name={s.name}
                      stackId="a"
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))
                : (
                  <Bar
                    dataKey={spec.yKey!}
                    fill={COLORS[0]}
                    name={spec.title}
                  />
                )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  if (spec.type === "line") {
    return (
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800">{spec.title}</div>
        {spec.description && (
          <p className="text-sm text-gray-500 mb-2">{spec.description}</p>
        )}
        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={spec.data}>
              <CartesianGrid strokeDasharray="3 3" />
              {spec.xKey && <XAxis dataKey={spec.xKey} />}
              <YAxis />
              <Tooltip />
              <Legend />
              {spec.series && spec.series.length > 0 ? (
                spec.series.map((s, i) => (
                  <Line
                    key={s.key}
                    type="monotone"
                    dataKey={s.key}
                    name={s.name}
                    stroke={COLORS[i % COLORS.length]}
                  />
                ))
              ) : (
                <Line
                  type="monotone"
                  dataKey={spec.yKey!}
                  name={spec.title}
                  stroke={COLORS[0]}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  if (spec.type === "area") {
    return (
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800">{spec.title}</div>
        {spec.description && (
          <p className="text-sm text-gray-500 mb-2">{spec.description}</p>
        )}
        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={spec.data}>
              <CartesianGrid strokeDasharray="3 3" />
              {spec.xKey && <XAxis dataKey={spec.xKey} />}
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey={spec.yKey!}
                name={spec.title}
                fill={COLORS[0]}
                stroke={COLORS[0]}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  if (spec.type === "pie") {
    return (
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800">{spec.title}</div>
        {spec.description && (
          <p className="text-sm text-gray-500 mb-2">{spec.description}</p>
        )}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={spec.data}
                dataKey={spec.valueKey!}
                nameKey={spec.nameKey!}
                outerRadius={100}
                label
              >
                {spec.data.map((_: any, i: number) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  if (spec.type === "radar") {
    return (
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800">{spec.title}</div>
        {spec.description && (
          <p className="text-sm text-gray-500 mb-2">{spec.description}</p>
        )}
        <div className="w-full h-[320px]">
          <ResponsiveContainer width="100%" height={height}>
            <RadarChart data={spec.data}>
              <PolarGrid />
              <PolarAngleAxis dataKey={spec.nameKey!} />
              <PolarRadiusAxis />
              <Radar
                name={spec.title}
                dataKey={spec.valueKey!}
                stroke={COLORS[0]}
                fill={COLORS[0]}
                fillOpacity={0.4}
              />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return null;
}

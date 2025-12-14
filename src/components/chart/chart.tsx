"use client";

import { Bar, BarChart } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  {
    month: "January",
    purple: 186,
    green: 80,
    blue: 100,
    pink: 120,
    orange: 140,
  },
];

const chartConfig = {
  purple: {
    label: "Purple",
    color: "#96ff2f",
  },
  green: {
    label: "Green",
    color: "#7623e8",
  },
  blue: {
    label: "Blue",
    color: "#2dbeff",
  },
  pink: {
    label: "Pink",
    color: "#f43d75",
  },
  orange: {
    label: "Orange",
    color: "#ff882b",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] w-80 dark:bg-[#242831] bg-[#ffffff] rounded-xl"
    >
      <BarChart accessibilityLayer data={chartData}  barGap={20}>
        <Bar
          dataKey="purple"
          fill="var(--color-purple)"
          radius={4}
          barSize={20}
          style={{
            filter: "drop-shadow(0px 0px 1px  var(--color-purple))",
            margin: "20px",
          }}
        />
        <Bar
          dataKey="green"
          fill="var(--color-green)"
          radius={4}
          barSize={20}
          style={{
            filter: "drop-shadow(0px 2px 2px var(--color-green))",
            margin: "20px",
          }}
        />
        <Bar
          dataKey="blue"
          fill="var(--color-blue)"
          radius={4}
          barSize={20}
          style={{
            filter: "drop-shadow(0px 2px 2px var(--color-blue))",
            margin: "20px",
          }}
        />
        <Bar
          dataKey="pink"
          fill="var(--color-pink)"
          radius={4}
          barSize={20}
          style={{
            filter: "drop-shadow(0px 2px 2px var(--color-pink))",
            
          }}
        />
        <Bar
          dataKey="orange"
          fill="var(--color-orange)"
          radius={4}
          barSize={20}
          style={{
            filter: "drop-shadow(0px 2px 2px var(--color-orange))",
            margin: "20px",
          }}
        />
      </BarChart>
    </ChartContainer>
  );
}

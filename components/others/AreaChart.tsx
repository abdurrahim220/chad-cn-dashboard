"use client";

import { data } from "@/lib/mocData";
import React from "react";
import {
  AreaChart as AreaGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";

export default function AreaChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <AreaGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={"total"}
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaGraph>
    </ResponsiveContainer>
  );
}

"use client";

import { data } from "@/lib/mocData";
import React from "react";
import {
  LineChart as LineGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from "recharts";


export default function LineChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <LineGraph data={data}>
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
        <Line type="monotone" dataKey={"total"} stroke="#8884d8" />
      </LineGraph>
    </ResponsiveContainer>
  );
}

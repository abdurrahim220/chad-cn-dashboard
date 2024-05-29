"use client";

import { data } from "@/lib/mocData";
import React from "react";
import {
  PieChart as PieGraph,
  ResponsiveContainer,
  Pie,
  Cell,
  Tooltip,
} from "recharts";


const COLORS = [
  "#8884d8",
  "#8dd1e1",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
  "#ff8042",
  "#ffbb28",
  "#ff7300",
  "#00c49f",
  "#0088fe",
  "#00a6b4",
];

export default function PieChart() {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <PieGraph>
        <Pie
          data={data}
          dataKey="total"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieGraph>
    </ResponsiveContainer>
  );
}

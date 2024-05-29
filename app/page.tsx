import AreaChart from "@/components/others/AreaChart";
import BarChart from "@/components/others/BarChart";
import Card, { CardContent } from "@/components/others/Card";
import LineChart from "@/components/others/LineChart";
import PieChart from "@/components/others/PieChart";
import SalesCard from "@/components/others/SalesCard";
import PageTitle from "@/components/shared/PageTitle";
import { cardData, uesrSalesData } from "@/lib/mocData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full transition-all gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cardData?.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>

        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {uesrSalesData.map((d, i) => (
            <SalesCard
              key={i}
              email={d.email}
              name={d.name}
              saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>

        <CardContent>
          <LineChart />
        </CardContent>
        <CardContent>
          <PieChart />
        </CardContent>
        <CardContent>
          <AreaChart />
        </CardContent>
      </section>
    </main>
  );
}

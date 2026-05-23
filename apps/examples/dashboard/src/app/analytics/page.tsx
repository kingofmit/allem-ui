"use client";

import {
  Card, CardHeader, CardBody,
  Badge,
  Tabs, TabList, Tab, TabPanel,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  ToastProvider,
} from "@allem-ui/react";
import { DashboardShell } from "../../components/DashboardShell";

const stats = [
  { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", up: true },
  { label: "Subscriptions", value: "2,350", change: "+180", up: true },
  { label: "Active Users", value: "12,234", change: "+19%", up: true },
  { label: "Bounce Rate", value: "21.3%", change: "-4.3%", up: false },
];

const monthlyData = [
  { month: "January", revenue: "$4,200", users: "1,020", conversion: "3.2%" },
  { month: "February", revenue: "$5,100", users: "1,180", conversion: "3.8%" },
  { month: "March", revenue: "$4,800", users: "1,340", conversion: "3.5%" },
  { month: "April", revenue: "$6,300", users: "1,520", conversion: "4.1%" },
  { month: "May", revenue: "$7,200", users: "1,890", conversion: "4.6%" },
  { month: "June", revenue: "$8,100", users: "2,100", conversion: "5.0%" },
];

const topPages = [
  { page: "/dashboard", views: "12,450", bounce: "18%", time: "4m 32s" },
  { page: "/products", views: "8,230", bounce: "24%", time: "3m 15s" },
  { page: "/pricing", views: "6,120", bounce: "32%", time: "2m 48s" },
  { page: "/blog", views: "5,890", bounce: "45%", time: "5m 10s" },
  { page: "/docs", views: "4,670", bounce: "22%", time: "6m 05s" },
];

function AnalyticsContent() {
  return (
    <DashboardShell active="/analytics" title="Analytics">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardBody>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                <Badge color={stat.up ? "success" : "danger"} size="sm">
                  {stat.change}
                </Badge>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Chart placeholder + breakdown */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <span className="font-semibold">Revenue Overview</span>
          </CardHeader>
          <CardBody>
            {/* Simple bar chart using divs */}
            <div className="flex items-end gap-3 h-48">
              {[35, 42, 40, 52, 60, 67, 72, 65, 78, 85, 80, 92].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-indigo-500 dark:bg-indigo-400 transition-all duration-500"
                    style={{ height: `${val}%`, minHeight: 4, opacity: 0.7 + (val / 300) }}
                  />
                  <span className="text-[10px] text-neutral-400">
                    {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <span className="font-semibold">Traffic Sources</span>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {[
                { source: "Organic Search", pct: 45, color: "#4f46e5" },
                { source: "Direct", pct: 25, color: "#10b981" },
                { source: "Social Media", pct: 18, color: "#f59e0b" },
                { source: "Referral", pct: 8, color: "#ec4899" },
                { source: "Email", pct: 4, color: "#8b5cf6" },
              ].map((item) => (
                <div key={item.source}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-neutral-600 dark:text-neutral-400">{item.source}</span>
                    <span className="font-medium">{item.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Tables */}
      <Card>
        <CardHeader>
          <span className="font-semibold">Performance</span>
        </CardHeader>
        <CardBody className="p-0">
          <Tabs>
            <TabList>
              <Tab id="monthly">Monthly Revenue</Tab>
              <Tab id="pages">Top Pages</Tab>
            </TabList>
            <TabPanel id="monthly" className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Users</TableHead>
                    <TableHead>Conversion</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyData.map((row) => (
                    <TableRow key={row.month}>
                      <TableCell className="font-medium">{row.month}</TableCell>
                      <TableCell>{row.revenue}</TableCell>
                      <TableCell>{row.users}</TableCell>
                      <TableCell>
                        <Badge variant="subtle" color="success" size="sm">{row.conversion}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
            <TabPanel id="pages" className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Bounce Rate</TableHead>
                    <TableHead>Avg. Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPages.map((row) => (
                    <TableRow key={row.page}>
                      <TableCell className="font-medium font-mono text-sm">{row.page}</TableCell>
                      <TableCell>{row.views}</TableCell>
                      <TableCell>
                        <Badge
                          variant="subtle"
                          size="sm"
                          color={parseInt(row.bounce) > 30 ? "danger" : "success"}
                        >
                          {row.bounce}
                        </Badge>
                      </TableCell>
                      <TableCell>{row.time}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabPanel>
          </Tabs>
        </CardBody>
      </Card>
    </DashboardShell>
  );
}

export default function AnalyticsPage() {
  return (
    <ToastProvider>
      <AnalyticsContent />
    </ToastProvider>
  );
}

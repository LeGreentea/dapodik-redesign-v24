"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const syncData = [
  { name: "Kalimantan Selatan", value: 99 },
  { name: "Jawa Tengah", value: 98 },
  { name: "D.I. Yogyakarta", value: 98 },
  { name: "Bali", value: 97 },
  { name: "Bangka Belitung", value: 97 },
]

const educationLevelData = [
  { name: "SD", value: 149804, color: "#3B82F6" },
  { name: "SMP", value: 43825, color: "#10B981" },
  { name: "SMA", value: 14951, color: "#F59E0B" },
  { name: "SMK", value: 14471, color: "#EF4444" },
  { name: "PAUD", value: 205323, color: "#8B5CF6" },
]

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]

export function DataVisualization() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">Visualisasi Data Pendidikan</h2>
          <p className="text-gray-600 text-lg">Representasi visual dari data pendidikan nasional</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top 5 Provinces Sync Rate */}
          <Card className="card-gradient shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">5 Provinsi Teratas - Tingkat Sinkronisasi</CardTitle>
              <p className="text-sm text-gray-600 mb-4">
                Kalimantan Selatan menjadi provinsi dengan tingkat sinkronisasi data tertinggi pada semester ini.
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={syncData}>
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} fontSize={12} />
                  <YAxis />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Education Level Distribution */}
          <Card className="card-gradient shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Distribusi Sekolah per Jenjang</CardTitle>
              <p className="text-sm text-gray-600 mb-4">
                PAUD merupakan jenjang dengan jumlah satuan pendidikan terbanyak secara nasional, mencakup 46% dari
                total.
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={educationLevelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#fff"
                    strokeWidth={2}
                  >
                    {educationLevelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value.toLocaleString(), "Jumlah Sekolah"]}
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

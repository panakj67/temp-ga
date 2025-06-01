"use client"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Home, BarChart2, MessageSquare, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Sample data for charts
const lineChartData = [
  { name: "Jan", first: 60, second: 80 },
  { name: "Feb", first: 40, second: 60 },
  { name: "Mar", first: 30, second: 40 },
  { name: "Apr", first: 50, second: 70 },
  { name: "May", first: 40, second: 30 },
  { name: "Jun", first: 30, second: 40 },
]

const barChartData = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 300 },
  { name: "Wed", value: 500 },
  { name: "Thu", value: 280 },
  { name: "Fri", value: 590 },
  { name: "Sat", value: 390 },
  { name: "Sun", value: 490 },
]

const mainScheduleData = [
  { name: "1", first: 50, second: 30 },
  { name: "2", first: 70, second: 40 },
  { name: "3", first: 30, second: 20 },
  { name: "4", first: 60, second: 30 },
  { name: "5", first: 40, second: 70 },
]

const monthlyBarData = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 200 },
  { name: "Mar", value: 300 },
  { name: "Apr", value: 400 },
  { name: "May", value: 500 },
  { name: "Jun", value: 600 },
]

const timelineData = [
  { value: "10" },
  { value: "20" },
  { value: "30" },
  { value: "40" },
  { value: "50" },
  { value: "60" },
  { value: "70" },
  { value: "80" },
  { value: "90" },
  { value: "100" },
  { value: "110" },
  { value: "120" },
  { value: "130" },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 bg-white flex flex-col items-center py-6 border-r">
        <div className="w-10 h-10 rounded-full bg-gray-200 mb-8 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Home className="w-6 h-6 text-blue-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <BarChart2 className="w-6 h-6 text-gray-400" />
          <MessageSquare className="w-6 h-6 text-gray-400" />
          <Users className="w-6 h-6 text-gray-400" />
          <Settings className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Schedule 1 */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">Schedule 1</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FF9F43"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="30.144"
                      transform="rotate(-90 50 50)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="100.48"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">88%</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Designation</span>
                  <div className="w-16 h-1 bg-blue-500"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Designation</span>
                  <div className="w-16 h-1 bg-orange-400"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule 2 */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">Schedule 2</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={[
                      { name: "1", value: 20 },
                      { name: "2", value: 80 },
                      { name: "3", value: 40 },
                      { name: "4", value: 60 },
                      { name: "5", value: 20 },
                    ]}
                  >
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#3B82F6", stroke: "#3B82F6" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between mt-4">
                <div className="text-xs text-gray-500">Designation</div>
                <div className="text-xs text-gray-500">Designation</div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule 3 */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">Schedule 3</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-xs mb-2">All Tracked</div>
              <div className="text-xl font-bold mb-4">88.00</div>
              <div className="h-6 flex mb-6">
                <div className="h-full bg-blue-500 w-1/3"></div>
                <div className="h-full bg-orange-200 w-1/3"></div>
                <div className="h-full bg-orange-500 w-1/3"></div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
                    <span className="text-xs">01</span>
                  </div>
                  <div className="text-xs text-gray-500">Designation</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-500 text-white flex items-center justify-center mb-1">
                    <span className="text-xs">02</span>
                  </div>
                  <div className="text-xs text-gray-500">Designation</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mb-1">
                    <span className="text-xs">03</span>
                  </div>
                  <div className="text-xs text-gray-500">Designation</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule 4 */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Schedule 4</h3>
                <span className="text-xs text-blue-500">Profile</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">44</div>
                  <div className="text-xs text-gray-500">OPENED</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">740</div>
                  <div className="text-xs text-gray-500">COMPLETED</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">9 101.50</div>
                  <div className="text-xs text-gray-500">TOTAL</div>
                </div>
              </div>

              {/* Gauge Chart */}
              <div className="relative h-32 mb-4">
                <svg viewBox="0 0 200 100" className="w-full">
                  <path d="M20,90 A80,80 0 0,1 180,90" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                  <path d="M20,90 A80,80 0 0,1 100,10" fill="none" stroke="#3B82F6" strokeWidth="10" />
                  <path d="M100,10 A80,80 0 0,1 180,90" fill="none" stroke="#10B981" strokeWidth="10" />
                  {/* Needle */}
                  <line x1="100" y1="90" x2="70" y2="30" stroke="#1E40AF" strokeWidth="2" />
                  <circle cx="100" cy="90" r="5" fill="#1E40AF" />
                </svg>
                <div className="absolute bottom-0 left-0 text-xs">0%</div>
                <div className="absolute bottom-0 right-0 text-xs">100%</div>
              </div>

              {/* Date Card */}
              <div className="bg-white rounded-lg shadow-sm p-2 mb-4">
                <div className="text-center text-gray-500 mb-1">MAY</div>
                <div className="text-center text-4xl font-bold mb-1">17</div>
                <div className="bg-blue-500 text-white text-xs p-1 rounded mb-1">
                  <div className="text-center">10:00-12:00 PM</div>
                </div>
                <div className="bg-orange-200 text-orange-800 text-xs p-1 rounded">
                  <div className="text-center">Check Hour</div>
                </div>
              </div>

              {/* Account Section */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Account</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Month</span>
                    <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                      Details
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs mr-4">Day</span>
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-xs">10</span>
                    </div>
                    <Progress value={40} className="h-1 flex-1" />
                  </div>

                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs mr-4">Week</span>
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-xs">10</span>
                    </div>
                    <Progress value={70} className="h-1 flex-1" />
                  </div>

                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs mr-4">Month</span>
                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-xs">10</span>
                    </div>
                    <Progress value={90} className="h-1 flex-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* General Stats */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">General stats</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex gap-1 mb-4">
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Mon
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Tue
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Wed
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6 bg-purple-600 text-white">
                  Thu
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Fri
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Sat
                </Button>
                <Button variant="ghost" size="sm" className="text-xs px-3 py-1 h-6">
                  Sun
                </Button>
              </div>

              <div className="h-48 bg-gray-50 rounded-lg p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                      domain={[0, 100]}
                      ticks={[0, 25, 50, 75, 100]}
                    />
                    <Line
                      type="monotone"
                      dataKey="first"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#3B82F6", stroke: "#3B82F6" }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="second"
                      stroke="#FF9F43"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#FF9F43", stroke: "#FF9F43" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between mt-4">
                <div className="text-xs text-gray-500">Designation of the graph function</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs">The first number</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-xs">The second number</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Schedule */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">Main schedule</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-48 bg-gray-50 rounded-lg p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mainScheduleData} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                      domain={[0, 100]}
                      ticks={[0, 20, 40, 60, 80, 100]}
                    />
                    <Bar dataKey="first" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="second" fill="#FF9F43" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between mt-4">
                <div className="text-xs text-gray-500">Designation of the graph function</div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs">The first number</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    <span className="text-xs">The second number</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Account - Bar Chart */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <div>
                <h3 className="font-medium">Account</h3>
                <p className="text-xs text-gray-500">Category: no</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyBarData} barSize={20}>
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Account - Timeline */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <div>
                <h3 className="font-medium">Account</h3>
                <p className="text-xs text-gray-500">Category: no</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-12 mb-4">
                <div className="flex justify-between">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className={cn("h-6 w-0.5 bg-gray-300", index === 6 && "bg-blue-500")}></div>
                      <div className="text-[8px] mt-1">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <div className="text-xs">January</div>
                <div className="text-xs">February</div>
                <div className="text-xs">March</div>
                <div className="text-xs text-blue-500">April</div>
                <div className="text-xs">May</div>
                <div className="text-xs">June</div>
              </div>
            </CardContent>
          </Card>

          {/* Account - Weekly Bar Chart */}
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
              <h3 className="font-medium">Account</h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Month</span>
                <Button size="sm" className="h-6 px-3 bg-blue-500 hover:bg-blue-600 text-white text-xs">
                  Details
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                      domain={[0, 1000]}
                      ticks={[0, 200, 400, 600, 800, 1000]}
                    />
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

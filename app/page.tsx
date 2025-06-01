"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Maximize2,
} from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-yellow-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 h-screen">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <Card className="h-full bg-slate-800 text-white border-0 shadow-xl">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Logo and Brand */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="font-bold text-lg">MAYODREAM</span>
                </div>

                {/* User Profile */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-blue-400 mx-auto mb-3 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Iqbaal Ramadhan"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">Iqbaal Ramadhan</h3>
                  <p className="text-gray-400 text-sm">@iqbaale</p>
                </div>

                {/* Main Menu */}
                <div className="mb-8">
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">MENU UTAMA</h4>
                  <nav className="space-y-2">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg bg-slate-700 text-white">
                      <LayoutDashboard className="w-5 h-5" />
                      <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-slate-700">
                      <BookOpen className="w-5 h-5" />
                      <span>Kursus</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-slate-700">
                      <FileText className="w-5 h-5" />
                      <span>Materi</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-slate-700">
                      <CreditCard className="w-5 h-5" />
                      <span>Transaksi</span>
                    </a>
                  </nav>
                </div>

                {/* Preferences */}
                <div className="mb-8">
                  <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">PREFERENSI</h4>
                  <nav className="space-y-2">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-slate-700">
                      <Settings className="w-5 h-5" />
                      <span>Pengaturan</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-slate-700">
                      <HelpCircle className="w-5 h-5" />
                      <span>Pusat Bantuan</span>
                    </a>
                  </nav>
                </div>

                {/* Log Out Button */}
                <div className="mt-auto">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3">
                    <LogOut className="w-5 h-5 mr-2" />
                    Log Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-6 space-y-6">
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Soft Skill Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Soft Skill</h3>
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Berdasarkan nilai dari pengajar</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <h4 className="font-medium mb-4">Pemecahan Masalah</h4>
                  </div>

                  {/* Pentagon Chart */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Pentagon outline */}
                      <polygon points="50,10 80,35 70,70 30,70 20,35" fill="none" stroke="#e5e7eb" strokeWidth="1" />
                      {/* Pentagon fill */}
                      <polygon
                        points="50,20 70,40 60,60 40,60 30,40"
                        fill="#6366f1"
                        fillOpacity="0.3"
                        stroke="#6366f1"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>Disiplin</div>
                    <div className="text-right">Kreatif</div>
                    <div>Berpikir Kritis</div>
                    <div className="text-right">Keterampilan</div>
                  </div>
                </CardContent>
              </Card>

              {/* Bidang Minat Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Bidang Minat</h3>
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Berdasarkan hobi dan ketertarikan</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Olahraga</span>
                    </div>
                    <Progress value={85} className="h-2 bg-gray-200">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }} />
                    </Progress>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Teknologi</span>
                    </div>
                    <Progress value={70} className="h-2 bg-gray-200">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: "70%" }} />
                    </Progress>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Sastra</span>
                    </div>
                    <Progress value={60} className="h-2 bg-gray-200">
                      <div className="h-full bg-orange-500 rounded-full" style={{ width: "60%" }} />
                    </Progress>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Kesenian</span>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-200">
                      <div className="h-full bg-purple-400 rounded-full" style={{ width: "75%" }} />
                    </Progress>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Middle Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Waktu Belajar Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <h3 className="font-semibold text-lg">Waktu Belajar</h3>
                  <p className="text-sm text-gray-600">Waktu yang sudah dihabis...</p>
                </CardHeader>
                <CardContent>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#fb923c"
                        strokeWidth="8"
                        strokeDasharray="180 71"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xs text-gray-500">Total</span>
                      <span className="text-xl font-bold">180</span>
                      <span className="text-xs text-gray-500">jam</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <span>Tatap Muka</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span>Daring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sedang Berlangsung Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Sedang Berlangsung</h3>
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Sebanyak 6 kursus sedang aktif saat ini</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <div>
                      <h4 className="font-medium">Kursus Matematika</h4>
                      <p className="text-xs text-gray-600">1 Maret 2023 - 1 Mei 2023</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <div>
                      <h4 className="font-medium">Kursus Bahasa Jepang</h4>
                      <p className="text-xs text-gray-600">14 Maret 2023 - 14 Juni 2023</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div>
                      <h4 className="font-medium">Kursus Bahasa Inggris</h4>
                      <p className="text-xs text-gray-600">8 Februari 2023 - 8 April 2023</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Riwayat Pengajar Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Riwayat Pengajar</h3>
                    <Maximize2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600">Menyelesaikan pembelajaran dengan 6 pengajar</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-red-400 mx-auto mb-2 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Ridwan B"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium">Ridwan B</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-gray-400 mx-auto mb-2 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Diana L"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium">Diana L</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto mb-2 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Bastian V"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium">Bastian V</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-600 mx-auto mb-2 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          alt="Ismail R"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs font-medium">Ismail R</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reward Card */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="pb-3">
                  <h3 className="font-semibold text-lg">Reward</h3>
                  <p className="text-sm text-gray-600">Reward yang didapat 3/12</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-blue-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-red-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <circle cx="12" cy="12" r="10" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-yellow-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L13.09 8.26L20 9L14 14L16.18 21L12 17.77L7.82 21L10 14L4 9L10.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-8 h-8 mx-auto mb-2 text-gray-300">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M12 2L13.09 8.26L20 9L14 14L16.18 21L12 17.77L7.82 21L10 14L4 9L10.91 8.26L12 2Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-gray-300">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-gray-300">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                            <circle cx="12" cy="12" r="8" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-6">
            {/* Profile Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-blue-400 mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Iqbaal Ramadhan"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Iqbaal Ramadhan</h3>
                <p className="text-gray-600 text-sm mb-6">@iqbaale</p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📅</span>
                    </div>
                    <span className="text-sm">28 Desember 2004</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">🏫</span>
                    </div>
                    <span className="text-sm">Sekolah Pelita Harapan</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">📍</span>
                    </div>
                    <span className="text-sm">Jl. Lavender III, Klp. Dua, Tangerang</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tentang Saya Card */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Tentang Saya</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Hi! Saya Iqbaal biasa dipanggil Ale. Saya sangat menyukai dunia desain dan photography. Selain itu
                  saya juga menyukai musik, beberapa alat musik yang dapat saya mainkan yaitu gitar akustik, bass, dan
                  keyboard.
                </p>
              </CardContent>
            </Card>

            {/* Wali Murid Card */}
            <Card className="bg-slate-800 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Wali Murid</h3>
                  <Maximize2 className="w-4 h-4 text-gray-400" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-400 overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Ny. Adriana Ramha"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ny. Adriana Ramha</h4>
                    <p className="text-gray-400 text-sm">@rahmaadr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { DollarSign, Users, Car, Calendar, TrendingUp, Eye, Download, Filter, Search, Phone, MapPin, Clock } from 'lucide-react'

export default function AdminDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview')
  const [searchQuery, setSearchQuery] = useState('')

  const revenueData = [
    { month: 'Jan', revenue: 45000, bookings: 120 },
    { month: 'Feb', revenue: 52000, bookings: 135 },
    { month: 'Mar', revenue: 48000, bookings: 128 },
    { month: 'Apr', revenue: 61000, bookings: 155 },
    { month: 'May', revenue: 55000, bookings: 142 },
    { month: 'Jun', revenue: 67000, bookings: 168 },
  ]

  const vehicleData = [
    { name: 'Sedan', value: 12, color: '#0d9488' },
    { name: 'SUV', value: 8, color: '#14b8a6' },
    { name: 'Tempo', value: 15, color: '#2dd4bf' },
    { name: 'Others', value: 5, color: '#5eead4' },
  ]

  const bookings = [
    { id: 'BK001', customer: 'Rajesh Kumar', phone: '+91 98765 43210', vehicle: 'Innova Crysta', date: '2024-06-10', duration: '3 days', amount: '₹15,600', status: 'Completed', pickup: 'Ahmedabad', drop: 'Somnath' },
    { id: 'BK002', customer: 'Priya Sharma', phone: '+91 87654 32109', vehicle: 'Etios', date: '2024-06-11', duration: '1 day', amount: '₹4,200', status: 'Pending', pickup: 'Surat', drop: 'Statue of Unity' },
    { id: 'BK003', customer: 'Amit Patel', phone: '+91 76543 21098', vehicle: 'Ertiga', date: '2024-06-12', duration: '2 days', amount: '₹9,000', status: 'Completed', pickup: 'Vadodara', drop: 'Dwarka' },
    { id: 'BK004', customer: 'Neha Desai', phone: '+91 65432 10987', vehicle: 'Tempo Traveller', date: '2024-06-13', duration: '5 days', amount: '₹28,500', status: 'In Progress', pickup: 'Ahmedabad', drop: 'Gir' },
    { id: 'BK005', customer: 'Vikram Singh', phone: '+91 54321 09876', vehicle: 'Sedan', date: '2024-06-14', duration: '1 day', amount: '₹3,500', status: 'Confirmed', pickup: 'Airport', drop: 'Hotel' },
  ]

  const vehicles = [
    { id: 'V001', name: 'Innova Crysta', plate: 'GJ-12-AB-1234', status: 'Available', lastService: '2024-05-15', mileage: '125,400 km' },
    { id: 'V002', name: 'Etios', plate: 'GJ-12-AB-1235', status: 'In Use', lastService: '2024-05-10', mileage: '98,200 km' },
    { id: 'V003', name: 'Ertiga', plate: 'GJ-12-AB-1236', status: 'Available', lastService: '2024-05-20', mileage: '87,600 km' },
    { id: 'V004', name: 'Tempo Traveller', plate: 'GJ-12-AB-1237', status: 'In Use', lastService: '2024-04-30', mileage: '156,300 km' },
  ]

  const kpis = [
    { icon: DollarSign, title: 'Total Revenue', value: '₹12.5L', change: '+12.5%', bg: 'from-emerald-500 to-teal-600' },
    { icon: Users, title: 'Total Bookings', value: '1,240', change: '+8.2%', bg: 'from-blue-500 to-cyan-600' },
    { icon: Car, title: 'Active Fleet', value: '38/40', change: '+2', bg: 'from-purple-500 to-pink-600' },
    { icon: TrendingUp, title: 'This Month', value: '₹2.8L', change: '+5.3%', bg: 'from-orange-500 to-red-600' },
  ]

  const filteredBookings = bookings.filter(b => 
    b.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-700'
      case 'Pending': return 'bg-yellow-100 text-yellow-700'
      case 'In Progress': return 'bg-blue-100 text-blue-700'
      case 'Confirmed': return 'bg-emerald-100 text-emerald-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-teal-200 mt-2">Real-time business analytics & fleet management</p>
            </div>
            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all">
              <Download size={18} />
              Export Report
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon
            return (
              <div key={i} className={`bg-gradient-to-br ${kpi.bg} rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all overflow-hidden relative group`}>
                <div className="absolute -right-8 -top-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon size={120} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Icon size={24} className="text-white/80" />
                    <span className="text-green-300 text-sm font-bold">{kpi.change}</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{kpi.title}</p>
                  <p className="text-3xl font-bold mt-2">{kpi.value}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-slate-800/50 p-2 rounded-lg backdrop-blur-sm w-fit">
          {['overview', 'bookings', 'fleet'].map(tab => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all capitalize ${
                selectedTab === tab
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* Charts */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="lg:col-span-2 bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="text-teal-400" size={24} />
                  Revenue & Bookings
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#14b8a6" strokeWidth={3} dot={{ fill: '#14b8a6', r: 5 }} activeDot={{ r: 7 }} />
                    <Line type="monotone" dataKey="bookings" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 5 }} activeDot={{ r: 7 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Vehicle Distribution */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Car className="text-teal-400" size={24} />
                  Fleet Distribution
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={vehicleData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#8884d8" dataKey="value">
                      {vehicleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Monthly Stats Bar Chart */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-6">Monthly Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                  <Bar dataKey="revenue" fill="#14b8a6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {selectedTab === 'bookings' && (
          <div className="space-y-4">
            {/* Search */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by customer name or booking ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/80 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-600 transition-colors"
                />
              </div>
              <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors">
                <Filter size={18} />
                Filter
              </button>
            </div>

            {/* Bookings Table */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/80 border-b border-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">ID</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Customer</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Vehicle</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Route</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Date & Duration</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Amount</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-teal-300 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-700/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-bold text-teal-400">{booking.id}</td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-white">{booking.customer}</div>
                          <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                            <Phone size={12} />
                            {booking.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-white font-medium">{booking.vehicle}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-teal-400" />
                            {booking.pickup} → {booking.drop}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">
                          <div>{booking.date}</div>
                          <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                            <Clock size={12} />
                            {booking.duration}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-teal-400">{booking.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button className="text-teal-400 hover:text-teal-300 font-semibold transition-colors flex items-center gap-1">
                            <Eye size={16} />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Fleet Tab */}
        {selectedTab === 'fleet' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-xl hover:border-teal-600 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">Plate: {vehicle.plate}</p>
                  </div>
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                    vehicle.status === 'Available' 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-blue-500/20 text-blue-300'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Last Service</span>
                    <span className="text-white font-semibold">{vehicle.lastService}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Total Mileage</span>
                    <span className="text-white font-semibold">{vehicle.mileage}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-slate-700">
                  <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 rounded-lg transition-colors">
                    Edit Details
                  </button>
                  <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2.5 rounded-lg transition-colors">
                    View History
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

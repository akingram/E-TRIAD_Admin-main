import { DollarSign, ShoppingBagIcon, ShoppingCartIcon, TrendingDownIcon, TrendingUpIcon, User } from "lucide-react"

function Dashboard() {
  const stats = [
    { name: "Total Solutions", value: "42", icon: ShoppingBagIcon, change: "+8%", trend: TrendingUpIcon },
    { name: "Total Subscriptions", value: "215", icon: ShoppingCartIcon, change: "+15%", trend: TrendingUpIcon },
    { name: "Revenue", value: "$58,750", icon: DollarSign, change: "+12%", trend: TrendingUpIcon },
    { name: "Active Clients", value: "186", icon: User, change: "-2%", trend: TrendingDownIcon },
  ]

  const recentSubscriptions = [
    { id: "#SUB-001", client: "TechCorp Inc", date: "2023-04-12", status: "Active", amount: "$1,250.00" },
    { id: "#SUB-002", client: "DataSystems LLC", date: "2023-04-11", status: "Pending", amount: "$850.50" },
    { id: "#SUB-003", client: "CloudNine Solutions", date: "2023-04-10", status: "Active", amount: "$2,100.75" },
    { id: "#SUB-004", client: "Digital Ventures", date: "2023-04-09", status: "Expired", amount: "$650.25" },
    { id: "#SUB-005", client: "AI Innovations", date: "2023-04-08", status: "Active", amount: "$1,450.00" },
  ]

  const topServices = [
    { name: "Cloud Migration Package", sales: 28, revenue: "$42,000" },
    { name: "Cybersecurity Audit", sales: 19, revenue: "$28,500" },
    { name: "AI Integration", sales: 15, revenue: "$37,500" },
    { name: "Data Analytics Setup", sales: 12, revenue: "$18,000" },
    { name: "DevOps Implementation", sales: 10, revenue: "$25,000" },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome to your E-Triad technology solutions dashboard</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-5">
            <div className="flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
              </div>
              <div className="rounded-full bg-[#87CEEB] bg-opacity-20 p-3">
                <stat.icon className="h-6 w-6 text-[#2196F3]" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <stat.trend className={`h-4 w-4 ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`} />
              <span className={`text-sm ml-1 ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {stat.change} from last quarter
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Subscriptions */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Subscriptions</h2>
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscription ID
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentSubscriptions.map((subscription) => (
                    <tr key={subscription.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-[#2196F3]">{subscription.id}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{subscription.client}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            subscription.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : subscription.status === "Pending"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {subscription.status}
                        </span>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{subscription.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-5 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Top Performing Services</h2>
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contracts
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {topServices.map((service) => (
                    <tr key={service.name}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{service.name}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{service.sales} contracts</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{service.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
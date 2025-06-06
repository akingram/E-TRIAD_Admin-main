"use client"

import { ArrowLeftIcon } from "lucide-react"
import { Link, useParams } from "react-router-dom"

function ServiceContractDetails() {
  const { id } = useParams()

  // Mock contract data - in a real app, you would fetch this from an API
  const contract = {
    id: id,
    client: {
      name: "TechCorp Solutions",
      email: "contact@techcorp.com",
      phone: "(555) 123-4567",
    },
    serviceAddress: {
      street: "456 Innovation Drive",
      city: "Techville",
      state: "CA",
      zip: "94025",
      country: "USA",
    },
    billingAddress: {
      street: "456 Innovation Drive",
      city: "Techville",
      state: "CA",
      zip: "94025",
      country: "USA",
    },
    date: "2023-06-15",
    status: "Active",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    services: [
      { id: 1, name: "Cloud Migration Package", quantity: 1, price: "$2,500.00", total: "$2,500.00" },
      { id: 2, name: "Cybersecurity Audit", quantity: 1, price: "$1,800.00", total: "$1,800.00" },
      { id: 3, name: "AI Integration", quantity: 1, price: "$3,200.00", total: "$3,200.00" },
    ],
    subtotal: "$7,500.00",
    setupFee: "$500.00",
    tax: "$600.00",
    total: "$8,600.00",
  }

  return (
    <div>
      <div className="mb-6">
        <Link to="/contracts" className="inline-flex items-center text-sm font-medium text-[#2196F3] hover:text-[#1976D2]">
          <ArrowLeftIcon className="w-4 h-4 mr-1" />
          Back to Contracts
        </Link>
        <div className="flex flex-col mt-2 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Service Contract {contract.id}</h1>
          <div className="mt-2 md:mt-0">
            <span
              className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full 
              ${
                contract.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : contract.status === "In Progress"
                    ? "bg-blue-100 text-blue-800"
                    : contract.status === "Active"
                      ? "bg-yellow-100 text-yellow-800"
                      : contract.status === "Pending"
                        ? "bg-gray-100 text-gray-800"
                        : "bg-red-100 text-red-800"
              }`}
            >
              {contract.status}
            </span>
          </div>
        </div>
        <p className="text-gray-600">Initiated on {contract.date}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Contract Summary */}
        <div className="md:col-span-2">
          <div className="mb-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Service Details</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Service
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {contract.services.map((service) => (
                      <tr key={service.id}>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{service.quantity}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{service.price}</div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{service.total}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">{contract.subtotal}</span>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Setup Fee</span>
                  <span className="font-medium text-gray-900">{contract.setupFee}</span>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium text-gray-900">{contract.tax}</span>
                </div>
                <div className="flex justify-between pt-4 mt-4 border-t border-gray-200">
                  <span className="text-base font-medium text-gray-900">Total</span>
                  <span className="text-base font-medium text-gray-900">{contract.total}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Contract Status</h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="status" className="block mb-1 text-sm font-medium text-gray-700">
                  Update Status
                </label>
                <select
                  id="status"
                  name="status"
                  defaultValue={contract.status}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#2196F3] focus:border-[#2196F3] sm:text-sm rounded-md"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Terminated">Terminated</option>
                </select>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2196F3] hover:bg-[#1976D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2196F3]"
                >
                  Update Status
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="md:col-span-1">
          <div className="mb-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Client</h2>
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-gray-900">{contract.client.name}</p>
              <p className="mt-1 text-sm text-gray-500">{contract.client.email}</p>
              <p className="mt-1 text-sm text-gray-500">{contract.client.phone}</p>
            </div>
          </div>

          <div className="mb-6 overflow-hidden bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Service Location</h2>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">{contract.serviceAddress.street}</p>
              <p className="mt-1 text-sm text-gray-500">
                {contract.serviceAddress.city}, {contract.serviceAddress.state} {contract.serviceAddress.zip}
              </p>
              <p className="mt-1 text-sm text-gray-500">{contract.serviceAddress.country}</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Payment Information</h2>
            </div>
            <div className="p-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Method</span>
                <span className="font-medium text-gray-900">{contract.paymentMethod}</span>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-600">Status</span>
                <span className={`font-medium ${contract.paymentStatus === "Paid" ? "text-green-600" : "text-red-600"}`}>
                  {contract.paymentStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceContractDetails
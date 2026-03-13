import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [franchiseType, setFranchiseType] = useState('agent');
  const [dailyTransactions, setDailyTransactions] = useState(50);

  const calculations = {
    agent: {
      investment: 82600,
      avgCommission: 15,
      name: 'Agent Franchise'
    },
    distributor: {
      investment: 118000,
      avgCommission: 20,
      name: 'Distributor Franchise'
    },
    super: {
      investment: 236000,
      avgCommission: 25,
      name: 'Super Distributor'
    }
  };

  const selected = calculations[franchiseType as keyof typeof calculations];
  const dailyEarning = dailyTransactions * selected.avgCommission;
  const monthlyEarning = dailyEarning * 26;
  const annualEarning = monthlyEarning * 12;
  const roiMonths = Math.ceil(selected.investment / monthlyEarning);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-indigo-100 p-3 rounded-xl">
          <Calculator className="w-8 h-8 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold">ROI Calculator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Franchise Type
          </label>
          <select
            value={franchiseType}
            onChange={(e) => setFranchiseType(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
          >
            <option value="agent">Agent Franchise - ₹82,600</option>
            <option value="distributor">Distributor Franchise - ₹1,18,000</option>
            <option value="super">Super Distributor - ₹2,36,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Expected Daily Transactions: {dailyTransactions}
          </label>
          <input
            type="range"
            min="10"
            max="500"
            value={dailyTransactions}
            onChange={(e) => setDailyTransactions(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>10</span>
            <span>500</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-indigo-200">
            <span className="text-gray-700">Investment</span>
            <span className="text-xl font-bold text-gray-900">₹{selected.investment.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Daily Earning</span>
            <span className="text-xl font-bold text-green-600">₹{dailyEarning.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Monthly Earning</span>
            <span className="text-xl font-bold text-green-600">₹{monthlyEarning.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Annual Earning</span>
            <span className="text-xl font-bold text-green-600">₹{annualEarning.toLocaleString()}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-indigo-200">
            <span className="text-gray-700 font-semibold">ROI Period</span>
            <span className="text-2xl font-bold text-indigo-600">{roiMonths} months</span>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-4 flex items-start space-x-3">
          <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            These calculations are estimates based on average commission rates. Actual earnings may vary based on location, service mix, and effort.
          </p>
        </div>
      </div>
    </div>
  );
}

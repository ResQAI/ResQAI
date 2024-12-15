"use client";

import React, { useState } from "react";

interface DonatePageProps {
  reliefFunds: { id: number; name: string }[];
  onDonate: (details: {
    name: string;
    email: string;
    reliefFundId: number;
    amount: number;
  }) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ reliefFunds, onDonate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reliefFundId: reliefFunds[0]?.id || 0,
    amount: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onDonate(formData);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl overflow-hidden">
      <div className="px-8 py-6 bg-blue-50 border-b border-blue-100">
        <h2 className="text-2xl font-bold text-gray-800">Make a Donation</h2>
        <p className="text-gray-600 mt-2">
          Your support can make a real difference in someone's life
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Donation Amount (₹)
            </label>
            <input
              type="number"
              id="amount"
              required
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={formData.amount || ""}
              onChange={(e) =>
                setFormData({ ...formData, amount: parseInt(e.target.value) })
              }
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          {[1000, 2000, 5000, 10000].map((amount) => (
            <button
              key={amount}
              type="button"
              className="flex-1 px-4 py-2 text-sm border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-200"
              onClick={() => setFormData({ ...formData, amount })}
            >
              ₹{amount.toLocaleString()}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow mt-6"
        >
          Complete Donation
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Your donation is secure and encrypted. By contributing, you agree to
          our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default DonatePage;

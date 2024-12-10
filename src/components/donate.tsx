"use client";

import React, { useState } from "react";

interface ReliefFund {
  id: number;
  name: string;
}

interface DonatePageProps {
  reliefFunds: ReliefFund[];
  onDonate: (donationDetails: {
    name: string;
    email: string;
    reliefFundId: number;
    amount: number;
  }) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ reliefFunds, onDonate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reliefFundId, setReliefFundId] = useState(reliefFunds[0]?.id || 0);
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !amount) {
      alert("Please fill all required fields.");
      return;
    }

    onDonate({
      name,
      email,
      reliefFundId,
      amount: parseFloat(amount),
    });

    alert("Thank you for your donation!");
  };

  return (
    <div className="max-w-lg mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Donate Now</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Relief Fund
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={reliefFundId}
            onChange={(e) => setReliefFundId(parseInt(e.target.value))}
          >
            {reliefFunds.map((fund) => (
              <option key={fund.id} value={fund.id}>
                {fund.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition ease-in-out duration-300"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonatePage;

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
    <div className="lg:col-span-5 md:col-span-6">
      <div className="p-6 rounded-lg border-t-8 border-blue-500 bg-white dkbg-slate-900 shadow-lg dkshadow-gray-800">
        <div className="mb-6 text-center">
          <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">
            Make a Donation
          </h4>
          <p className="text-slate-400">
            Your $40.00 monthly donation can give 12 people clean water every
            year. 100% funds water projects.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1">
            <div>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="mb-5">
                  <label className="form-label font-medium">
                    Your Name : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dkbg-slate-900 dktext-slate-200 rounded outline-none border border-gray-200 focus:border-blue-500 dkborder-gray-800 dkfocus:border-blue-500 focus:ring-0"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label font-medium">
                    Your Email : <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dkbg-slate-900 dktext-slate-200 rounded outline-none border border-gray-200 focus:border-blue-500 dkborder-gray-800 dkfocus:border-blue-500 focus:ring-0"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="form-label font-medium">
                I Want to Donate for
              </label>
              <select
                className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dkbg-slate-900 dktext-slate-200 rounded outline-none border border-gray-200 focus:border-blue-500 dkborder-gray-800 dkfocus:border-blue-500 focus:ring-0"
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
            <div className="mb-5">
              <label className="form-label font-medium">
                How much do you want to donate ?
              </label>
              <div className="relative mt-2">
                <span
                  className="absolute top-0.5 start-0.5 size-9 text-xl bg-gray-100 dkbg-slate-800 inline-flex justify-center items-center text-dark dktext-white rounded"
                  id="basic-addon1"
                >
                  <i className="uil uil-usd-circle" />
                </span>
                <input
                  type="number"
                  className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dkbg-slate-900 dktext-slate-200 rounded outline-none border border-gray-200 focus:border-blue-500 dkborder-gray-800 dkfocus:border-blue-500 focus:ring-0"
                  min={1}
                  max={1000}
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center w-full mb-0">
                <input
                  className="form-checkbox rounded border-gray-200 dkborder-gray-800 text-blue-500 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                  type="checkbox"
                  required
                />
                <label className="form-check-label text-slate-400">
                  I Accept{" "}
                  <a href="#" className="text-blue-500">
                    Terms And Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-blue-500 hover:bg-indigo-700 border-blue-500 hover:border-indigo-700 text-white rounded-md w-full"
              >
                Donate Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonatePage;

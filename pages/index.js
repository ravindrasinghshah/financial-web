import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Home() {
  const [sixFund, setSixFund] = useState(0);
  const [twelveFund, setTwelveFund] = useState(0);
  const handleCalculate = () => {
    var salaryValue = document.getElementById('salary').value;
    var rentValue = document.getElementById('rent').value;
    var utilitiesValue = document.getElementById('utilities').value;
    var emiValue = document.getElementById('emi').value;
    var expenseValue = document.getElementById('expense').value;
    var investmentValue = document.getElementById('investment').value;
    setSixFund(salaryValue);
    setTwelveFund(salaryValue);
  }

  return (
    <div className="container mx-auto pt-5">
      <Head>
        <title>Financial Profile</title>
        <meta name="description" content="Emergency Funds, Financial portfolio, Financial Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grid-cols-12">
          <div className="py-4 sm:px-0 text-center">
            <h3 className="text-xl font-medium leading-6 text-gray-900">Emergency Fund</h3>
            <p className="mt-1 text-sm text-gray-600">Calculate your emergency fund.</p>
          </div>

          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 sm:col-span-12">
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700">
                    Salary
                  </label>
                  <input type="text" name="salary" id="salary" autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-12">
                  <label htmlFor="rent" className="block text-sm font-medium text-gray-700">
                    Rent
                  </label>
                  <input type="text" name="rent" id="rent" autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="utilities" className="block text-sm font-medium text-gray-700">
                    Utilities, Food, Gas etc.
                  </label>
                  <input type="text" name="utilities" id="utilities" autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="emi" className="block text-sm font-medium text-gray-700">
                    emi / loan
                  </label>
                  <input type="text" name="emi" id="emi" autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="expense" className="block text-sm font-medium text-gray-700">
                    Personal expenses
                  </label>
                  <input type="text" name="expense" id="expense" autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="investment" className="block text-sm font-medium text-gray-700">
                    investment
                  </label>
                  <input type="text" name="investment" id="investment"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="button"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleCalculate}>
                Calculate
              </button>
            </div>
          </div>
        </div>
        <div className="grid-cols-12">
          <label>6x Emergency Fund: {sixFund}</label>
          <br />
          <label>12x Emergency Fund: {twelveFund}</label>
        </div>
      </main>
    </div>
  )
}

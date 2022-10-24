import React from "react";

//동적인 값 넣어주기?

const Wallet = () => {
  const wallet = {
    _id: "2132141",
    balance: 30,
    currency: "USD",
  };

  return (
    <div class="flex font-sans  shadow-md my-10">
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <div class="w-full flex-none text-sm font-medium text-gray-500">
            Main Account
          </div>
          <div class="w-full flex-none text-sm font-medium text-gray-700 mt-2">
            Wallet ID :
          </div>
          <h1 class="flex-auto text-lg font-semibold text-slate-900">
            {wallet._id}
          </h1>
          <div class="text-2xl font-bold text-slate-700">
            {`${wallet.balance}  ${wallet.currency}`}
          </div>
        </div>
        <div class="flex items-baseline mb-6 pb-6 border-b border-slate-200"></div>
        <div class="flex space-x-4 mb-6 text-sm font-medium mt-4">
          <div class="flex-auto flex space-x-4">
            <button
              type="button"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Add Money
            </button>
            <button
              type="button"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Trasnfer Money
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Wallet;

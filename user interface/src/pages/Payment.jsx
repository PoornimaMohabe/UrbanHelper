import React, { useState } from "react";
import toast from "react-hot-toast";
import { CreditCard, Wallet, Banknote, Smartphone, IndianRupee } from "lucide-react";

function Payment() {
    const [selected, setSelected] = useState("card");

    const handlePayment = () => {
        toast.success("Payment Successful! 🎉");
      };

    const options = [
      { id: "card", name: "Credit / Debit Card", icon: <CreditCard className="w-5 h-5 mr-2" /> },
      { id: "upi", name: "UPI / QR", icon: <Smartphone className="w-5 h-5 mr-2" /> },
      { id: "wallet", name: "Wallets", icon: <Wallet className="w-5 h-5 mr-2" /> },
      { id: "netbanking", name: "Net Banking", icon: <Banknote className="w-5 h-5 mr-2" /> },
      { id: "cod", name: "Cash on Delivery", icon: <IndianRupee className="w-5 h-5 mr-2" /> }
    ];
  
    return (
        <div className="bg-[#f9fafb] min-h-screen px-4 md:px-10 py-10 text-gray-800">
          <div className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-5 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-700 text-center">Choose Payment Method</h2>
    
            <div className="grid gap-3">
              {options.map(option => (
                <div
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={`flex items-center px-3 py-2 rounded-lg border cursor-pointer text-sm transition-all ${
                    selected === option.id
                      ? "bg-green-100 border-green-500 text-green-800"
                      : "bg-white border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {option.icon}
                  <span>{option.name}</span>
                </div>
              ))}
            </div>
    
            <div className="pt-3 border-t border-gray-200">
              {selected === "card" && (
                <div className="grid gap-3 text-sm">
                  <input type="text" placeholder="Card Number" className="border rounded-md px-3 py-1.5" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Expiry (MM/YY)" className="border rounded-md px-3 py-1.5" />
                    <input type="text" placeholder="CVV" className="border rounded-md px-3 py-1.5" />
                  </div>
                  <input type="text" placeholder="Cardholder Name" className="border rounded-md px-3 py-1.5" />
                </div>
              )}
    
              {selected === "upi" && (
                <input type="text" placeholder="Enter UPI ID" className="border rounded-md px-3 py-1.5 w-full text-sm" />
              )}
    
              {selected === "wallet" && (
                <p className="text-xs text-gray-500 pt-1">You’ll be redirected to your wallet to complete payment.</p>
              )}
    
              {selected === "netbanking" && (
                <select className="border rounded-md px-3 py-1.5 w-full text-sm">
                  <option>Select Bank</option>
                  <option>HDFC Bank</option>
                  <option>ICICI Bank</option>
                  <option>SBI</option>
                  <option>Axis Bank</option>
                </select>
              )}
    
              {selected === "cod" && (
                <p className="text-xs text-gray-500 pt-1">Pay in cash directly to the vendor upon service.</p>
              )}
            </div>
    
            <div className="flex justify-center">
              <button
                onClick={handlePayment}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      );
}

export default Payment

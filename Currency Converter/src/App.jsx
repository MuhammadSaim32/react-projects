import { useState, useEffect, useCallback } from 'react'
import InputBox from "./components/InputBox"
import useCurrencyinfo from "./hooks/useCurrencyinfo"


function App() {
  const [ammount, setammount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("pkr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const CurrencyInfo = useCurrencyinfo(From)
  const options = Object.keys(CurrencyInfo);
  const convert = () => { setconvertedAmount(ammount * CurrencyInfo[To]) }
  const swap = () => {
    setFrom(To)
    setTo(From)
    setconvertedAmount(ammount)
    setammount(convertedAmount)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.pexels.com/photo/a-view-of-a-small-town-on-the-water-with-mountains-in-the-background-27779028/')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                ammount={ammount}
                currencyoptions={options}
                selectCurrency={From}
                onammountChange={(ammount) => {
                  setammount(ammount)
                }}
                oncurrencychnage={(currency) => {
                  setFrom(currency)
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                ammount={convertedAmount}
                currencyoptions={options}

                selectCurrency={To}
                oncurrencychnage={(currency) => {
                  setTo(currency)
                }}

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App

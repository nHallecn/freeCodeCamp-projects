const { useState, useMemo } = React;

const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
    CFA: 559.4
  }

export function CurrencyConverter() {

  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR")
  
  const baseConvertedAmount = useMemo(()=>{
    return amount/rates[fromCurrency]
  },[amount, fromCurrency])

  const finalAmount = (baseConvertedAmount * rates[toCurrency]).toFixed(2);

  return(
    <div className="currency-converter">
    <h1>Currency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={fromCurrency} 
      onChange={(e)=>setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="CFA">CFA</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="CFA">CFA</option>
      </select>

      <p>{finalAmount} {toCurrency}</p>
    </div>
  )
}

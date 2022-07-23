import React, { useEffect, useState } from "react";
import Select from "./Select";
import s from "./Main.module.css"

function Main(props) {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState("USD");
    const [currency2, setCurrency2] = useState("UAH");

    useEffect(() => {
        if (!!props.values) {
            handleAmount1Change(1);
        }
    })

    function format(num) {
        return num.toFixed(4)
    }

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * props.values[currency1] / props.values[currency2]))
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * props.values[currency1] / props.values[currency2]))
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * props.values[currency2] / props.values[currency1]))
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * props.values[currency2] / props.values[currency1]))
        setCurrency2(currency2);
    }

    return (
        <div className={s.select}>
            <Select
                currencies={props.values}
                amount={amount1}
                currency={currency1}
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change} />
            <Select
                currencies={props.values}
                amount={amount2}
                currency={currency2}
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change} />
        </div>
    )
}

export default Main;
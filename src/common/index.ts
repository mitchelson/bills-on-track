import dinero from 'dinero.js';
dinero.globalLocale = 'pt-BR'

export const calcBalance = (value: number) => {
  const balance = dinero({
    amount: value,
    currency: "BRL",
    precision: 2
  }).toFormat()

  return balance;
}
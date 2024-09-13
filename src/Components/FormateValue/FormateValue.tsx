const FormatePrice = (price: number) => {
  return new Intl.NumberFormat("Pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    maximumSignificantDigits: 2,
  }).format(price);
};

export default FormatePrice;

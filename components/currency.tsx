export default function Currency({ amount }: { amount: number }) {
  return (
    <div>
      {new Intl.NumberFormat("en", {
        style: "currency",
        currency: "NGN",
        currencyDisplay: "narrowSymbol",
        compactDisplay: "short",
      }).format(amount)}
    </div>
  );
}

export default function CurrencySection() {

  const currencies = [
    {
      id: 1,
      icon: "/dashboard/exchange/btc.svg",
      name: "BTC",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "+0.07%",
      price: "₹ 34,61,173.29",
    },
    {
      id: 2,
      icon: "/dashboard/exchange/btc.svg",
      name: "ETH",
      favoriteIcon: "/dashboard/exchange/favHeartThin.svg",
      favorite: false,
      changePercentage: "-0.07%",
      price: "₹ 19,62,52.00",
    },
    {
      id: 3,
      icon: "/dashboard/exchange/btc.svg",
      name: "BTC",
      favoriteIcon: "/dashboard/exchange/favHeartFill.svg",
      favorite: true,
      changePercentage: "+0.07%",
      price: "₹ 34,61,173.29",
    },
  ];
  

  return (
    <section className="sm:h-[100%] sm:rounded-lg sm:w-[17vw] flex sm:flex-col sm:m-w-[16vw] bg-dashbgtrans">
      {/* Search Bar */}
      <div className=" sm:h-[9.2%] sm:border-b border-borderline  flex sm:flex-row sm:justify-center sm:gap-x-2  sm:items-center">
        {/* Favorite Icon */}
        <div className="sm:w-[20%] sm:h-[40%] sm:rounded-md border border-borderline flex sm:items-center sm:justify-center ">
          <img src="/dashboard/exchange/favHeart.svg" />
        </div>
        {/* Search Input */}
        <div className="sm:w-[60%] sm:h-[40%] sm:rounded-md sm:text-[0.7rem] border  border-borderline flex sm:gap-x-1 font-poppinsRegular  sm:items-center sm:p-1">
          <img src="/dashboard/exchange/searchIcon.svg" className="sm:p-1" />
          Search
        </div>
      </div>

      {/* Currency Items */}
      {currencies.map((currency) => (
        <div
          key={currency.id}
          className="flex sm:flex-row sm:items-center border-b border-borderline  sm:justify-evenly sm:text-[0.55rem] sm:h-[6%]"
        >
          {/* Favorite Icon */}
          <img src={currency.favoriteIcon} />
          {/* Currency Icon */}
          <img src={currency.icon} />
          {/* Currency Name */}
          <span className="sm:text-[0.9rem] font-poppinsBold ">{currency.name}</span>
          {/* Change Percentage */}
          <span className={currency.changePercentage.startsWith('+') ? 'text-priceGreen' : 'text-priceRed'}>
            {currency.changePercentage}
          </span>
          {/* Price */}
          <span>{currency.price}</span>
        </div>
      ))}
    </section>
  );
}

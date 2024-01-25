export default function OrderHistory() {
  return (
    <section className="flex sm:flex-col bg-dashbgtrans sm:w-[30.2vw]  sm:rounded-lg">
      <div className="sm:h-[8vh]  flex sm:items-end">
        <span className="border-b-4 border-borderline sm:px-4 sm:p-2">
          Order Book
        </span>
        <span className="border-b-4 border-borderline sm:px-4 sm:p-2">
          Complete Order
        </span>
      </div>
      <div className="flex  sm:text-[0.8rem] sm:flex-row sm:justify-between sm:px-4 sm:py-2  sm:items-center">
        <span>Coin</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Date</span>
        <span>Total</span>
      </div>
      <div
        style={{ backgroundColor: "rgba(90, 215, 118, 0.15)" }}
        className="flex  border-l-4 border-red-600 sm:text-[0.8rem] sm:flex-row sm:justify-between sm:px-4 sm:py-2  sm:items-center"
      >
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>USDT</span>
        </div>
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>86.36</span>
        </div>
        <div className="sm:text-[0.6rem]">
          <span>10.00</span>
        </div>
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>23.10.2023</span>
          <span>14.04:10</span>
        </div>
        <div className="sm:text-[0.65rem]">
          <span>₹ 866.00</span>
        </div>
      </div>
    </section>
  );
}

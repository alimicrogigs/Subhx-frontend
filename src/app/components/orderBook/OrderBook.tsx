import { useReactTable } from '@tanstack/react-table'


export default function OrderBook() {
  const table = useReactTable()
  
  return (
    <section className="flex sm:flex-col bg-dashbgtrans sm:mr-3  sm:w-[48vw]  sm:rounded-lg">
      <div className="sm:h-[8vh]  flex sm:items-end">
        <span className="border-b-4 border-borderline sm:px-4 sm:p-2">
          Order Book
        </span>
      </div>
      <div className="flex  sm:text-[0.8rem] sm:flex-row sm:justify-between sm:px-4 sm:py-2  sm:items-center">
        <span>Total</span>
        <span>Price</span>
        <span>Status</span>
        <span>Date</span>
        <span>Quantity</span>
      </div>
      <div
        style={{ backgroundColor: "rgba(90, 215, 118, 0.15)" }}
        className="flex  sm:text-[0.8rem] sm:flex-row sm:justify-between sm:px-4 sm:py-2  sm:items-center"
      >
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>Buy</span>
          <span>320.26</span>
        </div>
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>USDT</span>
          <span>79.60</span>
        </div>
        <div className="sm:text-[0.6rem]">
          <span>Success</span>
        </div>
        <div className="flex sm:flex-col sm:text-[0.6rem]">
          <span>23.10.2023</span>
          <span>14.04:10</span>
        </div>
        <div className="sm:text-[0.65rem]">
          <span>4.0</span>
        </div>
      </div>
    </section>
  );
}

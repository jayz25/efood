export default function MenuItemCard({ menuItem }) {
  return (
    <div className="h-36 flex flex-row bg-neutral-100 rounded-lg">
      <div className="item-menu-logo h-full w-1/5">Img</div>
      <div className="item-menu-info flex flex-col w-4/5">
        <div className="flex flex-col">
          <p className="text-xl">{menuItem.name}</p>
          <p>Serves two</p>
          <p>⭐3.5</p>
        </div>
        <div className="flex flex-row justify-end self-end">
            <p className="px-2">₹{menuItem.price}</p>
            <div className="flex flex-row outline-transparent border-2 border-black mx-2 rounded-md">
                <button className="h-full basis-1/3 bg-neutral-700">
                    ➖
                </button>
                <div className="h-full basis-1/3 px-2">
                    1
                </div>
                <button className="h-full basis-1/3 bg-neutral-700">
                ➕
                </button>
            </div>
          </div>
      </div>
    </div>
  );
}

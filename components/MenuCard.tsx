import MenuItemCard from "./MenuItemCard";

export default function MenuCard({ menuItems }) {
  return (
    <div className="flex w-full flex-col lg:flex-row flex-wrap">
      {menuItems.map((menuItem) => {
        return (
          <div className="basis-1 lg:basis-1/2 p-1 rounded-lg">
            <MenuItemCard menuItem={menuItem} />
          </div>
        );
      })}
    </div>
  );
}

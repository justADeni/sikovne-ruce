import { JSX, useState } from "react";
const pricingData = [
  { label: "lorem 0", text: "0 lorem ipsum dolor sit amet", id: "lorem-0" },
  { label: "lorem 1", text: "1 lorem ipsum dolor sit amet", id: "lorem-1" },
  { label: "lorem 2", text: "2 lorem ipsum dolor sit amet", id: "lorem-2" },
  { label: "lorem 3", text: "3 lorem ipsum dolor sit amet", id: "lorem-3" }
];
const PricingSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    const selectedId = e.target.id;
    const selectedIndex = pricingData.findIndex(
      (item): boolean => item.id === selectedId
    );
    if (selectedIndex !== -1) {
      setActiveItem(selectedIndex);
    }
  };
  return (
    <section
      className="bg-bg-element container-width bg-el-bg shade grid grid-cols-[1fr_3fr] overflow-hidden"
      id="pricing">
      <aside className="bg-accent text-el-bg px-3 py-5">
        <form
          onChange={handleChange}
          className="flex flex-col items-center gap-y-5 text-2xl font-bold">
          {pricingData.map((priceData, i): JSX.Element => {
            const isSelected = pricingData.indexOf(priceData) === activeItem;
            return (
              <label
                key={i}
                htmlFor={priceData.id}
                title={priceData.label}
                className="hover:text-secondary group relative cursor-pointer px-4 py-2 transition-all duration-200">
                <input
                  className="hidden"
                  type="radio"
                  name={"pricing"}
                  id={priceData.id}
                  defaultChecked={priceData.id === "lorem-0"}
                />
                <span
                  className={`group-hover:scale-105 ${isSelected ? "opacity-0" : "opacity-100"} transition-all duration-300`}>
                  {priceData.label}
                </span>

                <span
                  className={` ${isSelected ? "size-full px-4 py-2" : "size-0 p-0"} text-primary bg-el-bg absolute inset-0 z-20 m-auto overflow-hidden rounded-md transition-all duration-200`}>
                  <span
                    className={`${isSelected ? "opacity-100" : "opacity-0"} transition-all duration-300`}>
                    {priceData.label}
                  </span>
                </span>
              </label>
            );
          })}
        </form>
      </aside>
      <div>{pricingData[activeItem]?.text}</div>
    </section>
  );
};

export default PricingSection;

import { JSX, useState } from "react";
import { FaBars } from "react-icons/fa";
const pricingData = [
  { label: "lorem 0", text: "0 lorem ipsum dolor sit amet", id: "lorem-0" },
  { label: "lorem 1", text: "1 lorem ipsum dolor sit amet", id: "lorem-1" },
  { label: "lorem 2", text: "2 lorem ipsum dolor sit amet", id: "lorem-2" },
  { label: "lorem 3", text: "3 lorem ipsum dolor sit amet", id: "lorem-3" }
];
const PricingSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState(0);
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = (): void => {
    setSidebarActive((sa): boolean => !sa);
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
    const selectedId = e.target.id;
    const selectedIndex = pricingData.findIndex(
      (item): boolean => item.id === selectedId
    );
    if (selectedIndex !== -1) {
      setActiveItem(selectedIndex);
    }
    toggleSidebar();
  };

  return (
    <section
      className="bg-accent container-width shade overflow-hidden"
      id="pricing">
      <div className="flex flex-col">
        <header className="text-el-bg relative flex items-center justify-center py-4 text-center text-2xl md:text-3xl lg:text-4xl">
          <FaBars
            className="bg-accent absolute left-0 ml-6 cursor-pointer sm:hidden"
            onClick={toggleSidebar}
          />
          <h3>pricing</h3>
        </header>

        <div className="flex h-[27.5rem] flex-row">
          <aside
            className={`text-el-bg overflow-hidden ${sidebarActive ? "w-full" : "w-0"} transition-all duration-200 sm:w-[10rem] md:w-[11.625rem]`}>
            <form
              onChange={handleChange}
              className="container-padding flex flex-col items-center gap-y-5 text-lg font-bold sm:text-xl md:text-2xl">
              {pricingData.map((priceData, i): JSX.Element => {
                const isSelected =
                  pricingData.indexOf(priceData) === activeItem;
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

          <div className="bg-el-bg w-0 grow-1 overflow-hidden">
            <div className="container-padding">
              {pricingData[activeItem]?.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

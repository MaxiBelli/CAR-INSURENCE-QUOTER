import { Fragment } from "react";
import { BRANDS, YEARS, PLANS } from "../constants";

const Form = () => {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Brand
          </label>
          <select
            name="brand"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Select Brand --</option>

            {BRANDS.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Year
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
          >
            <option value="">-- Select Year --</option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Choose a Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Get Quote"
        />
      </form>
    </>
  );
};

export default Form;

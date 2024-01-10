"use client";
import React from "react";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import MultiSelect from "../MultiSelector/MultiSelector";
import Button from "../Button/Button";
import { useAppDispatch } from "@/redux/app/hook";
import { searchData } from "@/redux/Api/searchBloodGroug/searchBloodGroups";

type DonateListSearchProps = {};

const DonateListSearch: React.FC<DonateListSearchProps> = () => {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const districtOptions = [
    {
      value: "1",
      label: "Dhaka",
    },
    {
      value: "2",
      label: "Rajshahi",
    },
    {
      value: "3",
      label: "Khulna",
    },
    {
      value: "4",
      label: "Chittagong",
    },
    {
      value: "5",
      label: "Barisal",
    },
    {
      value: "6",
      label: "Sylhet",
    },
    {
      value: "7",
      label: "Rangpur",
    },
    {
      value: "8",
      label: "Mymensingh",
    },
  ];

  const onSubmit = async (data: any) => {
    dispatch(searchData(data));
    reset();
  };

  return (
    <section>
      <div className="common">
        <div className="">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
            <p className="mt-1 text-sm">Use filters to further refine search</p>
            <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col">
                  <InputField
                    name="name"
                    label="name"
                    type="text"
                    placeholder="name"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <InputField
                    name="bloodGroup"
                    label="blood Group"
                    type="text"
                    placeholder="blood Group"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <InputField
                    name="area"
                    label="area"
                    type="text"
                    placeholder="area"
                    register={register}
                    errors={errors}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <MultiSelect
                    label="Select district"
                    name="district"
                    options={districtOptions}
                    isMulti={false}
                    required={true}
                    setValue={setValue}
                  />
                </div>
              </div>
              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button
                  onClick={reset}
                  className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
                >
                  Reset
                </button>
                <Button
                  type="submit"
                  className="active:scale-95 rounded-lg px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
                >
                  Search
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DonateListSearch;

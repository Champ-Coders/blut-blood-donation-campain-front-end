"use client";
import LoadingPage from "@/app/loading";
import InputField from "@/components/InputField/InputField";
import MultiSelect from "@/components/MultiSelector/MultiSelector";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import { blood_groups } from "@/constants/Register";
import { IUser } from "@/interfaces/common";
import {
  useGetSingleUserQuery,
  useUserProfileQuery,
} from "@/redux/Api/authApi/AuthApi";
import { useRequestForBloodMutation } from "@/redux/Api/donationApi/DonationApi";

import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const DonateNow = ({ params }: { params: { id: string } }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [request, { isLoading: updateLoading }] =
    useRequestForBloodMutation(undefined);
  const router = useRouter();

  const { data, isLoading } = useGetSingleUserQuery(params.id);

  const { data: userInfo } = useUserProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const user = userInfo?.data;

  const userData: IUser = data?.data;

  const onSubmit = async (data: any) => {
    data.bag = parseInt(data.bag);
    data.bloodGroup = data?.bloodGroup?.name;
    data.donnerId = params.id;
    const res: any = await request({ data });
    try {
      if (res?.data?.success) {
        message.success(res?.data.message);
        router.push("/");
      } else {
        message.error(res?.error?.data?.message);
        router.push("/");
      }
    } catch (error) {
      router.push("/");
    }
    router.push("/");
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    message.error("Please login first");
    return router.push("/");
  }

  return (
    <div className="py-10 px-10 sm:px-24 sm:py-16">
      <div className="text-center mb-6 sm:mb-14">
        <h1 className="text-2xl sm:text-5xl font-roboto font-bold">
          Blood Request
        </h1>
      </div>
      <div className="container mx-auto pb-24 max-w-3xl ">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          {/* Details */}
          <div className="p-5 sm:p-5 md:p-8 border border-gray-300">
            <p className="mb-4 min-w-[165px] text-lg font-semibold sm:text-xl">
              Details
            </p>
            <div className="flex-grow mb-4 w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <MultiSelect
                  placeholder="Blood Group"
                  name={"bloodGroup"}
                  options={blood_groups}
                  isMulti={false}
                  required={true}
                  setValue={setValue}
                  defaultValue={{
                    value: userData?.bloodGroup,
                    label: userData?.bloodGroup,
                  }}
                  label="Blood Group"
                />
                <InputField
                  placeholder="Total Bag"
                  name={"bag"}
                  type="number"
                  required
                  register={register}
                  errors={errors}
                  label="Need bag (1 - 2)"
                  validation={{
                    validate: (value: number) => value == 1 || value == 2,
                  }}
                />
              </div>
            </div>
            <div className="flex-grow mb-4 sm:w-1/2 w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <InputField
                  placeholder="Expected Date"
                  label="Expected Date"
                  name={"expectedDate"}
                  type="date"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex w-full sm:flex-row flex-col mb-1 sm:mb-4 justify-between items-center gap-3 sm:gap-6">
                <TextAreaField
                  rows={6}
                  register={register}
                  placeholder="Patient Description"
                  name="patientDetails"
                  required
                />
              </div>
            </div>
            <Button
              loading={updateLoading}
              htmlType="submit"
              className="relative max-w-md rounded px-5  overflow-hidden group bg-primary  hover:bg-black text-white transition-all ease-out duration-300 w-full"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-10 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Request</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DonateNow;

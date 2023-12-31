"use client";

import InputField from "@/components/InputField/InputField";
import dynamic from "next/dynamic";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import UploaderImage from "@/components/Uploader/UploaderImage";

import { useAddEventMutation } from "@/redux/Api/eventApi";
import { Button, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";

// import 'antd/dist/antd.css';

const ReactQuillText = dynamic(
  () => import("@/components/ReactQuill/ReactQuill"),
  {
    ssr: false,
  }
);

const CreateEvent = () => {
  const [addEvent] = useAddEventMutation();
  const [description, setDescription] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    // const { image, banner, ...others } = data;
    // // const image = data.image[0];
    // const imageUrl = await uploadImageBB(image[0]);
    // const bannerUrl = await uploadImageBB(banner[0]);
    // // console.log(imageUrl,bannerUrl);

    // const eventData = { image: imageUrl, banner: bannerUrl, ...others };

    // console.log(eventData);
    const eventData = {
      description,
      ...data,
    };

    message.loading("Creating Event.....");
    try {
      const res = await addEvent(eventData).unwrap();
      // console.log(res);
      if (res?.success) {
        message.success("Event created successfully");
        reset();
      } else if (res?.error?.data) {
        message.error(res?.error?.data?.message);
      } else {
        message.error("Could not create the event");
      }
    } catch (err: any) {
      console.log(err);

      if (err?.data?.errorMessages) {
        message.error(err?.data?.errorMessages[0]?.message);
      } else if (err?.data?.message) {
        message.error(err?.data.message);
      } else {
        message.error("Could not create the event");
      }
    }
  };

  return (
    <div className="text-start">
      <Breadcrumb
        items={[
          { label: `admin`, link: `/admin` },
          { label: "Events", link: `/admin/Events` },
        ]}
      />
      {/* <h1 className="text-xl font-bold my-1">Create Event</h1> */}

      <ActionBar title="Create Event">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="title"
                label="Title"
                type="text"
                placeholder="Enter Title"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="location"
                label="Location"
                type="text"
                placeholder="Enter Location"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div className="my-[10px] md:max-w-md mx-0">
              <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
                Upload Image
              </label>
              <UploaderImage name="image" setValue={setValue} />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
                Upload Event Banner
              </label>
              <UploaderImage
                name="banner"
                // register={register}
                setValue={setValue}
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="event_time"
                label="Event Time"
                type="time"
                placeholder="Enter Event Time"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="event_date"
                label="Event Date"
                type="date"
                placeholder="Enter Event Date"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <ReactQuillText
                label="Description"
                required
                setValue={setDescription}
                value={description}
              />
            </div>
          </div>

          <Button className="mt-2" type="primary" htmlType="submit">
            Create Event
          </Button>
        </form>
      </ActionBar>
    </div>
  );
};

export default CreateEvent;

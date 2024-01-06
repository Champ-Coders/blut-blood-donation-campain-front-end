"use client";
import React, { useEffect, useState } from "react";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
import { useUpdateEventMutation } from "@/redux/Api/eventApi";
import { Button, Modal, message } from "antd";
import TextAreaField from "../TextAreaField/TextAreaField";
import { uploadImageBB } from "@/hooks/ImgbbUploader";
import UploaderImage from "../Uploader/UploaderImage";
import ReactQuillText from "../ReactQuill/ReactQuill";

const EventModalUI = ({
  modalId,
  isModalOpen,
  setIsModalOpen,
  editEvent,
  setEditEvent,
}: {
  modalId: string;
  isModalOpen: any;
  setIsModalOpen: any;
  editEvent: any;
  setEditEvent: any;
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const [description, setDescription] = useState("");

  // console.log(editEvent);

  useEffect(() => {
    if (isModalOpen) {
      reset(editEvent);
    }
  }, [editEvent, isModalOpen, reset]);

  const [updateEvent] = useUpdateEventMutation();

  const onSubmit = async (data: any) => {
    // const { image, banner, ...others } = data;
    // // const image = data.image[0];
    // // console.log(data);

    // let updateImage = editEvent.image;
    // if (typeof image !== "string") {
    //   updateImage = await uploadImageBB(image[0]);
    // }
    // let updateBanner = editEvent.banner;
    // if (typeof banner !== "string") {
    //   updateBanner = await uploadImageBB(banner[0]);
    // }

    // if (typeof banner !== "string") {
    //   banner = await uploadImageBB(banner[0]);
    // }

    // console.log(imageUrl,bannerUrl);
    // console.log(updateImage, updateBanner);

    const updateData = {
      title: data?.title || editEvent?.title,
      description: description || editEvent?.description,
      image: data?.image || editEvent?.image,
      banner: data?.banner || editEvent?.banner,
      event_time: data?.event_time || editEvent?.event_time,
      event_date: data?.event_date || editEvent?.event_date,
      location: data?.location || editEvent?.location,
    };

    // console.log(updateData);

    message.loading("Updating Event.....");
    try {
      const res = await updateEvent({
        id: modalId,
        body: { ...updateData },
      }).unwrap();
      if (res?.success) {
        message.success("Event updated successfully");
        setIsModalOpen(false);
      } else if (res?.error?.data) {
        message.error(res?.error?.data?.message);
      } else {
        message.error("Could not update the event");
      }
    } catch (err: any) {
      console.log(err);

      if (err?.data?.errorMessages) {
        message.error(err?.data?.errorMessages[0]?.message);
      } else if (err?.data?.message) {
        message.error(err?.data.message);
      } else {
        message.error("Could not update the event");
      }
    }
    // reset();
  };

  console.log(editEvent);

  return (
    <Modal
      title="Edit Event"
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
      centered
    >
      <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="my-[10px]  md:max-w-md mx-0">
            <InputField
              name="title"
              label="Title"
              type="text"
              register={register}
              defaultValue={editEvent?.title}
              errors={errors}
              // required
            />
          </div>
          <div className="my-[10px]  md:max-w-md mx-0">
            <InputField
              name="location"
              label="Location"
              defaultValue={editEvent?.location}
              type="text"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="my-[10px] md:max-w-md mx-0">
            <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
              Upload Event Image
            </label>
            <UploaderImage
              name="image"
              // register={register}

              setValue={setValue}
              defaultValue={editEvent?.image}
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <label className="text-[13px] leading-6 font-inter text-gray-400 font-semibold capitalize">
              Upload Event Banner
            </label>
            <UploaderImage
              name="banner"
              // defaultValue
              // register={register}
              defaultValue={editEvent?.banner}
              setValue={setValue}
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <InputField
              name="event_time"
              label="Event Time"
              type="time"
              register={register}
              // defaultValue={editEvent?.event_time}
              errors={errors}
              // required
            />
          </div>
          <div className="my-[10px] md:max-w-md mx-0">
            <InputField
              name="event_date"
              label="Event Date"
              type="date"
              register={register}
              defaultValue={editEvent?.event_date}
              errors={errors}
              // required
            />
          </div>

          <div className="my-[10px] md:max-w-3xl mx-0">
            <ReactQuillText
              label="Description"
              required
              setValue={setDescription}
              value={description}
            />
          </div>
        </div>
        <Button className="mt-2" type="primary" htmlType="submit">
          Update Event
        </Button>
      </form>
    </Modal>
  );
};

export default EventModalUI;

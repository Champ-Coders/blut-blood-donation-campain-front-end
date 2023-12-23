"use client";

import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import config from "@/config/config";
import { uploadImageBB } from "@/hooks/ImgbbUploader";
import { useAddEventMutation } from "@/redux/Api/eventApi";

import { getUserDataFromLC } from "@/utils/local-storage";
import { Button, message, DatePicker } from "antd";
import { useForm } from "react-hook-form";
import { MdOutlineOtherHouses } from "react-icons/md";

// import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const CreateEvent = () => {
  const userData = getUserDataFromLC() as any;
  const [addEvent] = useAddEventMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // console.log(data);
    const {image,banner,...others} = data
    // const image = data.image[0];
    const imageUrl = await uploadImageBB(image[0]);
    const bannerUrl = await uploadImageBB(banner[0]);
    // console.log(imageUrl,bannerUrl);

    const eventData = { image: imageUrl, banner: bannerUrl, ...others };

    // console.log(eventData);

    message.loading("Creating Event.....");
    try {
      const res = await addEvent(eventData).unwrap();
    //   console.log(res);
      if (res) {
        message.success("Event Create successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
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
                register={register}
                errors={errors}
                required
              />
            </div>

            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="image"
                label="Event Image"
                type="file"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="banner"
                label="Event Banner"
                type="file"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="event_time"
                label="Event Time"
                type="time"
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
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <TextAreaField
                name="description"
                register={register}
                errors={errors}
                label="Description"
                required
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

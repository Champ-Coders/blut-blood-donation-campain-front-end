"use client";

import InputField from "@/components/InputField/InputField";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import config from "@/config/config";
import { useAddVolunteerMutation } from "@/redux/Api/volunteerApi";
import { Button, message } from "antd";
import { useForm } from "react-hook-form";

const CreateVolunteer = () => {
  const [addVolunteer] = useAddVolunteerMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = config.imageBbKey;

    const imgFetch = await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const newVolunteer = {
            name: data.name,
            designation: data.designation,
            image: imageData?.data?.url,
            facebook:data.facebook,
            linkedin:data.linkedin,
            github:data.github,
            instagram:data.instagram,
          };
          return newVolunteer;
        }
      });

    message.loading("Creating Volunteer.....");
    try {
      const res = await addVolunteer(imgFetch).unwrap();
      if (res) {
        message.success("Volunteer Create successfully");
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
          { label: "volunteers", link: `/admin/volunteers` },
        ]}
      />
      {/* <h1 className="text-xl font-bold my-1">Create Blog</h1> */}

      <ActionBar title="Create Volunteer">
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="name"
                label="Name"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="designation"
                label="Designation"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px] md:max-w-md mx-0">
              <InputField
                name="image"
                label="Image"
                type="file"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="facebook"
                label="Facebook Link"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="linkedin"
                label="Linkedin Link"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="github"
                label="Github Link"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="my-[10px]  md:max-w-md mx-0">
              <InputField
                name="instagram"
                label="Instagram Link"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>

          <Button className="mt-2" type="primary" htmlType="submit">
            Create Volunteer
          </Button>
        </form>
      </ActionBar>
    </div>
  );
};

export default CreateVolunteer;
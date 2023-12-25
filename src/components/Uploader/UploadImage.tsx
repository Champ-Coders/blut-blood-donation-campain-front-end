import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type ImageUploadProps = {
  name: string;
  defaultImage?: string;
  customChange?: any;
  register: Function;
};

const UploadImage = ({
  name,
  defaultImage,
  customChange,
  register,
}: ImageUploadProps) => {
    const { setValue } = useForm();
  //   const {

  //     register,
  //     reset,
  //     formState: { errors },
  //   } = useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(
    (defaultImage as string) || ""
  );
  //   const { setValue } = useFormContext();

  ////! Onchange
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      console.log(info.fileList, "fileList");
      //   setValue(name, info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        console.log(url);
        setLoading(false);
        // setValue(name, info.file.originFileObj);
        // register(name, "banner Updatet url");
        // setValue("banner1", info.file);

        register(name, "ssssssssssssssss", { shouldDirty: true });
        // Set other non-input values
        setValue("banner2", { sarwar: "ok" });
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div className="">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Upload
        name={name}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/file"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl || defaultImage ? (
          <Image
            src={imageUrl ? imageUrl : (defaultImage as string)}
            alt="avatar"
            style={{ width: "100px",height:"100px" }}
            width={60}
            height={60}
            // fill
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default UploadImage;

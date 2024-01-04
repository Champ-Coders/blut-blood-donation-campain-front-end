"use client";
import ActionBar from "@/components/UI/ActionBar";
import Breadcrumb from "@/components/UI/BreadCrumb";
import Table from "@/components/UI/Table";
import dayjs from "dayjs";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, Rate, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/InputField/InputField";
import TextAreaField from "@/components/TextAreaField/TextAreaField";
import {
  useDeleteReviewMutation,
  useGetReviewsByUserIdQuery,
  useReviewsQuery,
  useUpdateReviewMutation,
} from "@/redux/Api/reviewApi";
import MultiSelect from "@/components/MultiSelector/MultiSelector";
import { useServicesQuery } from "@/redux/Api/serviceApi";
import { getUserDataFromLC } from "@/utils/local-storage";
import {
  useGetAllRequestQuery,
  useGetDataQuery,
  useRequestForBloodMutation,
} from "@/redux/Api/donationApi/DonationApi";

const DonationRequest = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [requestId, setRequestId] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editRequest, setEditRequest] = useState({
    userId: "",
    patientDetails: "",
    bloodGroup: "",
    expectedDate: "",
    bag: 0,
    status: "",
  });

  const { data: allRequest } = useGetAllRequestQuery(undefined);
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  //   service option
  const requestOptions = allRequest?.data?.map((req: any) => ({
    value: req.id,
    label: req.title,
  }));

  // query and mutation
  const user = getUserDataFromLC();
  const [requestForBlood, { isLoading: updateLoading }] =
    useRequestForBloodMutation();

  const { data: allData } = useGetDataQuery({}, {});

  // filter review by review, service titlee, user name
  const testFindData = allData?.data?.filter((review: any) => {
    const lowercaseSearchText = searchText.toLowerCase();
    return (
      review?.review?.toLowerCase().includes(lowercaseSearchText) ||
      review?.user?.name?.toLowerCase().includes(lowercaseSearchText) ||
      review?.service?.title?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // Request Edit function
  const onSubmit = async (data: any) => {
    const updateData = {
      review: data.review,
      rating: Number(data.rating),
      service: data.service.id,
    };
    message.loading("Update Donation Request.....");
    try {
      const res = await requestForBlood({
        id: requestId,
        body: { ...updateData },
      }).unwrap();
      if (res) {
        message.success("Donation Request Update successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    reset();
  };

  const columns: any[] = [
    {
      title: "User Name",
      dataIndex: "userName",
    },
    {
      title: "Patient Details",
      dataIndex: "patientDetails",
    },
    {
      title: "Blood Group",
      dataIndex: "bloodGroup",
    },

    {
      title: "Expected Date",
      dataIndex: "expectedDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Blood Bag",
      dataIndex: "bag",
    },

    {
      title: "Action",
      render: function (data: any) {
        const selectedReview = testFindData.find(
          (blog: any) => blog.id === data.id
        );
        return (
          <>
            <Button
              loading={updateLoading}
              className="mr-[6px]"
              onClick={() => {
                setRequestId(selectedReview.id);
                setEditRequest({});
                setIsModalOpen(true);
              }}
              type="default"
            >
              <EditOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <div>
      <Breadcrumb
        items={[
          {
            label: "user",
            link: "/user",
          },
        ]}
      />

      <ActionBar title="Donation Request">
        <Input
          type="text"
          allowClear
          size="middle"
          placeholder="Search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="max-w-sm mr-4"
        />
        {/* <div>
          <Link href="/admin/review/create">
            <Button type="default">Create</Button>
          </Link>
        </div> */}
      </ActionBar>
      <Table columns={columns} dataSource={testFindData} />

      {/* Edit Modal */}
      <Modal
        title="Edit Review"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        <form className="block w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            {/* <div className="my-[10px] mx-0">
              <InputField
                name="rating"
                label="Rating"
                type="text"
                defaultValue={editRequest?.rating}
                register={register}
                errors={errors}
              />
            </div> */}

            <div className="my-[10px]  md:max-w-md mx-0">
              {/*   <MultiSelect
                label="Select Service"
                name="service"
                options={requestOptions}
                isMulti={false}
                defaultValue={editRequest.service}
                required={false}
                setValue={setValue}
              /> */}
            </div>
            <div className="my-[10px] mx-0">
              {/*  <TextAreaField
                name="review"
                register={register}
                errors={errors}
                defaultValue={editRequest?.}
                label="review"
                rows={4}
              /> */}
            </div>
          </div>
          <Button
            loading={updateLoading}
            className="mt-2"
            type="primary"
            htmlType="submit"
          >
            Update Request
          </Button>
        </form>
      </Modal>
    </div>
  );
};
export default DonationRequest;

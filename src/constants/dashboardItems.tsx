import type { MenuProps } from "antd";
import {
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  AccountBookFilled,
  AlipayCircleFilled,
  BorderOuterOutlined,
  UserOutlined,
  UsergroupDeleteOutlined,
  ClusterOutlined,
  UserSwitchOutlined,
  MessageOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./userRole";
import { RiGitPullRequestFill } from "react-icons/ri";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { FaCommentDots } from "react-icons/fa";

export const dashboardItems = (role: USER_ROLE) => {
  // ! common sidebar for every user
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <button className="bg-red-60">Profile</button>,
      key: "profile",
      icon: (
        <UserSwitchOutlined
          style={{
            fontSize: "18px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/profile`}>
              Your Profile
            </Link>
          ),
          key: `/${role}/profile`,
        },
      ],
    },
  ];
  // ! Admin Items start
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <button className=" ">Manage Users</button>,
      key: "manage-user",
      icon: (
        <UsergroupDeleteOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/manage-users`}>
              All Users
            </Link>
          ),
          key: "All-users",
          icon: (
            <UserOutlined
              style={{
                fontSize: "18px",
              }}
            />
          ),
        },
        {
          label: (
            <Link className="" href={`/admin/manage-donors`}>
              All Donation
            </Link>
          ),
          key: "donar",
          icon: (
            <UserOutlined
              style={{
                fontSize: "18px",
                // marginRight:"5px"
                // borderRadius: "10px",
              }}
            />
          ),
        },
        {
          label: (
            <Link className="" href={`/admin/pending-donation`}>
              Pending Donation
            </Link>
          ),
          key: "pending",
          icon: (
            <UserOutlined
              style={{
                fontSize: "18px",
                // marginRight:"5px"
                // borderRadius: "10px",
              }}
            />
          ),
        },
      ],
    },
    {
      label: <button className=" ">Manage Service</button>,
      key: "manage-service",
      icon: (
        <CreditCardOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/service/create`}>
              Create service
            </Link>
          ),
          key: `/admin/service/create`,
        },
        {
          label: (
            <Link className="" href={`/admin/service`}>
              service List
            </Link>
          ),
          key: `/admin/service`,
        },
      ],
    },
    {
      label: <button className=" ">Manage Event</button>,
      key: "manage-event",
      icon: (
        <CreditCardOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/event/create`}>
              Create Event
            </Link>
          ),
          key: `/admin/event/create`,
        },
        {
          label: (
            <Link className="" href={`/admin/event`}>
              Event List
            </Link>
          ),
          key: `/admin/event`,
        },
        {
          label: (
            <Link className="" href={`/admin/popular-event`}>
              Popular Event
            </Link>
          ),
          key: `/admin/popular-event`,
        },
      ],
    },
    {
      label: <button className=" ">Manage Blogs</button>,
      key: "manage-blogs",
      icon: (
        <ClusterOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/blogs/create`}>
              Create blogs
            </Link>
          ),
          key: `/admin/blogs/create`,
        },
        {
          label: (
            <Link className="" href={`/admin/blogs`}>
              blogs List
            </Link>
          ),
          key: `/admin/blogs`,
        },
      ],
    },
    {
      label: <button className=" ">Manage FAQ</button>,
      key: "manage-faq",
      icon: (
        <ThunderboltOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/faq/create`}>
              Create faq
            </Link>
          ),
          key: `/admin/faq/create`,
        },
        {
          label: (
            <Link className="" href={`/admin/faq`}>
              faq List
            </Link>
          ),
          key: `/admin/faq`,
        },
      ],
    },
    {
      label: <button className=" ">Volunteers</button>,
      key: "Volunteers",
      icon: (
        <FileTextOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/volunteers/create`}>
              Volunteers Create
            </Link>
          ),
          key: `/admin/volunteers/create`,
        },
        {
          label: (
            <Link className="" href={`/admin/volunteers`}>
              Volunteers List
            </Link>
          ),
          key: `/admin/volunteers`,
        },
      ],
    },
    {
      label: <button className=" ">Manage Review</button>,
      key: "manage-review",
      icon: (
        <FileTextOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/review`}>
              Review List
            </Link>
          ),
          key: `/admin/review`,
        },
        // {
        //   label: (
        //     <Link className="" href={`/admin/review/create`}>
        //       Create review
        //     </Link>
        //   ),
        //   key: `/admin/review/create`,
        // },
      ],
    },

    {
      label: <button className=" "> Chat List</button>,
      key: "chat-list",
      icon: (
        <MessageOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/chat`}>
              Chat List
            </Link>
          ),
          key: `/admin/chat`,
        },
      ],
    },
    {
      label: <button className=" ">Manage Contact</button>,
      key: "manage-contact",
      icon: (
        <MailOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      children: [
        {
          label: (
            <Link className="" href={`/admin/contact`}>
              Contact List
            </Link>
          ),
          key: `/admin/contact`,
        },
      ],
    },
  ];

  // ! PatientSidebar ITems
  const patientSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: (
        <Link className="" href={`/${role}/donation-history`}>
          Donation History
        </Link>
      ),
      icon: (
        <ThunderboltOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      key: `/${role}/donation-history`,
    },
    {
      label: (
        <Link className="" href={`/${role}/donation-request`}>
          Donation Request
        </Link>
      ),
      icon: (
        <VscGitPullRequestGoToChanges
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      key: `/${role}/donation-request`,
    },
    {
      label: (
        <Link className="" href={`/${role}/review`}>
          Review/Feedback History
        </Link>
      ),
      icon: (
        <AccountBookFilled
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      key: `/${role}/review`,
    },
    {
      label: (
        <Link className="" href={`/${role}/comments-history`}>
          Comments History
        </Link>
      ),
      icon: (
        <FaCommentDots
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
          }}
        />
      ),
      key: `/${role}/comments-history`,
    },
  ];

  if (role === USER_ROLE.admin) return adminSidebarItems;
  else if (role === USER_ROLE.user) return patientSidebarItems;
};

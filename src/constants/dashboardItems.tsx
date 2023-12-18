import type { MenuProps } from "antd";
import {
  ProfileOutlined,
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
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./userRole";

export const dashboardItems = (role: USER_ROLE) => {
  // ! common sidebar for every user
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <button className="text-xl font-semibold my-[2rem]">Profile</button>,
      key: "profile",
      icon: (
        <ProfileOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/profile`}>Your Profile</Link>,
          key: `/${role}/profile`,
        },
      ],
    },
  ];
  // ! Admin Items start
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage Users</button>,
      key: "manage-user",
      icon: (
        <UsergroupDeleteOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <button className="text-xl font-semibold my-[2rem]">All Users</button>,
          key: "All-users",
          icon: (
            <UserOutlined
              style={{
                fontSize: "1.5rem",
                borderRadius: "10px",
                margin: "2rem 3px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/all-users`}>Users List</Link>
              ),
              key: `/admin/user/all-users-list`,
            },
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/all-users/create`}>
                  Create user{" "}
                </Link>
              ),
              key: `/admin/manage-users/create`,
            },
          ],
        },
        {
          label: "donar",
          key: "donar",
          icon: (
            <UserOutlined
              style={{
                fontSize: "1.5rem",
                borderRadius: "10px",
                margin: "2rem 3px",
              }}
            />
          ),
          children: [
            {
              label: <Link className="text-[16px] font-semibold" href={`/admin/manage-users/donar`}>donar List</Link>,
              key: `admin/manage-users/donar`,
            },
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/donar/create`}>
                  Create Donar
                </Link>
              ),
              key: `/admin/manage-users/donar/create`,
            },
          ],
        },
        {
          label: "donars",
          key: "donars",
          icon: (
            <UserOutlined
              style={{
                fontSize: "1.5rem",
                borderRadius: "10px",
                margin: "2rem 3px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/donars`}>donars List</Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/all-users/donars/create`}>
                  Create donar
                </Link>
              ),
              key: `//admin/manage-users/all-users/donars/create`,
            },
          ],
        },
        {
          label: "donars",
          key: "donars",
          icon: (
            <UserOutlined
              style={{
                fontSize: "1.5rem",
                borderRadius: "10px",
                margin: "2rem 3px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/donars`}>donars List</Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link className="text-[16px] font-semibold" href={`/admin/manage-users/all-users/donars/create`}>
                  Create donar
                </Link>
              ),
              key: `//admin/manage-users/all-users/donars/create`,
            },
          ],
        },
      ],
    },
    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage Service</button>,
      key: "manage-service",
      icon: (
        <CreditCardOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/service`}>service List</Link>,
          key: `/admin/service`,
        },
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/service/create`}>Create service</Link>,
          key: `/admin/service/create`,
        },
      ],
    },
    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage Blogs</button>,
      key: "manage-blogs",
      icon: (
        <ClusterOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/blogs`}>blogs List</Link>,
          key: `/admin/blogs`,
        },
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/blogs/create`}>Create blogs</Link>,
          key: `/admin/blogs/create`,
        },
      ],
    },
    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage FAQ</button>,
      key: "manage-faq",
      icon: (
        <ThunderboltOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/faq`}>faq List</Link>,
          key: `/admin/faq`,
        },
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/faq/create`}>Create faq</Link>,
          key: `/admin/faq/create`,
        },
      ],
    },
    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage Review</button>,
      key: "manage-review",
      icon: (
        <FileTextOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/module`}>Modules List</Link>,
          key: `/admin/module`,
        },
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/module/create`}>Create modules</Link>,
          key: `/admin/module/create`,
        },
      ],
    },
    {
      label: <button className="text-xl font-semibold my-[2rem]">Manage NavItems</button>,
      key: "manage-navItem",
      icon: (
        <ScheduleOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      children: [
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/navItem`}>navItem List</Link>,
          key: `/admin/navItem`,
        },
        {
          label: <Link className="text-[16px] font-semibold" href={`/admin/navItem/create`}>Create navItem</Link>,
          key: `/admin/navItem/create`,
        },
      ],
    },
  ];
  // ! donar SidebarItems
  const donarSidebarItems: MenuProps["items"] = [
    {
      label: <Link className="text-[16px] font-semibold" href={`/${role}/admin`}>Manage Admin</Link>,
      icon: (
        <AlipayCircleFilled
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      key: `/${role}/admin`,
    },
  ];

  // ! PatientSidebar ITems
  const patientSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link className="text-[16px] font-semibold" href={`/${role}/booking`}>Booking History</Link>,
      icon: (
        <ThunderboltOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      key: `/${role}/Service`,
    },
    {
      label: <Link className="text-[16px] font-semibold" href={`/${role}/review`}>Review/Feedback History</Link>,
      icon: (
        <AccountBookFilled
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      key: `/${role}/review`,
    },

    {
      label: <Link className="text-[16px] font-semibold" href={`/${role}/support`}>Support and Help</Link>,
      icon: (
        <BorderOuterOutlined
          style={{
            fontSize: "1.5rem",
            borderRadius: "10px",
            margin: "2rem 3px",
          }}
        />
      ),
      key: `/${role}/support`,
    },
  ];

  if (role === USER_ROLE.admin) return adminSidebarItems;
  else if (role === USER_ROLE.donar) return donarSidebarItems;
  else if (role === USER_ROLE.patient) return patientSidebarItems;
};

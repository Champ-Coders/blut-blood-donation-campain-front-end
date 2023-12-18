import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  AccountBookFilled,
  AlipayCircleFilled,
  BorderOuterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./userRole";

export const dashboardItems = (role: USER_ROLE) => {
  // ! common sidebar for every user
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Your Profile</Link>,
          key: `/${role}/profile`,
        },
      ],
    },
  ];
// ! Admin Items start
  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage Users",
      key: "manage-user",
      icon: <ScheduleOutlined />,
      children: [
        {
          label: "All Users",
          key: "All-users",
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/manage-users/all-users`}>Users List</Link>
              ),
              key: `/admin/user/all-users-list`,
            },
            {
              label: (
                <Link href={`/admin/manage-users/all-users/create`}>
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
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/manage-users/donar`}>donar List</Link>
              ),
              key: `admin/manage-users/donar`,
            },
            {
              label: (
                <Link href={`/admin/manage-users/donar/create`}>
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
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/manage-users/donars`}>donars List</Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link href={`/admin/manage-users/all-users/donars/create`}>
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
          icon: <UserOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/manage-users/donars`}>donars List</Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link href={`/admin/manage-users/all-users/donars/create`}>
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
      label: "Manage service",
      key: "manage-service",
      icon: <CreditCardOutlined />,
      children: [
        {
          label: <Link href={`/admin/service`}>service List</Link>,
          key: `/admin/service`,
        },
        {
          label: <Link href={`/admin/service/create`}>Create service</Link>,
          key: `/admin/service/create`,
        },
       
      ],
    },
    {
      label: "Manage blogs",
      key: "manage-blogs",
      icon: <FileTextOutlined />,
      children: [
        
        {
          label: <Link href={`/admin/blogs`}>blogs List</Link>,
          key: `/admin/blogs`,
        },
        {
          label: <Link href={`/admin/blogs/create`}>Create blogs</Link>,
          key: `/admin/blogs/create`,
        },
      ],
    },
    {
      label: "Manage faq",
      key: "manage-faq",
      icon: <ThunderboltOutlined />,
      children: [
        
        {
          label: <Link href={`/admin/faq`}>faq List</Link>,
          key: `/admin/faq`,
        },
        {
          label: <Link href={`/admin/faq/create`}>Create faq</Link>,
          key: `/admin/faq/create`,
        },
      ],
    },
    {
      label: "Manage review",
      key: "manage-review",
      icon: <ThunderboltOutlined />,
      children: [
        
        {
          label: <Link href={`/admin/module`}>Modules List</Link>,
          key: `/admin/module`,
        },
        {
          label: <Link href={`/admin/module/create`}>Create modules</Link>,
          key: `/admin/module/create`,
        },
      ],
    },
    {
      label: "Manage navItem",
      key: "manage-navItem",
      icon: <ThunderboltOutlined />,
      children: [
        
        {
          label: <Link href={`/admin/navItem`}>navItem List</Link>,
          key: `/admin/navItem`,
        },
        {
          label: <Link href={`/admin/navItem/create`}>Create navItem</Link>,
          key: `/admin/navItem/create`,
        },
      ],
    },
  ];
// ! donar SidebarItems
  const donarSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <AlipayCircleFilled />,
      key: `/${role}/admin`,
    },
  ];

  // ! PatientSidebar ITems
  const patientSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/booking`}>Booking History</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/Service`,
    },
    {
      label: <Link href={`/${role}/review`}>Review/Feedback History</Link>,
      icon: <AccountBookFilled />,
      key: `/${role}/review`,
    },

    {
      label: <Link href={`/${role}/support`}>Support and Help</Link>,
      icon: <BorderOuterOutlined />,
      key: `/${role}/support`,
    },
  ]

  if (role === USER_ROLE.admin) return adminSidebarItems;
  else if (role === USER_ROLE.donar) return donarSidebarItems;
  else if (role === USER_ROLE.patient) return patientSidebarItems;
};

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
  UserSwitchOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./userRole";

export const dashboardItems = (role: USER_ROLE) => {
  // ! common sidebar for every user
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <button className="">Profile</button>,
      key: "profile",
      icon: (
        <UserSwitchOutlined
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
          label: <button className=" ">All Users</button>,
          key: "All-users",
          icon: (
            <UserOutlined
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
                <Link className="" href={`/admin/manage-users/all-users`}>
                  Users List
                </Link>
              ),
              key: `/admin/user/all-users-list`,
            },
            {
              label: (
                <Link
                  className=""
                  href={`/admin/manage-users/all-users/create`}
                >
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
                fontSize: "18px",
                // marginRight:"5px"
                // borderRadius: "10px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="" href={`/admin/manage-users/donar`}>
                  donar List
                </Link>
              ),
              key: `admin/manage-users/donar`,
            },
            {
              label: (
                <Link className="" href={`/admin/manage-users/donar/create`}>
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
                fontSize: "18px",
                // marginRight:"5px"
                // borderRadius: "10px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="" href={`/admin/manage-users/donars`}>
                  donars List
                </Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link
                  className=""
                  href={`/admin/manage-users/all-users/donars/create`}
                >
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
                fontSize: "18px",
                // marginRight:"5px"
                // borderRadius: "10px",
              }}
            />
          ),
          children: [
            {
              label: (
                <Link className="" href={`/admin/manage-users/donars`}>
                  donars List
                </Link>
              ),
              key: `/admin/manage-users/donars`,
            },
            {
              label: (
                <Link
                  className=""
                  href={`/admin/manage-users/all-users/donars/create`}
                >
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
            <Link className="" href={`/admin/service`}>
              service List
            </Link>
          ),
          key: `/admin/service`,
        },
        {
          label: (
            <Link className="" href={`/admin/service/create`}>
              Create service
            </Link>
          ),
          key: `/admin/service/create`,
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
            <Link className="" href={`/admin/blogs`}>
              blogs List
            </Link>
          ),
          key: `/admin/blogs`,
        },
        {
          label: (
            <Link className="" href={`/admin/blogs/create`}>
              Create blogs
            </Link>
          ),
          key: `/admin/blogs/create`,
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
            <Link className="" href={`/admin/faq`}>
              faq List
            </Link>
          ),
          key: `/admin/faq`,
        },
        {
          label: (
            <Link className="" href={`/admin/faq/create`}>
              Create faq
            </Link>
          ),
          key: `/admin/faq/create`,
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
            <Link className="" href={`/admin/module`}>
              Modules List
            </Link>
          ),
          key: `/admin/module`,
        },
        {
          label: (
            <Link className="" href={`/admin/module/create`}>
              Create modules
            </Link>
          ),
          key: `/admin/module/create`,
        },
      ],
    },
    {
      label: <button className=" ">Manage NavItems</button>,
      key: "manage-navItem",
      icon: (
        <ScheduleOutlined
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
            <Link className="" href={`/admin/navItem`}>
              navItem List
            </Link>
          ),
          key: `/admin/navItem`,
        },
        {
          label: (
            <Link className="" href={`/admin/navItem/create`}>
              Create navItem
            </Link>
          ),
          key: `/admin/navItem/create`,
        },
      ],
    },
  ];
  // ! donar SidebarItems
  const donarSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link className="" href={`/${role}/admin`}>
          Manage Admin
        </Link>
      ),
      icon: (
        <AlipayCircleFilled
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
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
      label: (
        <Link className="" href={`/${role}/booking`}>
          Booking History
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
      key: `/${role}/Service`,
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
        <Link className="" href={`/${role}/support`}>
          Support and Help
        </Link>
      ),
      icon: (
        <BorderOuterOutlined
          style={{
            fontSize: "18px",
            // marginRight:"5px"
            // borderRadius: "10px",
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

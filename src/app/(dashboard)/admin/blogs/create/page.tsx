'use client'
import Breadcrumb from "@/components/UI/BreadCrumb"

const CreateBlog = () => {
  return (
    <div>
        <Breadcrumb
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "blogs",
            link: "/admin/blogs",
          },
        ]}
      />
    </div>
  )
}
export default CreateBlog
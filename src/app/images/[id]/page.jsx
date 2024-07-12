import DetailPost from "@/component/detailPost"
import SideBar from "@/component/sidebar"

export default function page({ params: { id } }) {
  return (
    <div className="bg-gray-50 h-screen">

      <SideBar />
      <DetailPost id={id} />
    </div>
  )
}


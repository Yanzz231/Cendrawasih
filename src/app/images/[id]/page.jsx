import DetailPost from "@/component/detailPost"

export default function page({ params: { id } }) {
  return (
    <div className="bg-gray-50 h-screen">
      <DetailPost id={id} />
    </div>
  )
}


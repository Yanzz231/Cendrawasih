import DetailPost from "@/component/detailPost"

export default function page({ params: { id } }) {
  return (
    <DetailPost id={id} />
  )
}


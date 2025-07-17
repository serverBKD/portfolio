import type { Title } from "@/types/types"

export default function Titles({ title }: { title: Title }) {
  return (
    <section className="title-box">
      <h1>
        { title }
      </h1>
    </section>
  )
}

import type { DataTech } from '../types/types.d.ts'

export default function Technologies({ data }: { data: DataTech[] }) {
  return (
    <section className="techs">
      <article>
        {data?.map((item: DataTech) => (
          <div key={item.id}>
            <img src={item.img} alt={item.lang} />
          </div>
        ))}
      </article>
    </section>
  )
}

import Image from 'next/image'
import { treasuresOfNature } from '../../../lib/constants/data'

const TreasuresOfNature = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        {/* <div className="flex gap-5 items-center">
          <h2 className="text-7xl text-center text-white bg-obsidian p-5 w-full">
            Treasures of Nature
          </h2>
          <h2 className="text-7xl text-center text-white bg-ruby p-5 w-full">
            Preserved in Time
          </h2>
        </div> */}
        <h2 className="text-5xl font-semibold mb-10 text-center">
          Treasures of Nature, Preserved in Time
        </h2>

        <div className="mt-16 max-w-6xl mx-auto">
          {treasuresOfNature.map((item, i) => (
            <div
              key={i}
              className={`
                mb-8 flex flex-col 
                md:flex-row 
                items-center md:justify-between md:space-x-8
                ${i % 2 !== 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}
            `}
            >
              {/* IMAGE */}

              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={350}
                className="drop-shadow-2xl object-contain h-[500px]"
              />

              {/* CONTENT */}
              <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-semibold mb-5">{item.title}</h3>

                {item.type === 'intro-with-bullets' && (
                  <>
                    <p
                      className="text-lg mb-4"
                      dangerouslySetInnerHTML={{ __html: item.description[0] }}
                    />

                    <ul className="list-disc ml-6 space-y-2">
                      {item.description.slice(1).map((d, idx) => (
                        <li
                          key={idx}
                          className="text-lg"
                          dangerouslySetInnerHTML={{ __html: d }}
                        />
                      ))}
                    </ul>
                  </>
                )}

                {item.type === 'paragraphs' &&
                  item.description.map((d, idx) => (
                    <p key={idx} className="text-lg mb-3">
                      {d}
                    </p>
                  ))}

                {item.type === 'labeled-list' && (
                  <>
                    <p className="text-lg mb-4">{item.description.intro}</p>

                    {item.description.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-lg mb-3">
                        {p}
                      </p>
                    ))}

                    <div className="mt-4 space-y-2">
                      {item.description.fields.map((field, idx) => (
                        <p key={idx} className="text-lg">
                          <strong>{field.label}:</strong> {field.value}
                        </p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TreasuresOfNature

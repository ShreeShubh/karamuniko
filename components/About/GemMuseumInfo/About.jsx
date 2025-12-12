import Stack from '../../ui/Stack/Stack'

const images = [
  '/gem-museum-info/img01.jpg',
  '/gem-museum-info/img02.jpg',
  '/gem-museum-info/img03.jpg',
]

const About = () => {
  return (
    <div className="w-full h-full">
      <Stack
        randomRotation={true}
        sensitivity={160}
        sendToBackOnClick={true}
        cards={images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`card-${i}`}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        ))}
      />
    </div>
  )
}

export default About

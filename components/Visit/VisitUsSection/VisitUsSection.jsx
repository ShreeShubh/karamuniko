import Title from '../../ui/Title/Title'

const VisitUsSection = () => {
  return (
    <section
      className="relative overflow-hidden pb-16 px-4 md:px-12 bg-white"
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-easing="ease"
    >
      <div className="container mx-auto px-8">
        <Title
          title="Visit Us"
          subtitle="Find us easily and plan your visit to KaramUniKO"
          cta="Know More"
        />
        {/* Heading */}
        {/* <div className="text-center mb-10">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 hover:text-primary transition-colors">
            Visit Us
          </h2>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Find us easily and plan your visit to KaramUniKO
          </p>
        </div> */}

        {/* Map Card */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {/* Optional overlay gradient */}
            <div className="" />

            <iframe
              title="KaramUniKO Location Map"
              className="w-full h-80 sm:h-[400px] md:h-[500px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.123456789012!2d72.824123456!3d21.181234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc0abcd12345%3A0x1234567890abcdef!2s5Q25%2BVQ%2C%20New%20Magdalla%2C%20Surat%2C%20Gujarat%20395007!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Floating Action */}
          <div className="flex justify-center mt-6">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm md:text-base
            transition-all duration-300 hover:bg-gray-800 hover:scale-105 shadow-lg"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisitUsSection

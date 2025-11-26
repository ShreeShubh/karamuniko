export const navMenu = [
  // {
  //   label: 'Visit',
  //   link: '/visit',
  //   children: [
  //     { label: 'Plan Your Visit', link: '/visit' },
  //     { label: 'Buy Tickets', link: '/tickets' },
  //     //{ label: 'Free Tour', link: '/free-tour' },
  //     //{ label: 'Guided Tours', link: '/guided-tours' },
  //     //{ label: 'School Visits', link: '/school-visits' },
  //     //{ label: 'Workshops', link: '/workshops' },
  //     //{ label: 'Museum Map', link: '/museum-map' },
  //     //   { label: 'Feedback', link: '/feedback' },
  //     //   { label: 'Contact', link: '/contact' },
  //   ],
  // },
  {
    label: 'Home',
    link: '/',
    children: [],
  },
  {
    label: 'Plan Your Visit',
    link: '/visit',
    children: [],
  },
  {
    label: 'Exhibitions & Events',
    link: '/exhibitions-events',
    children: [],
  },
  {
    label: 'Collections',
    //link: '/collections',
    children: [
      { label: 'The KaramUniko Collections', link: '/collections' },
      { label: 'Rare Stones', link: '/collections/rare-stones' },
      { label: 'Crystal Gallery', link: '/collections/crystal' },
      { label: 'The Gemology Story', link: '/collections/gemology-story' },
    ],
  },
  {
    label: 'About',
    link: '/about',
    children: [
      { label: 'Our Journey', link: '/karamuniko-museum-journey' },
      { label: 'Policies', link: '/policy' },
    ],
  },
  {
    label: 'Learn',
    link: '/learn',
    children: [
      { label: 'Learn with the Museum', link: '/learn-with-karamuniko-museum' },
      { label: 'Blog', link: '/blog' },
      { label: 'The KaramUniko Podcast', link: '/karamuniko-museum-podcast' },
      { label: 'Research At KaramUniko', link: '/research-at-karamuniko' },
    ],
  },
  {
    label: 'Auction',
    link: '/auction',
    children: [],
  },
]

export const treasuresOfNature = [
  {
    image: '/home/treasures/treasures1.png',
    title: 'Seven Trunk Ganesha',
    type: 'intro-with-bullets',
    description: [
      '<strong>Each of the seven trunks of this naturally formed Ganesha carries profound symbolic meaning — representing the eternal truth found in the sacred number seven, the rhythm through which the universe flows.</strong>',
      'Seven Chakras The energy centers within the human body — from root to crown — guiding physical, emotional, and spiritual awakening.',
      'Seven Days of the Week The cosmic cycle of time, reminding us that every moment is part of a divine rhythm.',
      'Seven Continents & Seven Seas The unity and wholeness of our planet — reflecting the oneness of creation.',
      //'Seven Rishis (Saptarishi) The ancient Vedic sages who illuminate the path of wisdom and dharma for humanity.',
      //'Seven Colors of the Rainbow The full spectrum of divine light — symbolizing purity, joy, and enlightenment.',
      //'Seven Musical Notes (Swaras) The foundation of universal sound and harmony — the music through which creation itself vibrates.',
    ],
  },
  {
    image: '/home/treasures/treasures2.png',
    title: 'Royal Bouquet Crystal',
    type: 'labeled-list',
    description: {
      intro:
        'A Natural Symphony of Elegance and Purity The Royal Bouquet Crystal blooms not from soil, but from the heart of the Earth itself. Each radiant rod of pure white crystal rises upward like a divine floral arrangement — a bouquet sculpted by nature’s unseen hands.',
      paragraphs: [
        'This breathtaking formation symbolizes unity, grace, and divine ascension — much like flowers reaching for the light.',
        //'Every glance at the Royal Bouquet Crystal feels like witnessing nature’s offering — a bouquet fit for royalty, formed over thousands of years without human touch.',
      ],
      fields: [
        { label: 'Origin', value: 'Earth’s natural mineral matrix' },
        { label: 'Formation', value: 'Naturally grown crystal cluster' },
        {
          label: 'Appearance',
          value:
            'Petal-like rods in luminous white hues, emerging from earthy brown matrix',
        },
        { label: 'Symbolism', value: 'Purity • Unity • Spiritual blooming' },
      ],
    },
  },
  {
    image: '/home/treasures/treasures3.png',
    title: 'Karam Earth’s Vision Specimen',
    type: 'paragraphs',
    description: [
      'This rare natural agate–quartz formation symbolizes the wondrous union of Earth and Light. The circular, eye-like patterns within it represent the Earth’s self-awareness — as if the planet itself is gazing at its own creation. Its earthy outer surface reflects the grounded essence of nature, while the translucent inner layers radiate light, consciousness, and beauty. This specimen stands as a breathtaking testament to nature’s artistry, depth, and creative intelligence.',
    ],
  },
]

export const visitMuseum = [
  {
    icon: '/home/visit-museum/image01.jpg',
    title: 'Plan Your Visit',
    description:
      'Discover essential information to make the most of your museum experience, including opening hours, ticket options, and visitor guidelines.',
    link: '/plan-your-visit',
  },
  {
    icon: '/home/visit-museum/image02.jpg',
    title: 'Museum Map',
    description:
      'Discover essential information to make the most of your museum experience, including opening hours, ticket options, and visitor guidelines.',
    link: '/plan-your-visit',
  },
  {
    icon: '/home/visit-museum/image03.png',
    title: 'Galleries',
    description:
      'Discover essential information to make the most of your museum experience, including opening hours, ticket options, and visitor guidelines.',
    link: '/plan-your-visit',
  },
  {
    icon: '/home/visit-museum/image01.jpg',
    title: 'Family Visit',
    description:
      'Discover essential information to make the most of your museum experience, including opening hours, ticket options, and visitor guidelines.',
    link: '/plan-your-visit',
  },
]

export const testimonials = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/XBdWVG9J7po',
    title: 'A Magical Experience',
    description:
      'Visiting KaramUniKO was like stepping into nature’s secret gallery. The gemstones here are untouched by human hands, yet they radiate more beauty than any crafted jewel. Truly a spiritual and eye-opening experience.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/XBdWVG9J7po?si=DQqmEL8dmXmeuKnQ',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/PMWZh5KA-9A',
    title: 'Earth’s Rhythm',
    description:
      'Each crystal tells a story older than civilization itself — you can feel the Earth’s rhythm here.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/PMWZh5KA-9A?si=XsjIfP193KP62Nkg',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/G5f7KPw0igQ',
    title: 'Unforgettable Energy',
    description:
      'The KaramUniKO experience connects you deeply with the planet’s creative energy — unforgettable.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/G5f7KPw0igQ?si=NRve-70vowgRyrPa',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/09DnPh4k2Q8',
    title: 'Nature’s Artistry',
    description:
      'The artistry of nature is alive in every piece — breathtaking and humbling to witness.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/09DnPh4k2Q8?si=pBMiyxbRdItwn7YH',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/O4uQallhdEY',
    title: 'Patience of Nature',
    description:
      'Each gem here speaks of patience — centuries of creation embodied in beauty and calm.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/O4uQallhdEY?si=jzZ8_byAcHRpUlxk',
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/embed/Y5pl_sf-5PQ',
    title: 'Pure Craft of the Earth',
    description:
      'Nature’s craftsmanship cannot be replicated — KaramUniKO celebrates that truth perfectly.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/Y5pl_sf-5PQ?si=Q_ZlwAlth46tvI5b',
  },
  {
    id: 7,
    videoUrl: 'https://www.youtube.com/embed/zDjGS6eXwe4',
    title: 'Unseen Beauty Revealed',
    description:
      'KaramUniKO reveals the unseen beauty within the Earth — a masterpiece of nature’s patience and perfection.',
    cta: 'Watch on YouTube →',
    youtubeLink: 'https://youtu.be/zDjGS6eXwe4?si=DihPmJq8rLl5SNw2',
  },
]

import gsap from 'gsap'

export function animateHeroEntrance(elements) {
  const {
    eyebrow,
    title,
    description,
    button,
    meta,
    coreLabel,
    scroll,
  } = elements

  const timeline = gsap.timeline({
    defaults: {
      ease: 'power3.out',
    },
  })

  timeline
    .fromTo(
      eyebrow,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    )
    .fromTo(
      title,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      '-=0.5'
    )
    .fromTo(
      description,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      '-=0.55'
    )
    .fromTo(
      button,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.4'
    )
    .fromTo(
      meta,
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.35'
    )
    .fromTo(
      coreLabel,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.7,
      },
      '-=0.4'
    )
    .fromTo(
      scroll,
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      '-=0.3'
    )

  return timeline
}
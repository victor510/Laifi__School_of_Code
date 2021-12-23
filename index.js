gsap.from('.icons', {
  duration: 1,
  left: '-100px',
  stagger: .5
})
gsap.from('.main-content',
{
  duration: 1.3,
  opacity: 0,
  marginTop: '5rem',
  stagger: 2
})

gsap.from('.btn', {
  delay: 1,
  duration: 2,
  opacity:0,
  bottom: '10%'
})
gsap.from('ul li', {
  duration: 1.5,
  transform: 'translateY(-200px)',
  opacity: 0,
  stagger: .25
})
gsap.from('.mini-bar',
{
  delay: 1,
  duration: 2.5,
  opacity: 0,  
  bottom: '40%',
  ease: 'elastic',
  stagger: .3
})

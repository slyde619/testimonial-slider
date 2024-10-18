const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      job: "UX Designer",
      img: "https://placehold.jp/150x150.png",
      review: "Working with this team was a game-changer for our project. Their attention to detail and innovative solutions exceeded our expectations!"
    },
    {
      id: 2,
      name: "Michael Chen",
      job: "Software Engineer",
      img: "https://placehold.jp/150x150.png",
      review: "I'm impressed by the quality of work and the seamless collaboration. They delivered a robust solution that perfectly met our complex requirements."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      job: "Product Manager",
      img: "https://placehold.jp/150x150.png",
      review: "The team's agility and responsiveness were outstanding. They quickly adapted to our changing needs and delivered a product that our users love."
    },
    {
      id: 4,
      name: "David Nkosi",
      job: "Marketing Director",
      img: "https://placehold.jp/150x150.png",
      review: "Their expertise in creating intuitive user interfaces significantly boosted our conversion rates. I highly recommend their services!"
    },
    {
      id: 5,
      name: "Lisa Tanaka",
      job: "Startup Founder",
      img: "https://placehold.jp/150x150.png",
      review: "As a startup, we needed a partner who could bring our vision to life. This team not only met but exceeded our expectations, delivering a product that set us apart in the market."
    }
];

const author = document.querySelector('#author')
const authorsJob = document.querySelector('#job')
const authorImg = document.querySelector('#author__img')
const info = document.querySelector('#info')
const controlBtns = document.querySelectorAll('.btn')
const surpriseBtn = document.querySelector('.btn-surprise')

// Starting index item
let currentItem = 0

// Load initial item 
window.addEventListener("DOMContentLoaded", () => {
    // set currentItem to testimonial index of 0
    updateTestimonialReviews(currentItem)

})


// Update Testimonial reviews 
function updateTestimonialReviews(person){
    const item = testimonials[person]
    authorImg.src = item.img
    author.textContent = item.name
    authorsJob.textContent = item.job
    info.textContent = item.review
}

controlBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        let isBtnClass = e.target.classList
        if(isBtnClass.contains('btn-next')){
            currentItem++
            if(currentItem > testimonials.length - 1){
                // Set it back to 0
                currentItem = 0
            }
            updateTestimonialReviews(currentItem)
        }
        if(isBtnClass.contains('btn-prev')){
            currentItem--
            if(currentItem < 0){
                currentItem = testimonials.length - 1
            }
            updateTestimonialReviews(currentItem)
        }
    })
})

// Randomize the testimonial array 
const randomizeReview = () => {
    return Math.floor(Math.random() * testimonials.length)
}

// Surprise Btn returns a random testimonial onclick
surpriseBtn.addEventListener('click', () => {
    let randomItem = randomizeReview()
    updateTestimonialReviews(randomItem)
})

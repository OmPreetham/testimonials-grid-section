import testmonials from '../data/testimonials.json'

const TestimonialsGridSection = () => {
  return (
    <div className="wrapper">
      <main>
        <div className="testimonials-wrapper">
          <section>
            <div className="testimonials-grid">
              {testmonials.map((testimonial, index) => {
                return (
                  <article key={index}>
                    <div className="testimonial testimonial--color">
                      <div className="testimonial__author">
                        <div className="testimonial__author__image">
                          <img
                            src={`images/${testimonial.imageName}`}
                            alt={testimonial.firstName}
                          />
                        </div>
                        <div className="testimonial__author__details">
                          <p className="name">
                            {testimonial.firstName} {testimonial.lastName}
                          </p>
                          <p className="status">Verified Graduate</p>
                        </div>
                      </div>
                      <div className="testimonial__title">
                        <p className="title">{testimonial.title}</p>
                      </div>
                      <div className="testimonial__body">
                        <p className="body">{testimonial.body}</p>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default TestimonialsGridSection

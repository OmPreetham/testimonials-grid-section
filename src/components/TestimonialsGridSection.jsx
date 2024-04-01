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
                      <div className="testimonial__author-wrapper">
                        <img
                          className="tesimonial__author__image"
                          src={`/images/${testimonial.imageName}`}
                          alt={testimonial.firstName}
                        />
                        <p className="testimonial__author__name">
                          {testimonial.firstName} {testimonial.lastName}
                        </p>
                        <br />
                        <p className="testimonial__author__status">
                          Verified Graduate
                        </p>
                      </div>
                      <div className="testimonial__title-wrapper">
                        <h2 className="testimonial__title">
                          {testimonial.title}
                        </h2>
                      </div>
                      <div className="testimonial__body-wrapper">
                        <p className="testimonial__body">{testimonial.body}</p>
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

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  heroImage,
  featuredProjectImages,
  testimonialImages,
} from "../data/images";
import { projects } from "../data/projects";
import { Button } from "../components/Button";
import SEO from "../components/SEO";
import { testimonials } from "../data/testimonials";
import { services } from "../data/services";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HomePage = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEO
        title="Quality Construction & Carpentry Services"
        description="Expert construction and carpentry services with over 30 years of experience."
        image={heroImage}
      />

      <div className="home-page">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Construction craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container py-20">
            <div className="max-w-2xl text-left">
              <motion.h1
                {...fadeInUp}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl text-white lg:text-6xl  font-bold leading-tight mb-6"
              >
                Quality Craftsmanship &
                <span className="text-white"> Construction Excellence</span>
              </motion.h1>

              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-200 mb-8"
              >
                Bringing over 30 years of experience to every project — from
                renovations to custom construction.
              </motion.p>

              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="hero-primary" to="/contact">
                  Request Quote
                </Button>

                <Button variant="hero-secondary" to="/gallery">
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our Services
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-1 text-sm text-gray-500">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="primary" to="/services">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
                >
                  <img
                    src={featuredProjectImages[index]}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                    <p className="text-gray-600 mb-4">
                      {project.shortDescription}
                    </p>

                    <Link
                      to="/gallery"
                      className="text-primary font-medium hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="primary" to="/gallery">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              {...fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              What Our Clients Say
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonialImages[index % testimonialImages.length]}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>

                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic">"{testimonial.text}"</p>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
              Ready to Start Your Project?
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Contact us today for a free consultation and quote. Let's bring
              your vision to life.
            </p>

            <Button variant="white" to="/contact">
              Get in Touch
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;

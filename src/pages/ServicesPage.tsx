import React from "react";
import { motion } from "framer-motion";
import { serviceImages } from "../data/images";
import { services } from "../data/services";
import { processSteps, additionalServicesData } from "../data/service-content";
import { Button } from "../components/Button";
import SEO from "../components/SEO";

type AdditionalService = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const icons: React.ReactNode[] = [
  <path
    key="interior"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  />,
  <path
    key="project"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
  />,
  <path
    key="permit"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  />,
];

const additionalServices: AdditionalService[] = additionalServicesData.map(
  (service, index) => ({
    ...service,
    icon: icons[index],
  })
);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Professional Construction & Carpentry Services"
        description="Expert construction, renovation, and carpentry services. From custom builds to home extensions, we deliver quality craftsmanship for every project."
        image={serviceImages["newConstruction"]}
      />

      <div>
        {/* Page Header */}
        <section className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Professional construction and carpentry services tailored to your
              needs. Quality craftsmanship for every project.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 bg-white">
          <div className="container">
            {services.map((service) => (
              <motion.article
                key={service.title}
                {...fadeInUp}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  services.indexOf(service) % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } gap-8 mb-16 last:mb-0`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={serviceImages[service.imageKey]}
                    alt={`${service.title} service`}
                    className="h-64 lg:h-full w-full object-cover rounded-lg"
                  />
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-primary flex-shrink-0 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="primary"
                    to="/contact"
                    className="self-start"
                  >
                    Request a Quote
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-accent bg-opacity-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <svg
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Additional Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalServices.map((service) => (
                <motion.div
                  key={service.title}
                  {...fadeInUp}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {service.icon}
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Space?
            </h2>

            <p className="text-xl mb-8">
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

export default ServicesPage;
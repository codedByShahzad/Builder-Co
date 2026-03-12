import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterModal from '../components/BeforeAfterModal';
import { projects, categories, getCategoryLabel } from '../data/projects';
import { Button } from '../components/Button';
import SEO from '../components/SEO';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  // Open modal with selected project
  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SEO
        title="Our Project Gallery"
        description="Browse our portfolio of completed construction and carpentry projects. View before and after transformations of homes, renovations, and custom builds."
        type="article"
      />

      {/* Page Header */}
      <section className="bg-primary text-white py-12" aria-labelledby="page-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white">Our Work</h1>
            <p className="mt-4 max-w-2xl mx-auto">
              Browse through our portfolio of completed projects showcasing our craftsmanship and attention to detail.
            </p>
          </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-white py-8 border-b" aria-labelledby="filter-heading">
        <div className="container text-center">
          <h2 id="filter-heading" className="sr-only">
            Filter projects by category
          </h2>
          <div className="flex flex-wrap justify-center gap-4" role="radiogroup" aria-label="Project categories">
            <button
              className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              onClick={() => setSelectedCategory('all')}
              role="radio"
              aria-checked={selectedCategory === 'all'}
              name="category-filter"
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`btn ${
                  selectedCategory === category.value
                    ? 'btn-primary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                role="radio"
                aria-checked={selectedCategory === category.value}
                name="category-filter"
              >
                {getCategoryLabel(category.value)}
              </button>
            ))}
          </div>
          {/* Project Count */}
          <p className="text-gray-500 mt-4">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-background" aria-labelledby="projects-heading">
        <div className="container">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openProjectModal(project)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openProjectModal(project);
                    }
                  }}
                  aria-label={`View details of ${project.title}`}
                >
                  {/* Image with hover overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.afterImage}
                      alt={`After photo of ${project.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <span className="text-white font-semibold text-lg">View Project</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      <span
                        key={project.category}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600"
                      >
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary text-white" aria-labelledby="cta-heading">
        <div className="container text-center">
          <h2 id="cta-heading" className="section-title text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your vision and get a free quote.
          </p>
          <Button variant="white" to="/contact" aria-label="Contact us to discuss your project">
            Get in Touch
          </Button>
        </div>
      </section>

      {/* Before/After Modal */}
      {selectedProject && (
        <BeforeAfterModal isOpen={isModalOpen} onClose={closeProjectModal} project={selectedProject} />
      )}
    </>
  );
};

export default GalleryPage;
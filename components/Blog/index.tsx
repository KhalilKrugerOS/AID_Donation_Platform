import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";


const Blog = () => {
  return (
    <>
      <section
        id="blog"
        className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle 
            title="Les associations ont augmenté leurs dons de plus de 100 %."
            paragraph="Explorez les histoires inspirantes qui illustrent notre efficacité dans l'atteinte de nos objectifs humanitaires..."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-item {
          border: 1px solid #ccc;
          padding: 16px;
          margin: 16px;
          border-radius: 8px;
          background-color: #1a202c;
          color: white;
          transition: transform 0.3s ease;
        }
        .blog-item:hover {
          transform: translateY(-10px);
        }
        .blog-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .blog-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 16px 0 8px;
        }
        .blog-paragraph {
          font-size: 1rem;
          margin-bottom: 16px;
        }
        .tags {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4caf50;
        }
        .publish-date {
          font-size: 0.875rem;
          color: #718096;
        }
      `}</style>
    </>
  );
};

export default Blog;


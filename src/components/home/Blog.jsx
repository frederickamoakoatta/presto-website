import { BLOG_POSTS } from '../../data/home'
import { SectionHeading } from '../ui/SectionHeading'

function PostMeta({ author, date }) {
  return (
    <ul>
      <li>
        <a href="#blog">
          <i className="fas fa-user" /> {author}
        </a>
      </li>
      <li>
        <a href="#blog">
          <i className="fas fa-calendar-alt" /> {date}
        </a>
      </li>
    </ul>
  )
}

export function Blog() {
  const { featured, secondary } = BLOG_POSTS

  return (
    <div id="blog" className="blog-area default-padding">
      <div className="container">
        <div className="row">
          <SectionHeading
            kicker="Blog"
            title="Latest News"
            text="While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old"
          />
        </div>
        <div className="row">
          <div className="blog-items">
            <div className="col-md-6 default">
              <div className="single-item">
                <div className="thumb">
                  <a href="#blog">
                    <img src={featured.image} alt={featured.title} />
                  </a>
                  <div className="meta">
                    <div className="tags">
                      {featured.tags.map((tag) => (
                        <a key={tag} href="#blog">
                          {tag}
                        </a>
                      ))}
                    </div>
                    <PostMeta author={featured.author} date={featured.date} />
                  </div>
                </div>
                <div className="info">
                  <h3>
                    <a href="#blog">{featured.title}</a>
                  </h3>
                  <p>{featured.excerpt}</p>
                  <a className="btn circle btn-theme border btn-md" href="#blog">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 flex">
              {secondary.map((post) => (
                <div key={post.title} className="single-item flex">
                  <div className="thumb">
                    <a href="#blog">
                      <img src={post.image} alt={post.title} />
                    </a>
                  </div>
                  <div className="info">
                    <div className="meta">
                      <PostMeta author={post.author} date={post.date} />
                    </div>
                    <h4>
                      <a href="#blog">{post.title}</a>
                    </h4>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

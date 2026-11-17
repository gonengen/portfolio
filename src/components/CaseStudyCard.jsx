import { Link } from 'react-router-dom'

export default function CaseStudyCard({ id, title, subtitle, tags, image, description, caption, outcome, priority = false }) {
  return (
    <article className="home-project">
      <Link to={`/case-study/${id}`} className="home-project-link" aria-label={`${title}: ${description}`}>
        <div className="home-project-heading">
          <div><p className="home-project-name">{title}</p><h3>{description}</h3></div>
          <span className="home-project-action">View case study <span aria-hidden="true">↗</span></span>
        </div>
        <figure>
          <div className="home-project-image"><img width={id === 'robonote' ? 2528 : 2880} height={1280} src={image} alt={`${title}: ${caption}`} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} /></div>
          <figcaption>{caption}</figcaption>
        </figure>
      </Link>
      <div className="home-project-meta"><p>{tags}</p><p title={subtitle}>{outcome}</p></div>
    </article>
  )
}

import { StarIcon } from './Icons'

export default function Stars({ rating = 5 }) {
  return (
    <div className="stars" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} width={16} height={16} />
      ))}
    </div>
  )
}
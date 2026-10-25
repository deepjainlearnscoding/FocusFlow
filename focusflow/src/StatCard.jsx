function StatCard(props) {
  return (
    <article className="stat-card">
      <p>{props.title}</p>
      <h2>{props.value}</h2>
      <span>{props.description}</span>
    </article>
  )
}

export default StatCard
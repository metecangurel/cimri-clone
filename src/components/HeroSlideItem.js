function HeroSlideItem(props) {
  return (
    <div>
        <a href={props.link} className="d-block" title={props.title}>
            <img src={props.image} alt={props.title} />
        </a>
    </div>
  )
}

export default HeroSlideItem
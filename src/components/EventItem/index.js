import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {name, location, imageUrl, id} = eventDetails

  const eventImage = isActive ? 'event-img active' : 'event-img'

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-item">
      <button type="button" className="event-btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImage} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}
export default EventItem

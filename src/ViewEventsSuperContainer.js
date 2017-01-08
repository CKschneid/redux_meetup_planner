import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchOtherEvents} from './actions'

class ViewEventsContainer extends Component {
  constructor(props){
    super(props)
    const {dispatch} = props
    dispatch(fetchOtherEvents())
  }
  render(){
    const {
      eventName,
      eventDate,
      eventTime,
      eventType,
      eventHost,
      eventCreator,
      eventLocation,
      eventGuests,
      eventDescription,
      otherEvents
    } = this.props

    return (
      <div>
        <div className="featuredEvent">
          <h1>Your New Event </h1>
          <h3>event name: {eventName}</h3>
          <h3>event date: {eventDate}</h3>
          <h5>event time: {eventTime}</h5>
          <h5>event type: {eventType}</h5>
          <h5>event host: {eventHost}</h5>
          <h5>event time: {eventTime}</h5>
          <h5>event creator: {eventCreator}</h5>
          <h5>event location:{eventLocation}</h5>
          <h5>event guests: {eventGuests}</h5>
          <h5>event description: {eventDescription}</h5>
        </div>
        <div className="otherEventsArea">
          {
            otherEvents.map( (eventObject) => {
              return (
                <div className="otherEvent">
                  <h1>Your New Event </h1>
                  <h3>event name: {eventObject.eventName}</h3>
                  <h3>event date: {eventObject.eventDate}</h3>
                  <h5>event time: {eventObject.eventTime}</h5>
                  <h5>event type: {eventObject.eventType}</h5>
                  <h5>event host: {eventObject.eventHost}</h5>
                  <h5>event time: {eventObject.eventTime}</h5>
                  <h5>event creator: {eventObject.eventCreator}</h5>
                  <h5>event location:{eventObject.eventLocation}</h5>
                  <h5>event guests: {eventObject.eventGuests}</h5>
                  <h5>event description: {eventObject.eventDescription}</h5>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

ViewEventsContainer.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  eventTime: PropTypes.string,
  eventType: PropTypes.string,
  eventHost: PropTypes.string,
  eventCreator: PropTypes.string,
  eventLocation: PropTypes.string.isRequired,
  eventGuests: PropTypes.string,
  eventDescription: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  otherEvents: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    eventDate: PropTypes.string.isRequired,
    eventTime: PropTypes.string,
    eventType: PropTypes.string,
    eventHost: PropTypes.string,
    eventCreator: PropTypes.string,
    eventLocation: PropTypes.string.isRequired,
    eventGuests: PropTypes.string,
    eventDescription: PropTypes.string
  })).isRequired
}

const mapStateToViewEventsContainerProps = (state) => {
  const {userInfo, featuredEventInfo, otherEvents} = state
  return {
      eventName: featuredEventInfo.eventName,
      eventDate: featuredEventInfo.eventDate,
      eventTime: featuredEventInfo.eventTime,
      eventType: featuredEventInfo.eventType,
      eventHost: featuredEventInfo.eventHost,
      eventCreator: featuredEventInfo.eventCreator,
      eventLocation: featuredEventInfo.eventLocation,
      eventGuests: featuredEventInfo.eventGuests,
      eventDescription: featuredEventInfo.eventDescription,
      otherEvents: otherEvents.otherEvents,
      isFetchingEvents: otherEvents.isFetching
    }
  }

const ViewEventsSuperContainer = connect(mapStateToViewEventsContainerProps)(ViewEventsContainer)

export default ViewEventsSuperContainer

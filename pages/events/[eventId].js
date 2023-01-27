import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function SpecificEventPage() {
  const router = useRouter();
  const id = router.query.eventId; //Grabs the id entered in the URL
  const event = getEventById(id); // Fetched the event using the dummy-data getEventById(id) method

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found.</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent />
      <p>{event.description}</p>
    </Fragment>
  );
}

export default SpecificEventPage;

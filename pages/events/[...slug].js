import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/List";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug; // To see full query, search router.query.slug

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const year = filteredData[0];
  const month = filteredData[1];

  const numYear = +year; // This transforms string to a number
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert><p>
          Invalid filter options. Please adjust your selections.
        </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length == 0) {
    return (
      <Fragment>
        <ErrorAlert><p>Your search returned 0 events.</p></ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>);
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events}></EventList>
    </Fragment>
  );
}

export default FilteredEventsPage;

import Button from "../ui/button";
import styles from "./EventsSearch.module.css";
import { useRef } from "react";


function EventsSearch(props) {
    const yearTracker = useRef();       // The ref tracker
    const monthTracker = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const year = yearTracker.current.value;       // Getting the selected value using the ref trackers current value
        const month = monthTracker.current.value;

        props.onSearch(year, month);
    }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearTracker}>         
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
            <label for="month">Month</label>
            <select id="month" ref={monthTracker}>
                <option value='1'>January</option>
                <option value='2'>February</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;

import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import events from "../events.json";

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition" />
      <EventBoard events={events} />
    </>
  );
};

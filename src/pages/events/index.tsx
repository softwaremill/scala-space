import events from "@source/eventspage-events.json";
import { Layout } from "@components/Layout/Layout";
import { Events } from "@partials/EventsPage/Events/Events";
import { EventCards } from "@partials/EventCards/EventCards";
import { Newsletter } from "@partials/Newsletter/Newsletter";

export default function EventsPage() {
  return (
    <Layout
      title="Scala Space"
      description="Learn about our tooling, OSS, nd the ecosystems we help build, use, and participate in."
    >
      <Events>
        <EventCards events={events} />
      </Events>
      <Newsletter />
    </Layout>
  );
}

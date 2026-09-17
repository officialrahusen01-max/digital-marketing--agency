import { services } from "../../data/services.js";
import ServiceHero from "../../sections/services/ServiceHero.jsx";
import ServiceDetail from "../../sections/services/ServiceDetail.jsx";

export default function DigitalMarketing() {
  const service = services.find((item) => item.id === "digital-marketing");

  return (
    <>
      <ServiceHero title={service.title} />
      <ServiceDetail service={service} />
    </>
  );
}

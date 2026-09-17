import { services } from "../../data/services.js";
import ServiceHero from "../../sections/services/ServiceHero.jsx";
import ServiceDetail from "../../sections/services/ServiceDetail.jsx";

export default function SEO() {
  const service = services.find((item) => item.id === "seo");

  return (
    <>
      <ServiceHero title={service.title} />
      <ServiceDetail service={service} />
    </>
  );
}

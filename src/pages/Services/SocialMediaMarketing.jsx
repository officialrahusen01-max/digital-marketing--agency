import { services } from "../../data/services.js";
import ServiceHero from "../../sections/services/ServiceHero.jsx";
import ServiceDetail from "../../sections/services/ServiceDetail.jsx";

export default function SocialMediaMarketing() {
  const service = services.find((item) => item.id === "social-media-marketing");

  return (
    <>
      <ServiceHero title={service.title} />
      <ServiceDetail service={service} />
    </>
  );
}

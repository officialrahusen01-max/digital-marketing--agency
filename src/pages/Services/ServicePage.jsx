import { useParams } from "react-router-dom";
import { services } from "../../data/services.js";
import ServiceHero from "../../sections/services/ServiceHero.jsx";
import ServiceDetail from "../../sections/services/ServiceDetail.jsx";

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) return null;

  return (
    <>
      <ServiceHero title={service.title} />
      <ServiceDetail service={service} />
    </>
  );
}

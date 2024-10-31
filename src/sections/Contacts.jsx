import { useGSAP } from "@gsap/react";
import {
  ContactForm,
  Container,
  Loading,
  OfficeLocationCard,
  SectionHeader,
} from "../components";
import animate from "../utils/animate";
import { ToastContainer } from "react-toastify";
import { useFetchData } from "../hooks";

const Contacts = () => {
  const { data: contacts, loading, error } = useFetchData("contacts", "*");

  useGSAP(() => {
    if (!loading) {
      animate([".anim-contacts-title", ".anim-contacts-content"]);
    }
  }, [loading]);

  if (error) return null;

  if (loading) return <Loading />;

  return (
    <Container>
      <div className="relative flex flex-col items-center justify-center gap-10 md:gap-12 xl:gap-16">
        <div className="absolute top-0 left-0 z-50">
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            pauseOnHover={false}
            progress={0}
          />
        </div>
        {/* section header */}
        <div className="anim-contacts-title">
          <SectionHeader
            title="Get In Touch"
            subtitle="Connect for Tailored IT Solutions That Drive Your Business Forward."
          />
        </div>

        {/* main content */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 xl:gap-12 text-neutral-800">
          {/* contact form */}
          <ContactForm />
          {/* contact details */}
          <div className="w-full lg:w-1/2 space-y-5 md:space-y-8">
            {/* contact details header */}
            <div className="anim-contacts-content space-y-2">
              <h3 className="text-primary-blue text-xl lg:text-2xl font-medium">
                Reach out to our consultants
              </h3>
              <p className="md:text-lg">
                Your questions and requests are always welcome.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {/* branch contacts cards */}
              {contacts.map(office => (
                <OfficeLocationCard
                  key={office._id}
                  {...office}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contacts;

import {
  ContactForm,
  Container,
  OfficeLocationCard,
  SectionHeader,
} from "../components";
import { CONTACT_DETAILS } from "../constants";
import useAnimation from "../utils/hooks/useAnimations";

const Contacts = () => {
  useAnimation([".anim-contacts-title", ".anim-contacts-content"]);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-10 md:gap-12 xl:gap-16">
        {/* section header */}
        <div className="anim-contacts-title">
          <SectionHeader
            title="Get In Touch"
            subtitle="Connect for Excellence: Your Gateway to Exceptional Solutions."
          />
        </div>

        {/* main content */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 xl:gap-12 text-primary-very-dark-blue">
          {/* contact form */}
          <ContactForm />

          {/* contact details */}
          <div className="w-full lg:w-1/2 space-y-10 md:space-y-12">
            {/* contact details header */}
            <div className="anim-contacts-content space-y-3 md:space-y-4">
              <h4 className="text-xl lg:text-3xl font-medium">
                Reach out to our consultants
              </h4>
              <p className="text-lg xl:text-xl">
                Your questions and requests are always welcome.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
              {/* branch contacts cards */}
              {CONTACT_DETAILS.map((item, index) => (
                <OfficeLocationCard
                  key={index}
                  {...item}
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

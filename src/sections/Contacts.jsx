import {
  ContactForm,
  Container,
  OfficeLocationCard,
  SectionHeader,
} from "../components";
import { CONTACT_DETAILS } from "../constants";

const Contacts = () => {
  return (
    <Container id="contacts">
      <div className="flex flex-col items-center justify-center gap-12 xl:gap-16">
        {/* section header */}
        <SectionHeader
          title="Get In Touch"
          subtitle="Connect for Excellence: Your Gateway to Exceptional Solutions."
        />

        {/* main content */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-6 xl:gap-12 text-white ">
          {/*contact form */}

          <ContactForm />

          {/* contact details */}
          <div className="w-full lg:w-1/2 space-y-12 text-white">
            {/* contact details header */}
            <div className=" space-y-4">
              <p className="text-neutral-white text-xl lg:text-2xl xl:text-3xl font-semibold">
                Reach out to our consultants
              </p>
              <p className="lg:text-xl">
                Your questions and requests are always welcome.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
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

import { useNavigate } from "react-router-dom";

const HeroContactsButton = () => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Navigate to Contacts page"
      className="w-max flex items-center gap-2 border rounded-lg py-3 px-3 lg:px-5 font-medium text-nowrap group transition-colors duration-300 ease-in-out text-sm md:text-lg

    border-neutral-white hover:border-neutral-white
    
    bg-primary-blue/50 hover:bg-neutral-white/50 
    
    text-neutral-white hover:text-primary-blue
    
    "
      onClick={() => {
        navigate("/contacts");
      }}>
      Get In Touch
    </button>
  );
};

export default HeroContactsButton;

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AccordionTextProps {
  text: string;
}

export default function AccordionText({ text }: AccordionTextProps) {
  return (
    <div className="my-3">
      <FontAwesomeIcon icon={faCircle} className="text-primary me-2 w-2" />
      <p className="text-grey font-medium mt-2 inline">{text}</p>
    </div>
  );
}

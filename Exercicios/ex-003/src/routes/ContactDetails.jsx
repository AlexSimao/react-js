import { useParams } from "react-router-dom";

function ContactDetails() {
  const {id} = useParams()
  return (
    <div>
      <p>Detalhes... {id}</p>
    </div>
  );
}

export default ContactDetails;

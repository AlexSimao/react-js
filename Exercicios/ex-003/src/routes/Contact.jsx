import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contatos</h1>
      <p>
        <Link to={"/contact/email"}>Contato por Email</Link>
      </p>
      <p>
        <Link to={"/contact/whatsapp"}>Contato por WhatsApp</Link>
      </p>
      <p>
        <Link to={"/contact/telefone"}>Contato por Telefone</Link>
      </p>
    </div>
  );
}

export default Contact;

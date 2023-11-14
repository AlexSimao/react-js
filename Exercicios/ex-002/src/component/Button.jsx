import PropType from "prop-types";

function Button({ text, event }) {
  return <button onClick={event}>{text}</button>;
}

Button.defaultProps = {
  text: "Button",
};

Button.propTypes = {
  text: PropType.string,
  event: PropType.func,
};

export default Button;

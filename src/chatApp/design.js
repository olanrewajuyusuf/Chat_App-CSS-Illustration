import Phone from "./phone";

function DesignContainer() {
  return (
    <div className="container">
      <Phone />
      <div className="content">
        <h1>Simple booking</h1>
        <p>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </div>
    </div>
  );
}

export default DesignContainer;

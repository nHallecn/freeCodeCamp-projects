
const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState(1);
  const [dietary, setDietary] = useState("");
  const [guests, setGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSubmitted(true)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="number"
          required
          min="1"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
        />

        <input
          type="text"
          value={dietary}
          onChange={(e) => setDietary(e.target.value)}
          placeholder="Dietary preferences"
        />

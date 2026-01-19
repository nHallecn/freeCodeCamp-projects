
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
          <label>
          <input
            type="checkbox"
            checked={guests}
            onChange={(e) => setGuests(e.target.checked)}
          />
          Bringing additional guests
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>Dietary preferences: {dietary || "None"}</p>
          <p>Bringing additional guests: {guests ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  )
}

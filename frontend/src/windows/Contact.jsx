export default function Contact() {

  return (
    <div className = "goal-container">
      <div className = "goal-card-style">
        <h2>Contact Us!</h2>
        <form method="POST">
          <div>
            <label htmlfor = "firstName"> First Name </label>
            <input 
              type = "text" 
              name = "First Name" 
              id = "firstName" 
              required>
            </input>
            <label htmlfor = "lastName"> Last Name </label>
            <input 
              type = "text" 
              name = "Last Name" 
              id = "lastName" 
              required>
            </input>
          </div>
          <div>
            <label htmlfor = "email"> Email </label>
            <input 
              type = "text" 
              name = "E-Mail" 
              id = "email" 
              required>
            </input>
            <label htmlfor = "phoneNumber"> Phone Number </label>
            <input 
              type = "text" 
              name = "Phone Number" 
              id = "phoneNumber">
            </input>
          <div>
            <label htmlfor = "message"> Message </label>
          </div>
          <div>
            <textarea name = "Message" id = "message" rows = "4" required></textarea>
          </div>
          </div>
          <div classname = "nav-button-alignment">
            <button type = "submit" className = "nav-buttons"> Send Message </button>
          </div>
        </form>
      </div>
    </div>
  );
}

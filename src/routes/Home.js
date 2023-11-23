import { Link } from "react-router-dom";
import { FaTicketAlt } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

function Home() {
  return (
    <div className="home">
      <section className="heading">
        <h1>Seeking assistance?</h1>
        <h1>Select an option below:</h1>
      </section>
      <div className="header-items">
        <Link to="/new-ticket" className="btn btn-reverse btn-block">
          <IoMdCreate  /> Create New Ticket
        </Link>

        <Link to="/tickets" className="btn btn-block">
          <FaTicketAlt /> View My Tickets
        </Link>
      </div>
      <div className="contact">
        <hr/>
        CONTACT US
        <p><IoMdMail /> kumar.rishabh2021@vitstudent.ac.in</p>
        <p><IoMdMail /> riddhesh.karnik2021@vitstudent.ac.in</p>
      </div>
    </div>
    
  );
}

export default Home;

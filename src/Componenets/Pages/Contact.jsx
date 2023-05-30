import './Pages.css'


export default function Contact() {
    return (
        <div className="PagesContainer">
            <div className="ContactContainer">
                <h3>Contact</h3>
                <div className="inputs">
                    <h5>Name</h5>
                    <input type="text" placeholder="Name" />
                    <h5>Email</h5>
                    <input type="email" placeholder="Email" />
                    <h5>Message</h5>
                    <textarea name="Message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                </div>
                <button>Send</button>
            </div>
        </div>
    )
}
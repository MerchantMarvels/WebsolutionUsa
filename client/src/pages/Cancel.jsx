import { Link } from "react-router-dom";
import "../pages/css/payment-pages.css";    

export default function Cancel() {
  return (
    <div className="paypage">
      <div className="paycard cancel">
        <div className="payicon" aria-hidden>
          {/* cross icon */}
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        <h2>Payment Canceled</h2>
        <p>No charge was made. You can try again anytime.</p>

        <Link to="/#pricing" className="paybtn">↻ Try Again</Link>
      </div>
    </div>
  );
}

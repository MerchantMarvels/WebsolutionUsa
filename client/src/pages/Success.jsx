import { Link, useLocation } from "react-router-dom";
import "../pages/css/payment-pages.css";

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function Success() {
  const q = useQuery();
  const sessionId = q.get("session_id"); // optional to show/debug

  return (
    <div className="paypage">
      <div className="paycard success">
        <div className="payicon" aria-hidden>
          {/* check icon */}
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h2>Payment Successful!</h2>
        <p>
          Thank you for your subscription. You now have access to all the amazing features!
        </p>

        {/* optional tiny debug line – remove if you don’t want to show it */}
        {sessionId && <small className="payhint">session: {sessionId}</small>}

        <Link to="/" className="paybtn">← Back to Main</Link>
      </div>
    </div>
  );
}

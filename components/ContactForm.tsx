'use client';

import { useRef, useState } from 'react';
import Corners from './Corners';

const sessions = [
  ['newborn', 'Newborn'], ['fresh48', 'Fresh 48'], ['maternity', 'Maternity'],
  ['family', 'Family'], ['milestone', 'Milestone'], ['event', 'Event'],
];
const places = [
  ['studio', 'Palatine studio'], ['home', 'At our home'], ['outdoors', 'Outdoors'], ['unsure', 'Not sure yet'],
];

/**
 * Inquiry form. As in the design, it validates and confirms on the page only —
 * it does not send anything yet. See README ("Contact form") for wiring it up.
 */
export default function ContactForm() {
  const [status, setStatus] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = nameRef.current!;
    const email = emailRef.current!;
    if (!name.value.trim()) {
      name.focus();
      setStatus('Your name first, and then it is on its way.');
      return;
    }
    const value = email.value.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      email.focus();
      setStatus('That email address does not look right — I need it to reply.');
      return;
    }
    setStatus('Thank you — your inquiry is with me. I will reply within two working days.');
    form.reset();
    name.focus();
  };

  return (
    <form noValidate onSubmit={onSubmit} className="blueprint mp-form">
      <Corners />
      <div className="field">
        <label htmlFor="mp-name">Your name</label>
        <input ref={nameRef} className="input" id="mp-name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className="mp-row2">
        <div className="field">
          <label htmlFor="mp-email">Email</label>
          <input ref={emailRef} className="input" id="mp-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field">
          <label htmlFor="mp-phone">Phone (optional)</label>
          <input className="input" id="mp-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>
      <fieldset>
        <legend>Which session</legend>
        <div className="seg">
          {sessions.map(([value, label], i) => (
            <label key={value} className="seg-opt">
              <input type="radio" name="session" value={value} defaultChecked={i === 0} />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Where would you prefer</legend>
        <div className="mp-radios">
          {places.map(([value, label], i) => (
            <label key={value} className="radio">
              <input type="radio" name="place" value={value} defaultChecked={i === 0} />
              <span className="dot" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mp-row2">
        <div className="field">
          <label htmlFor="mp-date">Due date, or the date you want</label>
          <input className="input" id="mp-date" name="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="mp-town">Your town</label>
          <input className="input" id="mp-town" name="town" type="text" placeholder="Arlington Heights" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="mp-note">Anything I should know</label>
        <textarea className="input" id="mp-note" name="note" rows={4}
          placeholder="Siblings, pets, a C-section recovery, the room with the good window…" />
      </div>
      <button className="btn btn-primary mp-btn" type="submit">Send my inquiry</button>
      <p className="mp-status" aria-live="polite">{status}</p>
    </form>
  );
}

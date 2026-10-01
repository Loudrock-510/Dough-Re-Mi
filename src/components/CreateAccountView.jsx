import { useState } from "react";

const initialForm = { username: "", email: "", password: "", street: "", city: "", state: "", zip: "", phone: "" };

function CreateAccountView() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSuccess(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.username.trim()) nextErrors.username = "A username is required.";
    if (!form.email.trim()) nextErrors.email = "An email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.password) nextErrors.password = "A password is required.";
    else if (form.password.length < 6) nextErrors.password = "Password must be at least 6 characters.";

    const addressFields = ["street", "city", "state", "zip"];
    const startedAddress = addressFields.some((field) => form[field].trim());
    if (startedAddress) addressFields.forEach((field) => { if (!form[field].trim()) nextErrors[field] = "Complete the address or leave every address field blank."; });
    if (form.phone && !/^[\d\s()+-]{7,}$/.test(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    return nextErrors;
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setSuccess(Object.keys(nextErrors).length === 0);
  };

  const field = (name, label, type = "text", required = false) => (
    <div className="mb-3">
      <label className="form-label" htmlFor={`account-${name}`}>{label} {required && <span className="text-danger">*</span>}</label>
      <input id={`account-${name}`} className={`form-control ${errors[name] ? "is-invalid" : ""}`} name={name} type={type} value={form[name]} onChange={updateField} aria-invalid={Boolean(errors[name])} />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <main className="section-padding">
      <div className="container narrow-container">
        <div className="page-heading mb-5"><p className="eyebrow">Join the bakery table</p><h1>Create an account</h1><p className="lead text-muted">Save your details for this storefront demo. Required fields are marked with an asterisk.</p></div>
        <form className="form-card" onSubmit={submit} noValidate>
          {field("username", "Username", "text", true)}
          {field("email", "Email", "email", true)}
          {field("password", "Password", "password", true)}
          <h2 className="h5 border-top pt-4 mt-4">Optional delivery details</h2>
          <p className="small text-muted">If you begin an address, complete all four address fields.</p>
          <div className="row"><div className="col-12">{field("street", "Street")}</div><div className="col-md-6">{field("city", "City")}</div><div className="col-md-3">{field("state", "State")}</div><div className="col-md-3">{field("zip", "ZIP code")}</div><div className="col-md-6">{field("phone", "Phone", "tel")}</div></div>
          <button className="btn btn-primary w-100 mt-2" type="submit">Create account</button>
          {success && <div className="alert alert-success mt-3" role="status">Your form passed validation. Account creation is simulated for this project.</div>}
        </form>
      </div>
    </main>
  );
}

export default CreateAccountView;

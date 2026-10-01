import { useState } from "react";

function AccountView({ onNavigate }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const submit = (event) => {{/* email and password validation */ }
    event.preventDefault();
    if (!form.email || !form.password) {
      setMessage("Please enter both your email and password.");
      return;
    }
    setMessage("A real login will be connected in a later project.");
  };

  return (
    <main className="section-padding">
      <div className="container narrow-container">
        <div className="page-heading mb-5"><p className="eyebrow">Welcome back</p><h1>Account</h1><p className="lead text-muted">Sign in to review your bakery favorites or create a new account.</p></div>
        <form className="form-card" onSubmit={submit} noValidate>
          <h2 className="h4 mb-4">Sign in</h2>
          <div className="mb-3"><label className="form-label" htmlFor="login-email">Email</label><input id="login-email" className="form-control" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></div>
          <div className="mb-4"><label className="form-label" htmlFor="login-password">Password</label><input id="login-password" className="form-control" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required /></div>
          <button className="btn btn-primary w-100" type="submit">Sign in</button>
          {message && <div className="alert alert-info mt-3" role="status">{message}</div>}
          <div className="text-center border-top mt-4 pt-4"><p className="mb-2">New to Dough Re Mi?</p><button type="button" className="btn btn-outline-dark" onClick={() => onNavigate("create-account")}>Create an account</button></div>
        </form>
      </div>
    </main>
  );
}

export default AccountView;

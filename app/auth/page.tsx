import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div className="card" style={{ width: '100%', maxWidth: 460, padding: 28 }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <img src="/logo/autopublish-logo.png" alt="AutoPublish" style={{ height: 52 }} />
          <h1 style={{ marginTop: 20 }}>Welcome back</h1>
          <p className="muted">Compact login screen for quick access.</p>
        </div>

        <div className="grid">
          <input className="input" placeholder="Email" />
          <input className="input" placeholder="Password" type="password" />
          <Link className="btn btn-gold" href="/dashboard" style={{ textAlign: 'center' }}>Continue</Link>
        </div>
      </div>
    </div>
  );
}

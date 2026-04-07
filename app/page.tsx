import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="page">
      <header className="nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="/logo/autopublish-logo.png" alt="AutoPublish" style={{ height: 38 }} />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link className="btn btn-dark" href="/auth">Login</Link>
          <Link className="btn btn-gold" href="/dashboard">Open App</Link>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 60 }}>
        <div className="card" style={{ padding: 32 }}>
          <div className="gold" style={{ fontSize: 14 }}>AutoPublish.com</div>
          <h1 style={{ fontSize: 48, margin: '12px 0' }}>AI creates, edits and publishes your content.</h1>
          <p className="muted" style={{ maxWidth: 760, lineHeight: 1.7 }}>
            Generate captions, create image ideas, queue reel edits, connect Instagram, and manage everything in one compact dashboard.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap' }}>
            <Link className="btn btn-gold" href="/dashboard">Launch Dashboard</Link>
            <Link className="btn btn-dark" href="/auth">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

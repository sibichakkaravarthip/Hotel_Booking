import { useState } from 'react';
import '../Main.css';

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleLogin(e) {
        e.preventDefault();
        setError("");
        
        if (!email.trim()) return setError("Please enter your email address.");
        if (!password.trim()) return setError("Please enter your password.");
        if (password.length < 6) return setError("Password must be at least 6 characters.");

        setLoading(true);
        // Simulate login
        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify({ email, name: email.split("@")[0] }));
            setLoading(false);
            alert("Login successful!");
            setEmail("");
            setPassword("");
        }, 1000);
    }

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>Login to StayComfort</h1>
                    <p>Access your account and manage your bookings</p>
                </div>

                <form onSubmit={handleLogin} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {error && <div className="form-error">{error}</div>}

                    <button type="submit" className="btn-submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>Don't have an account? <a href="/singin">Sign up here</a></p>
                    <p><a href="/forgot-password">Forgot your password?</a></p>
                </div>
            </div>
        </div>
    )
}
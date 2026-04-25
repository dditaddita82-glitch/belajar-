import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonState = "idle" | "loading" | "success" | "error";

interface FieldProps {
    id: string;
    type: string;
    placeholder: string;
    icon: React.ReactNode;
    value: string;
    onChange: (v: string) => void;
    delay?: number;
    suffix?: React.ReactNode;
}

interface BlobProps {
    size: number;
    bottom?: number | string;
    top?: number | string;
    left?: number | string;
    right?: number | string;
    opacity?: number;
    delay?: number;
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 28 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const itemVariants = (delay: number = 0) => ({
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" as const, delay },
    },
});

const blobVariants = (delay: number = 0) => ({
    animate: {
        y: [0, -14, 0],
        scale: [1, 1.04, 1],
        transition: {
            duration: 6 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
        },
    },
});

// ─── Sub-components ───────────────────────────────────────────────────────────

const Sphere: React.FC<{ size: number; className?: string }> = ({
    size,
    className = "",
}) => (
    <div
        className={className}
        style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background:
                "radial-gradient(circle at 35% 35%, #5baaf7, #1565c0 55%, #0d3d8a 100%)",
            boxShadow:
                "inset -6px -6px 18px rgba(0,0,0,0.35), inset 4px 4px 12px rgba(255,255,255,0.18), 0 8px 30px rgba(10,50,140,0.4)",
            flexShrink: 0,
        }}
    />
);

const Blob: React.FC<BlobProps> = ({
    size,
    bottom,
    top,
    left,
    right,
    opacity = 0.12,
    delay = 0,
}) => (
    <motion.div
        variants={blobVariants(delay)}
        animate="animate"
        style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            background: `rgba(255,255,255,${opacity})`,
            bottom,
            top,
            left,
            right,
            pointerEvents: "none",
        }}
    />
);

const FormField: React.FC<FieldProps> = ({
    id,
    type,
    placeholder,
    icon,
    value,
    onChange,
    delay = 0,
    suffix,
}) => {
    const [focused, setFocused] = useState(false);

    return (
        <motion.div
            variants={itemVariants(delay)}
            initial="hidden"
            animate="visible"
            style={{ position: "relative", marginBottom: 16 }}
        >
            {/* Icon */}
            <span
                style={{
                    position: "absolute",
                    left: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#1565c0",
                    fontSize: 16,
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            >
                {icon}
            </span>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                    width: "100%",
                    border: `1.5px solid ${focused ? "#1565c0" : "#dde3f0"}`,
                    borderRadius: 8,
                    padding: suffix ? "11px 56px 11px 40px" : "11px 16px 11px 40px",
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 14,
                    color: "#222",
                    outline: "none",
                    background: focused ? "#fff" : "#f7f9fc",
                    boxShadow: focused ? "0 0 0 3px rgba(21,101,192,0.1)" : "none",
                    transition: "border-color 0.25s, box-shadow 0.25s, background 0.25s",
                }}
            />

            {suffix && (
                <span
                    style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    {suffix}
                </span>
            )}
        </motion.div>
    );
};

// ─── Left Panel ───────────────────────────────────────────────────────────────

const LeftPanel: React.FC = () => (
    <div
        style={{
            width: "42%",
            minWidth: "42%",
            background: "linear-gradient(145deg, #1565c0 0%, #1976d2 55%, #1e88e5 100%)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 40px",
            overflow: "hidden",
        }}
    >
        {/* Floating blobs */}
        <Blob size={200} bottom={-60} left={-60} opacity={0.10} delay={0} />
        <Blob size={130} bottom={40} left={90} opacity={0.14} delay={1.5} />
        <Blob size={90} top={-30} right={-30} opacity={0.09} delay={2} />
        <Blob size={55} top={60} left={20} opacity={0.08} delay={1} />

        {/* 3D spheres */}
        <div
            style={{
                position: "absolute",
                bottom: 18,
                left: 18,
                display: "flex",
                gap: 14,
                alignItems: "flex-end",
                zIndex: 1,
            }}
        >
            <Sphere size={110} />
            <Sphere size={72} className="" />
        </div>

        {/* Text */}
        <div style={{ position: "relative", zIndex: 2 }}>
            <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 30,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: 1,
                    marginBottom: 6,
                }}
            >
                WELCOME
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 14,
                }}
            >
                Your Headline Name
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.7,
                }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                hendrerit ultrices lectus vel lobortis neque laoreet. Proin euismod
                sapien at purus pretium posuere.
            </motion.p>
        </div>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SignInPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPass, setShowPass] = useState<boolean>(false);
    const [remember, setRemember] = useState<boolean>(true);
    const [btnState, setBtnState] = useState<ButtonState>("idle");

    // Load Google Font
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
            "https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;500;700&display=swap";
        document.head.appendChild(link);
    }, []);

    const handleSignIn = () => {
        if (!username.trim() || !password) {
            setBtnState("error");
            setTimeout(() => setBtnState("idle"), 1800);
            return;
        }
        setBtnState("loading");
        setTimeout(() => {
            setBtnState("success");
            setTimeout(() => setBtnState("idle"), 2200);
        }, 1200);
    };

    const btnConfig: Record<
        ButtonState,
        { label: string; bg: string; opacity: number }
    > = {
        idle: {
            label: "Sign in",
            bg: "linear-gradient(90deg, #1565c0, #1e88e5)",
            opacity: 1,
        },
        loading: {
            label: "Signing in...",
            bg: "linear-gradient(90deg, #1565c0, #1e88e5)",
            opacity: 0.7,
        },
        success: {
            label: "✓ Welcome!",
            bg: "linear-gradient(90deg, #1b5e20, #2e7d32)",
            opacity: 1,
        },
        error: {
            label: "Fill all fields!",
            bg: "linear-gradient(90deg, #b71c1c, #e53935)",
            opacity: 1,
        },
    };

    const current = btnConfig[btnState];

    return (
        <div
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                background: "linear-gradient(135deg, #1565c0 0%, #1976d2 40%, #42a5f5 100%)",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
            }}
        >
            {/* Card */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                style={{
                    width: 820,
                    maxWidth: "100%",
                    minHeight: 440,
                    background: "#fff",
                    borderRadius: 20,
                    display: "flex",
                    overflow: "hidden",
                    boxShadow: "0 32px 80px rgba(10,60,160,0.35)",
                }}
            >
                {/* ── Left ── */}
                <LeftPanel />

                {/* ── Right ── */}
                <div
                    style={{
                        flex: 1,
                        padding: "44px 44px 40px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <motion.h1
                        variants={itemVariants(0.3)}
                        initial="hidden"
                        animate="visible"
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                            color: "#111",
                            marginBottom: 4,
                        }}
                    >
                        Sign in
                    </motion.h1>

                    <motion.p
                        variants={itemVariants(0.38)}
                        initial="hidden"
                        animate="visible"
                        style={{ fontSize: 12, color: "#888", marginBottom: 28 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </motion.p>

                    {/* Username */}
                    <FormField
                        id="username"
                        type="text"
                        placeholder="User Name"
                        icon={<span style={{ fontSize: 15 }}>👤</span>}
                        value={username}
                        onChange={setUsername}
                        delay={0.45}
                    />

                    {/* Password */}
                    <FormField
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        icon={<span style={{ fontSize: 15 }}>🔒</span>}
                        value={password}
                        onChange={setPassword}
                        delay={0.52}
                        suffix={
                            <button
                                onClick={() => setShowPass((p) => !p)}
                                style={{
                                    fontSize: 11,
                                    fontWeight: 600,
                                    color: "#1565c0",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                                    letterSpacing: 0.5,
                                    padding: 0,
                                }}
                            >
                                {showPass ? "HIDE" : "SHOW"}
                            </button>
                        }
                    />

                    {/* Remember + Forgot */}
                    <motion.div
                        variants={itemVariants(0.6)}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 22,
                        }}
                    >
                        <label
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 7,
                                fontSize: 12,
                                color: "#555",
                                cursor: "pointer",
                                userSelect: "none",
                            }}
                        >
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                style={{ accentColor: "#1565c0", width: 14, height: 14 }}
                            />
                            Remember me
                        </label>
                        <a
                            href="#"
                            style={{
                                fontSize: 12,
                                color: "#888",
                                textDecoration: "none",
                            }}
                        >
                            Forgot Password?
                        </a>
                    </motion.div>

                    {/* Sign In Button */}
                    <motion.button
                        variants={itemVariants(0.68)}
                        initial="hidden"
                        animate="visible"
                        whileHover={
                            btnState === "idle"
                                ? { y: -1, boxShadow: "0 8px 24px rgba(21,101,192,0.38)" }
                                : {}
                        }
                        whileTap={btnState === "idle" ? { scale: 0.98, y: 0 } : {}}
                        onClick={handleSignIn}
                        style={{
                            width: "100%",
                            background: current.bg,
                            color: "#fff",
                            border: "none",
                            borderRadius: 8,
                            padding: 13,
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            fontSize: 15,
                            fontWeight: 600,
                            letterSpacing: 0.3,
                            cursor: btnState === "loading" ? "not-allowed" : "pointer",
                            opacity: current.opacity,
                            boxShadow: "0 4px 18px rgba(21,101,192,0.3)",
                            transition: "background 0.3s, opacity 0.3s",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={btnState}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: "block" }}
                            >
                                {current.label}
                            </motion.span>
                        </AnimatePresence>
                    </motion.button>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants(0.74)}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            margin: "16px 0",
                        }}
                    >
                        <div style={{ flex: 1, height: 1, background: "#e8ecf2" }} />
                        <span style={{ fontSize: 12, color: "#bbb" }}>or</span>
                        <div style={{ flex: 1, height: 1, background: "#e8ecf2" }} />
                    </motion.div>

                    {/* Sign in with other */}
                    <motion.button
                        variants={itemVariants(0.8)}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            borderColor: "#1565c0",
                            backgroundColor: "#f0f5ff",
                            y: -1,
                        }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            width: "100%",
                            background: "#fff",
                            color: "#222",
                            border: "1.5px solid #dde3f0",
                            borderRadius: 8,
                            padding: 12,
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer",
                            transition: "border-color 0.2s, background 0.2s",
                        }}
                    >
                        Sign in with other
                    </motion.button>

                    {/* Sign Up */}
                    <motion.p
                        variants={itemVariants(0.88)}
                        initial="hidden"
                        animate="visible"
                        style={{
                            textAlign: "center",
                            marginTop: 18,
                            fontSize: 12,
                            color: "#888",
                        }}
                    >
                        Don't have an account?{" "}
                        <a
                            href="#"
                            style={{
                                color: "#1565c0",
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                        >
                            Sign Up
                        </a>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
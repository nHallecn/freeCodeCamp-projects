const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setOtp(newOtp);
    setTimeLeft(5);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      clearTimeout(timerRef.current);
      return;
    }

    timerRef.current = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timerRef.current);
  }, [timeLeft]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="polite">
        {timeLeft > 0
          ? `Expires in: ${timeLeft} seconds`
          : otp
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};


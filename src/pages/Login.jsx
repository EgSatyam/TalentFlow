
// // // src/pages/Login.jsx
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function Login() {
// //   const [role, setRole] = useState("hr"); // default HR
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!email || !password) {
// //       setError("All fields are required.");
// //       return;
// //     }

// //     if (!/\S+@\S+\.\S+/.test(email)) {
// //       setError("Enter a valid email address.");
// //       return;
// //     }

// //     if (role === "hr") {
// //       // Fake HR authentication
// //       localStorage.setItem("isAuthenticated", "true");
// //       localStorage.setItem("role", "hr");
// //       navigate("/dashboard");
// //     } else {
// //       alert(`${role.toUpperCase()} login is not implemented yet.`);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-900">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md w-96"
// //       >
// //         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
// //           TalentFlow Login
// //         </h2>

// //         {error && (
// //           <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
// //         )}

// //         {/* Role Selection */}
// //         <select
// //           value={role}
// //           onChange={(e) => setRole(e.target.value)}
// //           className="w-full p-2 mb-3 border rounded-md"
// //         >
// //           <option value="hr">HR Login</option>
// //           <option value="candidate">Candidate Login</option>
// //           <option value="admin">Admin Login</option>
// //         </select>

// //         {/* Email */}
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="w-full p-2 mb-3 border rounded-md"
// //         />

// //         {/* Password */}
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="w-full p-2 mb-3 border rounded-md"
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
// //         >
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [role, setRole] = useState("hr"); // default HR
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const DEMO_HR = { email: "hr@entnt.ac.in", password: "password123" };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("All fields are required.");
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError("Enter a valid email address.");
//       return;
//     }

//     if (role === "hr") {
//       // ✅ Enforce demo HR credentials
//       if (email === DEMO_HR.email && password === DEMO_HR.password) {
//         localStorage.setItem("isAuthenticated", "true");
//         localStorage.setItem("role", "hr");
//         navigate("/dashboard");
//       } else {
//         setError("Invalid HR credentials. Use hr@entnt.ac.in / password123");
//       }
//     } else {
//       // Candidate/Admin are UI-only
//       alert(`${role.toUpperCase()} login is not implemented yet.`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-slate-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md w-96"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
//           TalentFlow Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
//         )}

//         {/* Role Selection */}
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-md"
//         >
//           <option value="hr">HR Login</option>
//           <option value="candidate">Candidate Login</option>
//           <option value="admin">Admin Login</option>
//         </select>

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-md"
//         />

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-3 border rounded-md"
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Login
//         </button>

//         {/* Helper note */}
//         <p className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
//           Demo HR login → <strong>hr@entnt.ac.in</strong> / <strong>password123</strong>
//         </p>
//       </form>
//     </div>
//   );
// }










// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [role, setRole] = useState("hr");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();
  const DEMO_HR = { email: "hr@entnt.ac.in", password: "password123" };

  // Real-time email validation
  useEffect(() => {
    if (email) {
      const isValid = /\S+@\S+\.\S+/.test(email);
      setEmailValid(isValid);
    } else {
      setEmailValid(null);
    }
  }, [email]);

  // Real-time password strength
  useEffect(() => {
    if (password) {
      let strength = 0;
      if (password.length >= 8) strength += 25;
      if (/[A-Z]/.test(password)) strength += 25;
      if (/[0-9]/.test(password)) strength += 25;
      if (/[^A-Za-z0-9]/.test(password)) strength += 25;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }

    if (!emailValid) {
      setError("Enter a valid email address.");
      setIsLoading(false);
      return;
    }

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (role === "hr") {
      if (email === DEMO_HR.email && password === DEMO_HR.password) {
        setIsSuccess(true);
        setTimeout(() => {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("role", "hr");
          navigate("/dashboard"); // ✅ redirect
        }, 1500);
      } else {
        setError("Invalid HR credentials. Use hr@entnt.ac.in / password123");
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setError(`${role.toUpperCase()} login is not implemented yet.`);
    }
  };

  const getRoleIcon = (roleType) => {
    switch (roleType) {
      case "hr":
        return "👥";
      case "candidate":
        return "🎯";
      case "admin":
        return "⚙️";
      default:
        return "👤";
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 25) return "bg-red-500";
    if (passwordStrength < 50) return "bg-orange-500";
    if (passwordStrength < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 25) return "Weak";
    if (passwordStrength < 50) return "Fair";
    if (passwordStrength < 75) return "Good";
    return "Strong";
  };

  const quickFillDemo = () => {
    setEmail(DEMO_HR.email);
    setPassword(DEMO_HR.password);
    setRole("hr");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TalentFlow
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome back! Please sign in to continue
            </p>
          </div>

          {/* Success state */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3 animate-pulse">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-800 dark:text-green-200 text-sm font-medium">
                Login successful! Redirecting...
              </span>
            </div>
          )}

          {/* Error state */}
          {error && !isSuccess && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-800 dark:text-red-200 text-sm">
                {error}
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Role
              </label>
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="hr">{getRoleIcon("hr")} HR Professional</option>
                  <option value="candidate">
                    {getRoleIcon("candidate")} Job Candidate
                  </option>
                  <option value="admin">
                    {getRoleIcon("admin")} System Admin
                  </option>
                </select>
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-slate-700 border rounded-xl focus:outline-none focus:ring-2 ${
                    emailValid === false
                      ? "border-red-300 focus:ring-red-500"
                      : emailValid === true
                      ? "border-green-300 focus:ring-green-500"
                      : "border-gray-200 dark:border-slate-600 focus:ring-blue-500"
                  }`}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isSuccess}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Success!</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Quick Fill Demo Button */}
          <button
            onClick={quickFillDemo}
            disabled={isLoading}
            className="w-full mt-4 py-2 px-4 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-slate-600"
          >
            ⚡ Quick Fill Demo
          </button>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl text-center text-xs">
            Demo: <strong>hr@entnt.ac.in</strong> / <strong>password123</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

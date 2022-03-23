import rateLimit from "express-rate-limit";

// Limit requests from same API (prevent brute force attack and dinal of service)
export default rateLimit({
  max: 2,
  windowMs: 2 * 60 * 1000,
  message: "Too many requests from this IP, please try again after 2 min!",
});

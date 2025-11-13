import User from "../models/User.js";

export const getUserProfile = async (req, res) => {
  try {
    // Assume user ID is available after login (from JWT or session)
    const userId = req.user.id;

    const user = await User.findById(userId).select("username email role");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};


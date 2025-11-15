import express from "express";
import axios from "axios";

const router = express.Router();

const FASTAPI_BASE = process.env.FASTAPI_BASE || "http://localhost:8000";

// Start Interview
router.post("/start", async (req, res) => {
  try {
    const { role, model_name = "llama3.1" } = req.body;
    const response = await axios.post(
      `${FASTAPI_BASE}/interview/start?model_name=${model_name}`,
      { role }
    );
    res.status(201).json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json({ error: err.response?.data || err.message });
  }
});

// Continue Interview
router.post("/continue", async (req, res) => {
  try {
    const response = await axios.post(`${FASTAPI_BASE}/interview/continue`, req.body);
    res.json(response.data);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json({ error: err.response?.data || err.message });
  }
});

// Terminate Interview
router.delete("/terminate/:sessionId", async (req, res) => {
  try {
    await axios.delete(`${FASTAPI_BASE}/interview/terminate/${req.params.sessionId}`);
    res.sendStatus(204);
  } catch (err) {
    res
      .status(err.response?.status || 500)
      .json({ error: err.response?.data || err.message });
  }
});

export default router;
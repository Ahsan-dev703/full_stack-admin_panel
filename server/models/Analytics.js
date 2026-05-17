const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      enum: ["metric", "trend", "activity"],
      default: "metric",
    },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
    metadata: { type: mongoose.Schema.Types.Mixed },
    recordedAt: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: true,
  },
);

analyticsSchema.index({ recordedAt: -1, type: 1 });

module.exports = mongoose.model("Analytics", analyticsSchema);

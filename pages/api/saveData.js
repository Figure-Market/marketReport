import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Path to save the JSON file in the "public" folder
    const filePath = path.join(process.cwd(), "public", "adData.json");

    try {
      // Save data to the JSON file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Failed to save data." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

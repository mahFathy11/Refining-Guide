import http from "http";
import { handleAuthRequest } from "./authPlugin.js";

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  handleAuthRequest(req, res);
});

server.listen(PORT, () => {
  console.log(`[ChemTracks Auth Backend] Server running on http://localhost:${PORT}`);
});

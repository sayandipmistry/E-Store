import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "/sayan";
    this.get("/users", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ]);
    this.get("/player", () => [
      { id: "1", name: "sachin" },
      { id: "2", name: "saurav" },
      { id: "3", name: "dhoni" },
    ]);
  },
});

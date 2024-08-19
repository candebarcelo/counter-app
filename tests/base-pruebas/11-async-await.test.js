import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("11-async-await", () => {
  // use async() here for async functions
  test("getImagen should return error if we don't have apiKey", async () => {
    const response = await getImagen();

    expect(response).toBe("No se encontro la imagen");
  });
});

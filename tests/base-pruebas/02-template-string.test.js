import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("02-template-string", () => {
  test('getSaludo should return "hola Fernando"', () => {
    // 1- arrange
    const name = "Fernando";

    // 2- act
    const message = getSaludo(name);

    // 3- assert
    expect(message).toBe(`Hola ${name}`);
  });
});

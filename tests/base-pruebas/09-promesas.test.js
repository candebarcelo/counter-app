import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("09-promesas", () => {
  // pass done as param and then call it, in order to tell Jest that we
  // need to await a promise's result.
  test("getHeroeById should return a hero", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeById should return error if hero doesn't exist", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
      done();
    });
  });
});

import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("08-imp-exp", () => {
  test("getHeroeById should return a hero by id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById should return undefined if id doesn't exist", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner should return all heroes by DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toHaveLength(3);
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
  });

  test("getHeroesByOwner should return all heroes by Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toHaveLength(2);
  });
});

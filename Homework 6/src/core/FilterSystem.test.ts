import { FilterSystem } from "./FilterSystem";
import { TestBookInfo } from "../__test__/TestingData";

describe("Test Filter System", () => {
  let system = new FilterSystem();
  system.setFilterWord("To");
  system.setIgnoreCase(true);
  system.process(TestBookInfo);

  test("Test:\n\tBaseSystem.getUpdateMessage() == Filter Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Filter Update");
  });

  test("Tests:\n\t1. FilterSystem.setFilterWord('To')\n\t2. FilterSystem.IgnoreCases(true)\n\t3. FilterSystem.process\n\t4. BaseSystem.getItems", () => {
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
      {
        ISBN: "572-70-62221-82-2",
        title: "Emma Story",
        author: "Henry James",
      },
    ]);
  });

  test("Test:\n\tFilterSystem.isIgnoreCase() == true", () => {
    expect(system.isIgnoreCase()).toStrictEqual(true);
  });

  test("Test:\n\tFilterSystem.FilterWord() == 'To'", () => {
    expect(system.getFilterWord()).toStrictEqual("To");
  });

  test("Test:\n\tWhen ignore case is false then TestBookInfo should have only one object", () => {
    system.setIgnoreCase(false);
    system.process(TestBookInfo);
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
    ]);
  });
});

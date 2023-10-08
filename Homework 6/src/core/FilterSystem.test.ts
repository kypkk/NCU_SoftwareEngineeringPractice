import { FilterSystem } from "./FilterSystem";
import { TestBookInfo } from "../__test__/TestingData";

describe("Test Filter System", () => {
  let system = new FilterSystem();

  /**
   * Tests:
   * - BaseSystem.getUpdateMessage()
   */
  test("Test:\n\tBaseSystem.getUpdateMessage() == Filter Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Filter Update");
  });

  /**
   * Tests:
   * - FilterSystem.setFilterWord('To')
   * - FilterSystem.IgnoreCases(true)
   * - FilterSystem.process
   * - FilterSystem..getFilterWord()
   * - BaseSystem.getItems()
   */
  test("Tests:\n\t1. FilterSystem.setFilterWord('To')\n\t2. FilterSystem.IgnoreCases(true)\n\t3. FilterSystem.process\n\t4. FilterSystem.getFilterWord()\n\t5. BaseSystem.getItems", () => {
    system.setFilterWord("To");
    system.setIgnoreCase(true);
    system.process(TestBookInfo);
    expect(system.isIgnoreCase()).toBeTruthy();
    expect(system.getFilterWord()).toStrictEqual("To");
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
  /**
   * Tests:
   * - FilterSystem.IgnoreCases(false)
   * - FilterSystem.process()
   * - GetOnlyone object instead of two
   */
  test("Test:\n\tWhen ignore case is false then TestBookInfo should have only one object", () => {
    system.setIgnoreCase(false);
    system.process(TestBookInfo);
    expect(system.isIgnoreCase()).toBeFalsy();
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
    ]);
  });
});

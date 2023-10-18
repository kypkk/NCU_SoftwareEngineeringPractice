/**
 * 資工四B 109201521 彭康彧
 */
import { SortSystem } from "./SortSystem";
import { TestBookInfo } from "../__test__/TestingData";

describe("Test Sort System", () => {
  let system = new SortSystem();
  system.process(TestBookInfo);

  /**
   * Tests:
   * - BaseSystem.getUpdateMessage()
   */
  test("Test:\n\tBaseSystem.getUpdateMessage() == Sort Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Sort Update");
  });

  /**
   * Tests:
   * - sortSytem.setSortType("ASC")
   * - sortSytem.getSortType()
   * - sortSytem.setSortType("Throw Error")
   */
  test("Test:\n\t1.sortSystem.setSortType(ASC)\n\t2. sortSystem.getSortType() === ASC\n\t3. Error test for sortSystem.setSortType()", () => {
    system.setSortType("ASC");
    expect(system.getSortType()).toStrictEqual("ASC");

    let setErrSortType = () => {
      system.setSortType("Not ASC nor DESC");
    };
    expect(setErrSortType).toThrow(new Error("It must be ASC or DESC"));
  });

  /**
   * Tests:
   * - BaseSystem.getItems in ASC order
   */
  test("Test:\n\tBaseSystem.getItems in ASC order", () => {
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "680-71-48243-17-0",
        title: "Alice Adventures in Wonderland",
        author: "Stephenie Meyer",
      },
      {
        ISBN: "712-03-87188-05-4",
        title: "Bone of fire",
        author: "Willain Bradbury",
      },
      {
        ISBN: "572-70-62221-82-2",
        title: "Emma Story",
        author: "Henry James",
      },
      {
        ISBN: "255-03-71788-05-4",
        title: "Game of Thrones I",
        author: "Ray Bradbury",
      },
      {
        ISBN: "148-71-77362-42-3",
        title: "Game of Thrones II",
        author: "J. R. R. Tolkien",
      },
      {
        ISBN: "746-25-05830-50-7",
        title: "One Thousand and One Nights",
        author: "Ernest Hemingway",
      },
      {
        ISBN: "776-33-13328-46-3",
        title: "The Lord of The Rings",
        author: "Doris Lessing",
      },
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
    ]);
  });

  /**
   * Tests:
   * - sortSytem.setSortType("DESC")
   * - sortSytem.process() DESC
   * - BaseSystem.getItems in DESC order
   */
  test("Test:\n\t1. SortSystem.SetsortType(DESC)\n\t2. sortSystem.process() DESC branch test\n\t3. BaseSystem.getItems in DESC order", () => {
    system.setSortType("DESC");
    system.process(TestBookInfo);

    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
      {
        ISBN: "776-33-13328-46-3",
        title: "The Lord of The Rings",
        author: "Doris Lessing",
      },
      {
        ISBN: "746-25-05830-50-7",
        title: "One Thousand and One Nights",
        author: "Ernest Hemingway",
      },
      {
        ISBN: "148-71-77362-42-3",
        title: "Game of Thrones II",
        author: "J. R. R. Tolkien",
      },
      {
        ISBN: "255-03-71788-05-4",
        title: "Game of Thrones I",
        author: "Ray Bradbury",
      },
      {
        ISBN: "572-70-62221-82-2",
        title: "Emma Story",
        author: "Henry James",
      },
      {
        ISBN: "712-03-87188-05-4",
        title: "Bone of fire",
        author: "Willain Bradbury",
      },
      {
        ISBN: "680-71-48243-17-0",
        title: "Alice Adventures in Wonderland",
        author: "Stephenie Meyer",
      },
    ]);
  });
});

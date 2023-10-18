/**
 * 資工四B 109201521 彭康彧
 */
import { WordPuritySystem } from "./WordPuritySystem";
const { WordPurityService } = jest.createMockFromModule<
  typeof import("@externals/word-purity")
>("@externals/word-purity");
import { TestBookInfo } from "../__test__/TestingData";

describe("Need implement", () => {
  /**
   * #####################################################
   * ############### Mock Purity Service #################
   * #####################################################
   */
  const service = new WordPurityService();
  service.words = [];
  service.addWord = jest.fn((words: string[]): void => {
    words.map((word: string) => {
      service.words.push(word);
    });
  });

  service.purity = jest.fn((str: string): string => {
    service.words.map((word: string) => {
      str = str.replace(word, "*".repeat(word.length));
    });
    return str;
  });

  /**
   * #####################################################
   * ###################### Tests ########################
   * #####################################################
   */
  let system = new WordPuritySystem(service);
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  /**
   * Tests:
   * - BaseSystem.getUpdateMessage()
   */
  test("Tests:\n\tWordPuritySystem.getUpdateMessage() == Dom Purity Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Dom Purity Update");
  });
  /**
   * Tests:
   * - wordPuritySystem.setDisablePurity(true)
   * - wordPuritySystem.isDiablePurity()
   * - wordPuritySystem.process()
   * - Basesystem.getItems()
   */
  test("Tests:\n\tSet Disable True\n\t Test process true branch which is not purityItems\n\t Test getItems", () => {
    system.setDisablePurity(true);
    let Purity = system.isDisablePurity();
    expect(Purity).toBeTruthy();
    system.process(TestBookInfo);
    expect(system.getItems()).toStrictEqual(TestBookInfo); //
  });
  /**
   * Tests:
   * - wordPuritySystem.setDisablePurity(false)
   * - wordPuritySystem.isDiablePurity()
   * - wordPuritySystem.process()
   * - Basesystem.getItems()
   */
  test("Tests:\n\tSet Disable back to Default\n\tTest purityItems()\n\tTest getItems()", () => {
    system.setDisablePurity(false);
    let Purity = system.isDisablePurity();
    expect(Purity).toBeFalsy();
    system.process(TestBookInfo);
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "776-33-13328-46-3",
        title: "The Lord of The Rings",
        author: "Doris Lessing",
      },
      {
        ISBN: "255-03-71788-05-4",
        title: "Game of Thrones I",
        author: "Ray Bradbury",
      },
      {
        ISBN: "712-03-87188-05-4",
        title: "Bone of fire",
        author: "Willain Bradbury",
      },
      {
        ISBN: "774-13-13326-60-1",
        title: "To Kill a Mockingbird",
        author: "Danielle Steel",
      },
      {
        ISBN: "746-25-05830-50-7",
        title: "One Thousand and One Nights",
        author: "Ernest Hemingway",
      },
      {
        ISBN: "572-70-62221-82-2",
        title: "Emma Story",
        author: "Henry James",
      },
      {
        ISBN: "680-71-48243-17-0",
        title: "Alice Adventures in **********",
        author: "Stephenie Meyer",
      },
      {
        ISBN: "148-71-77362-42-3",
        title: "Game of Thrones II",
        author: "J. R. R. Tolkien",
      },
    ]);
  });
});

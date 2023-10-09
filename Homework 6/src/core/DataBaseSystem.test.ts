import { DataBaseSystem } from "./DataBaseSystem";
const { BookDataBaseService } = jest.createMockFromModule<
  typeof import("@externals/simple-db")
>("@externals/simple-db");
import { BookInfo } from "@externals/simple-db";
import { TestBookInfo } from "../__test__/TestingData";
const { HashGenerator } = jest.createMockFromModule<
  typeof import("../utils/HashGenerator")
>("../utils/HashGenerator");
describe("Test DataBase System", () => {
  /**
   * #####################################################
   * ################# Mock DB Service ###################
   * #####################################################
   */
  const service = new BookDataBaseService();
  let TestData = TestBookInfo;

  service.getBooks = jest.fn(() => {
    return new Promise((resolve) => {
      resolve(TestData);
    });
  });
  // Hash Generator
  const HG = new HashGenerator();

  HG.simpleISBN = jest.fn((pattern: string) => {
    return "0000-0000-0000-0000";
  });

  // DB System Test
  const system = new DataBaseSystem(service, HG);

  /**
   * Tests:
   * - BaseSystem.getUpdateMessage()
   */
  test("Tests:\n\tWordPuritySystem.getUpdateMessage() == Data Base Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Data Base Update");
  });

  test("Tests:\n\tConnect DB", () => {
    // connect successfully
    service.setUp = jest.fn((url: string, port: number) => {
      return new Promise((resolve, reject) => {
        resolve(url + ":" + port.toString());
      });
    });
    expect(system.connectDB()).toStrictEqual(
      Promise.resolve("http://localhost:4000")
    );
  });

  test("Tests:\n\tConnect DB failed", async () => {
    service.setUp = jest.fn((url: string, port: number) => {
      return new Promise((resolve, reject) => {
        reject("error");
      });
    });

    await expect(system.connectDB()).rejects.toThrow("Cannot connect to DB");
    jest.setTimeout(25000);
  });

  test("Tests:\n\tAdd book successfully", async () => {
    service.addBook = jest.fn((book: BookInfo) => {
      return new Promise((resolve, reject) => {
        if (book) {
          TestData.push(book);
          resolve("success");
        } else reject("error");
      });
    });
    const length_before_add = TestData.length;
    await system.addBook("mock", "Author");
    expect(TestData.length).toStrictEqual(length_before_add + 1);
  });

  test("Tests:\n\tAuthor Title Null fail", async () => {
    await expect(system.addBook("", "")).rejects.toThrow("Add book failed");
  });

  test("Tests:\n\tAdd book service fail", async () => {
    service.addBook = jest.fn((book: BookInfo) => {
      return new Promise((resolve, reject) => {
        reject("error");
      });
    });

    await expect(system.addBook("mock", "Author")).rejects.toThrow(
      "Add book failed"
    );
  });

  test("Tests:\n\tDelete book", async () => {
    service.deleteBook = jest.fn((bookISBN: string) => {
      return new Promise((resolve, reject) => {
        if (bookISBN) {
          let filtered = TestData.filter((book) => {
            return book.ISBN !== bookISBN;
          });
          TestData = filtered;
          resolve("success");
        } else reject("error");
      });
    });
    const length_before_delete = TestData.length;
    service.deleteBook("0000-0000-0000-0000");
    expect(TestData.length).toEqual(length_before_delete - 1);
  });

  test("Tests:\n\tISBN Null fail", async () => {
    await expect(system.deleteBook("")).rejects.toThrow("Delete book failed");
  });

  test("Tests:\n\tDelete book service fail", async () => {
    service.deleteBook = jest.fn((bookISBN: string) => {
      return new Promise((resolve, reject) => {
        reject("error");
      });
    });
    await expect(system.deleteBook("0000-0000-0000-0000")).rejects.toThrow(
      "Delete book failed"
    );
  });
  test("Tests:\n\tprocess", async () => {
    system.process(TestData);
    expect(system.getItems()).toStrictEqual(TestBookInfo);
  });
});

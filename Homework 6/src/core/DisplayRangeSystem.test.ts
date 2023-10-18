/**
 * 資工四B 109201521 彭康彧
 */
import { DisplayRangeSystem } from "./DisplayRangeSystem";
import { TestBookInfo } from "../__test__/TestingData";
import { Test } from "mocha";

describe("Test Display Range System", () => {
  let system = new DisplayRangeSystem();

  /**
   * Tests:
   * - BaseSystem.getUpdateMessage()
   */
  test("Test:\n\tBaseSystem.getUpdateMessage() == Display Range Update", () => {
    expect(system.getUpdateMessage()).toStrictEqual("Display Range Update");
  });

  /**
   * Tests:
   * - DisplayRangeSystem.SetRange(1,1) in both numbers and strings
   * - DisplayRangeSystem.SetRange(1,TestData.length) in number/string and string/number
   * - DisplayRangeSystem.getStartRange()/ getEndRange()
   * - BaseSystem.getItem()
   */
  test("Test:\n\t1. DisplayRangeSystem.setRange(1,1)_both number and string\n\t2. DisplayRangeSystem.SetRange(1,8) in number/string and string/number \n\t3. DisplayRangeSystem.getEndRange()/getStartRange()\n\t4. BaseSystem.getItem()", () => {
    system.setRange(1, 1);
    system.process(TestBookInfo);
    expect(system.getStartRange()).toBe(1);
    expect(system.getEndRange()).toBe(1);
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "776-33-13328-46-3",
        title: "The Lord of The Rings",
        author: "Doris Lessing",
      },
    ]);
    system.setRange("1", "1");
    system.process(TestBookInfo);
    expect(system.getStartRange()).toBe(1);
    expect(system.getEndRange()).toBe(1);
    expect(system.getItems()).toStrictEqual([
      {
        ISBN: "776-33-13328-46-3",
        title: "The Lord of The Rings",
        author: "Doris Lessing",
      },
    ]);
    system.setRange(1, TestBookInfo.length.toString());
    system.process(TestBookInfo);
    expect(system.getStartRange()).toBe(1);
    expect(system.getEndRange()).toBe(8);
    expect(system.getItems()).toStrictEqual(TestBookInfo);
    system.setRange("1", TestBookInfo.length);
    system.process(TestBookInfo);
    expect(system.getStartRange()).toBe(1);
    expect(system.getEndRange()).toBe(8);
    expect(system.getItems()).toStrictEqual(TestBookInfo);
  });

  /**
   * Tests:
   * - Invalid String Input
   * - Invalid float Input
   * - Less than zero Input
   * - End Range larger than Start Range Error
   */
  test("Test:\n\t1. Invalid String Input\n\t2. Invalid Float Input\n\t3. Less than 0 input\n\t4. End Range larger than Start Range value", () => {
    const InvalidString = () => {
      system.setRange("abc", 6);
    };
    const InvalidFloat = () => {
      system.setRange(1.8, 2.99);
    };
    const LessThanZero = () => {
      system.setRange(-100, 3);
    };
    const GreaterThanStart = () => {
      system.setRange(3, 1);
    };
    expect(InvalidString).toThrow("Invalid String Input");
    expect(InvalidFloat).toThrow("Invalid Float Input");
    expect(LessThanZero).toThrow("Cannot be less than 0");
    expect(GreaterThanStart).toThrow("End Range cannot less than Start Range");
  });
});

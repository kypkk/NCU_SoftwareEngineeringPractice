/**
 * 資工四B 109201521 彭康彧
 */
import { HashGenerator } from "./HashGenerator";
describe("Test for the Hash Generator", () => {
  const generator = new HashGenerator();
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.97;
  global.Math = mockMath;

  /**
   * Tests:
   * - HashGenerator.g()
   */
  test("Tests:\n\tgenerator", () => {
    let randomGenString = generator.g(1);
    expect(randomGenString).toBe("Z");
  });
  /**
   * Tests:
   * - Error call g
   */
  test("Tests\n\tError call generation", () => {
    const randomGenString = (): string => {
      return generator.g(0);
    };

    expect(randomGenString).toThrow("Hash number can't less than 0");
  });
  /**
   * Tests:
   * - HashGenerator.simpleISBN()
   */
  test("Tests:\n\tsimpleISBN", () => {
    let simpleISBN = generator.simpleISBN("xxxx-xxxx-xxxx-xxxx");
    expect(simpleISBN).toBe("9999-9999-9999-9999");
    simpleISBN = generator.simpleISBN("");
    expect(simpleISBN).toBe("");
    simpleISBN = generator.simpleISBN("-");
    expect(simpleISBN).toBe("-");
    simpleISBN = generator.simpleISBN("f");
    expect(simpleISBN).toBe("9");
  });
});

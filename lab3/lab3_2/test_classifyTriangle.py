from classifyTriangle import classify_triangle as classifyTriangle
import pytest

# 正三角形測試
def test_Equilateral():
    assert classifyTriangle(3,3,3) == "Equilateral"

# 等腰三角形測試
def test_Isosceles_side1_side2():
    assert classifyTriangle(4,4,5) == "Isosceles"
def test_Isosceles_side1_side3():
    assert classifyTriangle(4,5,4) == "Isosceles"
def test_Isosceles_side2_side3():
    assert classifyTriangle(5,4,4) == "Isosceles"

# 不規則三角形測試
def test_Scalene():
    assert classifyTriangle(3,4,5) == "Scalene"
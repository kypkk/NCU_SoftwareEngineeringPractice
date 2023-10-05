from findNumbers import find_numbers as fn
import pytest 

## valid tests
def test_zero():
    assert fn([0]) == ["zero"]

def test_positive_list():
    assert fn([1,10,100]) == ["positive", "positive", "positive"]

def test_negative_list():
    assert fn([-1,-10,-100]) == ["negative", "negative", "negative"]

# negative testcases
def test_not_an_array():
    with pytest.raises(Exception) as error:
        fn(5)
    assert str(error.value) == "Numbers must be provided as non-empty number lists."

def test_empty_list():
    with pytest.raises(Exception) as error:
        fn([])
    assert str(error.value) == "Numbers must be provided as non-empty number lists."

def test_string_array():
    with pytest.raises(Exception) as error:
        fn(["a","b"])
    assert str(error.value) == "Numbers must be provided as non-empty number lists."

def test_boolean_array():
    with pytest.raises(Exception) as error:
        fn([True, False])
    assert str(error.value) == "Numbers must be provided as non-empty number lists."
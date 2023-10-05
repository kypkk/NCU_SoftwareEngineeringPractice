from bubble_sort import bubble_sort as bubbleSort
import pytest

def test_null_list():
    assert bubbleSort([]) == []

def test_one_positive_element_list():
    assert bubbleSort([3]) == [3]

def test__positive_ordered_list():
    assert bubbleSort([1,2,3,4,5]) == [1,2,3,4,5]

def test_positive_reverse_ordered_list():
    assert bubbleSort([5,4,3,2,1]) == [1,2,3,4,5]

def test__positive_duplicate_item_list():
    assert bubbleSort([2,2,2,2,2]) == [2,2,2,2,2]

def test_one_negative_element_list():
    assert bubbleSort([-3]) == [-3]

def test__negative_ordered_list():
    assert bubbleSort([-5,-4,-3,-2,-1]) == [-5,-4,-3,-2,-1]

def test_negative_reverse_ordered_list():
    assert bubbleSort([-1,-2,-3,-4,-5]) == [-5,-4,-3,-2,-1]

def test__negative_duplicate_item_list():
    assert bubbleSort([-2,-2,-2,-2,-2]) == [-2,-2,-2,-2,-2]

def test_avg_random_list():
    assert bubbleSort([5, -10, 0, 4, -3]) == [-10, -3, 0, 4, 5]

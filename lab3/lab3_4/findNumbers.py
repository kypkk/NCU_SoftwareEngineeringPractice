# Lab 5.4
# findNumbers.py

def find_numbers(numbers):
    if not isinstance(numbers, list) or len(numbers) == 0:
        raise ValueError('Numbers must be provided as non-empty number lists.')
    result = []
    for num in numbers:
        if type(num) == str or type(num) == bool:
            raise ValueError('Numbers must be provided as non-empty number lists.')
        if num > 0:
            result.append("positive")
        elif num < 0:
            result.append("negative")
        else:
            result.append("zero")
    return result


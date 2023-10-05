import pytest
from unittest.mock import patch
from data_processor import process_and_store_data as processAndStoreData

@patch('data_processor.Database')
def test_process_and_store_data(MockDatabase):
    # Create a mock instance of a database class
    mock_db_instance = MockDatabase.return_value

    # Define the return value for the mock methods
    mock_db_instance.get_all_data.return_value = [1,2,3]

    value = mock_db_instance.get_all_data()
    result = processAndStoreData(value)
    mock_db_instance.assert_called_with
    assert result == 6
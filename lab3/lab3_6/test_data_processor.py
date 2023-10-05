from data_processor import get_and_process_data as getAndProcessData
import pytest
from unittest import mock

@mock.patch("data_processor.fetch_data_from_api", return_value=None, autospec=True)
def test_getNone(mock_fetch_data_from_api):
    assert getAndProcessData("https://example.com/api/data") == None


@mock.patch("data_processor.fetch_data_from_api", return_value=[1,2,3], autospec=True)
def test_getSix(mock_fetch_data_from_api):
    assert getAndProcessData("https://example.com/api/data") == 6
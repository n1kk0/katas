import unittest

from src.pagination_helper import PaginationHelper


class TestPaginationHelper(unittest.TestCase):
    def test_paginaiton_helper(self):
        collection = range(1, 25)
        helper = PaginationHelper(collection, 10)

        self.assertEqual(
            helper.page_count(),
            3,
            'page_count is returning incorrect value.'
        )

        self.assertEqual(
            helper.page_index(23),
            2,
            'page_index returned incorrect value'
        )

        self.assertEqual(
            helper.page_index(40),
            -1,
            'page_index out of range should return -1'
        )

        self.assertEqual(
            helper.item_count(),
            24,
            'item_count returned incorrect value'
        )

        self.assertEqual(
            helper.page_item_count(2),
            4,
            'page_item_count returned incorrect value'
        )

        self.assertEqual(
            helper.page_item_count(10),
            -1,
            'page_item_count out of range should return -1'
        )


if __name__ == '__main__':
    unittest.main()

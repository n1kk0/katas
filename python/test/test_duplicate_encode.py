import unittest

from src.duplicate_encode import duplicate_encode


class TestDuplicateEncode(unittest.TestCase):
    def test_duplicate_encode(self):
        self.assertEqual(duplicate_encode("din"), "(((")
        self.assertEqual(duplicate_encode("recede"), "()()()")

        self.assertEqual(
            duplicate_encode("Success"),
            ")())())",
            "should ignore case"
        )

        self.assertEqual(duplicate_encode("(( @"), "))((")

        self.assertEqual(
            duplicate_encode("na)eeeFuTyT(wlHJFukvkabv!y@Fkvu"),
            '()())))))))((((())))))()()())))'
        )


if __name__ == '__main__':
    unittest.main()

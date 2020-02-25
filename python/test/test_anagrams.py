import unittest

from src.anagrams import anagrams


class TestDuplicateEncode(unittest.TestCase):
    def test_anagrams(self):
        self.assertEqual(
            anagrams(
                'abba',
                ['aabb', 'abcd', 'bbaa', 'dada']
            ),
            ['aabb', 'bbaa']
        )

        self.assertEqual(
            anagrams(
                'racer',
                ['crazer', 'carer', 'racar', 'caers', 'racer']
            ),
            ['carer', 'racer']
        )


if __name__ == '__main__':
    unittest.main()

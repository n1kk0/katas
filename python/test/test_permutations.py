import unittest

from src.permutations import permutations


class TestRemoveSmallest(unittest.TestCase):
    def test_permutations(self):
        self.assertEqual(sorted(permutations('a')), ['a'])
        self.assertEqual(sorted(permutations('ab')), ['ab', 'ba'])

        self.assertEqual(
            sorted(permutations('aabb')),
            ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
        )


if __name__ == '__main__':
    unittest.main()

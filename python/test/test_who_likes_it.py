import unittest

from src.who_likes_it import who_likes_it

class TestWhoLikesIt(unittest.TestCase):
    def test_who_likes_it(self):
        self.assertEqual(who_likes_it([]), "no one likes this")
        self.assertEqual(who_likes_it(["Peter"]), "Peter likes this")
        self.assertEqual(who_likes_it(["Jacob", "Alex"]), "Jacob and Alex like this")
        self.assertEqual(who_likes_it(["Max", "John", "Mark"]), "Max, John and Mark like this")
        self.assertEqual(who_likes_it(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this")

if __name__ == '__main__':
    unittest.main()

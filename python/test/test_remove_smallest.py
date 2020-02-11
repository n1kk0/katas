import unittest

from numpy.random import randint
from src.remove_smallest import remove_smallest


class TestRemoveSmallest(unittest.TestCase):
    def test_remove_smallest(self):
        self.assertEqual(
            remove_smallest([1, 2, 3, 4, 5]),
            [2, 3, 4, 5],
            "Wrong result for [1, 2, 3, 4, 5]"
        )

        self.assertEqual(
            remove_smallest([5, 3, 2, 1, 4]),
            [5, 3, 2, 4],
            "Wrong result for [5, 3, 2, 1, 4]"
        )

        self.assertEqual(
            remove_smallest([1, 2, 3, 1, 1]),
            [2, 3, 1, 1],
            "Wrong result for [1, 2, 3, 1, 1]"
        )

        self.assertEqual(remove_smallest([]), [], "Wrong result for []")

        for i in range(10):
            x = randint(1, 400)

            self.assertEqual(
                remove_smallest([x]),
                [],
                "{}] Wrong result for [{}]".format(i, x)
            )

        for i in range(10):
            arr = self.randlist()

            self.assertEqual(
                len(remove_smallest(arr[:])),
                len(arr) - 1,
                "Wrong sized result for {}".format(arr)
            )

    def randlist(self):
        return list(randint(400, size = randint(1, 10)))


if __name__ == '__main__':
    unittest.main()

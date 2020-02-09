import unittest

from src.which_are_in import in_array


class TestWhichAreIn(unittest.TestCase):
    def test_which_are_in(self):
        a1 = ["live", "arp", "strong"] 
        a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
        r = ['arp', 'live', 'strong']

        self.assertEqual(in_array(a1, a2), r)


if __name__ == '__main__':
    unittest.main()

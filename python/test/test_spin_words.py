import unittest

from src.spin_words import spin_words


class TestRenderTree(unittest.TestCase):
    def test_spin_words(self):
        self.assertEqual(spin_words("Welcome"), "emocleW")
        self.assertEqual(spin_words("Bonjour bonjour les petits enfants"), "ruojnoB ruojnob les stitep stnafne")


if __name__ == '__main__':
    unittest.main()

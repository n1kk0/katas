import unittest

from src.first_non_repeating_letter import first_non_repeating_letter


class TestFirstNonRepeatingLetter(unittest.TestCase):
    def test_first_non_repeating_letter(self):
        self.assertEqual(first_non_repeating_letter('a'), 'a')
        self.assertEqual(first_non_repeating_letter('stress'), 't')
        self.assertEqual(first_non_repeating_letter('moonmen'), 'e')
        self.assertEqual(first_non_repeating_letter(''), '')
        self.assertEqual(first_non_repeating_letter('abba'), '')
        self.assertEqual(first_non_repeating_letter('aa'), '')
        self.assertEqual(first_non_repeating_letter('~><#~><'), '#')
        self.assertEqual(first_non_repeating_letter('hello world, eh?'), 'w')
        self.assertEqual(first_non_repeating_letter('sTreSS'), 'T')

        self.assertEqual(
            first_non_repeating_letter('Go hang a salami, I\'m a lasagna hog!'),
            ','
        )


if __name__ == '__main__':
    unittest.main()

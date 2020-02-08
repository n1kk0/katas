import unittest

from src.maskify import maskify


class TestMaskify(unittest.TestCase):
    def test_maskify(self):
        cc = ''
        r = maskify(cc)

        self.assertEqual(
            r,
            cc,
            "masking: {0} ".format(cc) +
            "{0}  matches  {1}".format(cc, r)
        )

        cc = '123'
        r = maskify(cc)

        self.assertEqual(
            r,
            cc,
            "masking: {0} ".format(cc) +
            "{0}  matches  {1}".format(cc, r)
        )

        cc = 'SF$SDfgsd2eA'
        r = maskify(cc)

        self.assertEqual(
            r,
            '########d2eA',
            "masking: {0} ".format(cc) +
            "{0}  matches  {1}".format('########d2eA', r)
        )


if __name__ == '__main__':
    unittest.main()

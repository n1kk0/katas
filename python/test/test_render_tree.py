import unittest

from src.render_tree import render_tree

class TestRenderTree(unittest.TestCase):
    def test_render(self):
        self.assertEqual(render_tree([
            '/home/michel/photos/wallpaper.jpg',
            '/etc/passwd',
            '/etc/nginx/conf.d/website.conf',
            '/home/michel/cv.pdf',
            '/etc/hosts',
            '/home/michel/photos/profile.jpg',
            '/home/michel'
        ]), '''etc
    hosts
    nginx
        conf.d
            website.conf
    passwd
home
    michel
        cv.pdf
        photos
            profile.jpg
            wallpaper.jpg
''')

        self.assertEqual(render_tree(["/1/2/3/4/5/6/7/8/9", "1/2/3/33", "/1/2/3/55"]), '''1
    2
        3
            33
            4
                5
                    6
                        7
                            8
                                9
            55
''')

        self.assertEqual(render_tree(["pouet", "/pouet/pouet"]), '''pouet
    pouet
''')

        self.assertEqual(render_tree([]), "")

if __name__ == '__main__':
    unittest.main()

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

if __name__ == '__main__':
    unittest.main()

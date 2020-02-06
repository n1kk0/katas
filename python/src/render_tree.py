class MyTree(dict):
    def addPaths(self, paths):
        for path in paths:
            self.addPath(path)

    def addPath(self, path):
        pathItems = path.split("/")

        if path[0] == "/":
            pathItems.pop(0)

        subDict = self

        for pathItem in pathItems:
            try:
                subDict = subDict[pathItem]
            except KeyError:
                subDict[pathItem] = {}
                subDict = subDict[pathItem]

    def deepSortDict(self, subDict = None):
        if subDict is None:
            subDict = self

        return {key: self.deepSortDict(value) if isinstance(value, dict) else value for key, value in sorted(subDict.items())}

    def toString(self, subDict = None, depth = 0):
        out = ""

        if subDict is None:
            subDict = self.deepSortDict()

        for key in subDict:
            out += ("    " * depth) + key + "\n"

            if len(subDict.get(key)) != 0:
                nextDepth = depth + 1
                out += self.toString(subDict.get(key), nextDepth)

        return out

def render_tree(paths):
    myTree = MyTree()
    myTree.addPaths(paths)

    return myTree.toString()

print(render_tree([
    '/home/michel/photos/wallpaper.jpg',
    '/etc/passwd',
    '/etc/nginx/conf.d/website.conf',
    '/home/michel/cv.pdf',
    '/etc/hosts',
    '/home/michel/photos/profile.jpg',
    '/home/michel'
]))

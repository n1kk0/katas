class MyTree(dict):
    def __init__(self):
        self.dict = dict()

    def addPaths(self, paths):
        paths.sort()

        for path in paths:
            self.addPath(path)

    def addPath(self, path):
        pathItems = path.split("/")

        if path[0] == "/":
            pathItems.pop(0)

        subDict = self.dict

        for pathItem in pathItems:
            try:
                subDict = subDict[pathItem]
            except KeyError:
                subDict[pathItem] = {}
                subDict = subDict[pathItem]

    def toString(self, subDict = None, depth = 0):
        out = ""

        if subDict is None:
            subDict = self.dict

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

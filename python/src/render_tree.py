class MyTree(dict):
    def addPaths(self, paths):
        for path in paths:
            self.addPath(path)

        return self

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
        nextDepth = depth + 1

        if subDict is None:
            subDict = self.deepSortDict()

        for key in subDict:
            out += ("    " * depth) + key + "\n"

            if len(subDict.get(key)) != 0:
                out += self.toString(subDict.get(key), nextDepth)

        return out

def render_tree(paths):
    return MyTree().addPaths(paths).toString()

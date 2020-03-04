class MyTree(dict):
    def addPaths(self, paths):
        for path in paths:
            self.addPath(path)

        return self

    def addPath(self, path):
        path_items = path.split("/")

        if path[0] == "/":
            path_items.pop(0)

        sub_dict = self

        for path_item in path_items:
            try:
                sub_dict = sub_dict[path_item]
            except KeyError:
                sub_dict[path_item] = {}
                sub_dict = sub_dict[path_item]

    def deepSortDict(self, sub_dict=None):
        if sub_dict is None:
            sub_dict = self

        return {
            key: self.deepSortDict(value)
            if isinstance(value, dict)
            else value
            for key, value in sorted(sub_dict.items())
        }

    def toString(self, sub_dict=None, depth=0):
        out = ""
        next_depth = depth + 1

        if sub_dict is None:
            sub_dict = self.deepSortDict()

        for key in sub_dict:
            out += ("    " * depth) + key + "\n"

            if len(sub_dict.get(key)) != 0:
                out += self.toString(sub_dict.get(key), next_depth)

        return out


def render_tree(paths):
    return MyTree().addPaths(paths).toString()

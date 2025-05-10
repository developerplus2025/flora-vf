# import subprocess
# text = """

# ███████╗██╗      ██████╗ ██████╗  █████╗     ██╗   ██╗ ██╗███████╗███████╗ █████╗
# ██╔════╝██║     ██╔═══██╗██╔══██╗██╔══██╗    ██║   ██║███║██╔════╝╚════██║██╔══██╗
# █████╗  ██║     ██║   ██║██████╔╝███████║    ██║   ██║╚██║███████╗    ██╔╝╚██████║
# ██╔══╝  ██║     ██║   ██║██╔══██╗██╔══██║    ╚██╗ ██╔╝ ██║╚════██║   ██╔╝  ╚═══██║
# ██║     ███████╗╚██████╔╝██║  ██║██║  ██║     ╚████╔╝  ██║███████║██╗██║██╗█████╔╝
# ╚═╝     ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝      ╚═══╝   ╚═╝╚══════╝╚═╝╚═╝╚═╝╚════╝

# """
# print(text)

# subprocess.run("npm run postinstall", shell=True, check=True)
# subprocess.run("npm run dev", shell=True, check=True)
from manim import *


class HelloScene(Scene):
    def construct(self):
        text = Text("Xin chào, Manim!", font_size=72)
        self.play(Write(text))
        self.wait(2)

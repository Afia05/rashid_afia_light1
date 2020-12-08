while True:
    if input.light_level():
        light.set_all (light.rgb (0, 0, 255))
    else:
        light.clear()
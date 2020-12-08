while (true) {
    if (input.lightLevel()) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}

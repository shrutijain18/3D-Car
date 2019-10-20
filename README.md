## Project Description

* **Implementation** \
The project implements the following features: \
✓ Application of 3D transformation \
✓ View of the object from multiple views. (Effect = Anaglyph Effect) \
✓ Transform camera/viewer/light sources(s) \
✓ Perspective Vanishing Points \
✓ Mapping \
✓ Window Resize \
✓ Stats Provider \
✓ Keyboard Controls \
✓ Mouse Controls \
✓ Shaders (Vignette) \
✓ Reset \
✓ Design your Own Car 

* **Implementation Description** 
 1. 3D Transformation \
a. The object, car, can be rotated on either axis. The object has been
implemented with a translation into the skybox . \
b. The object can be scaled on either axis . The control bar has the feature but
the code has been disabled to not distort the image. \
2. Multiple Views \
a. The car and the 3D world (represented by the skybox) can be viewed from
either of the axis. To view the 3D world completely , zoom out until the cube
appears. Rotate the zoom in either direction on either axis. The same
concept applies to the car. \
b. Left click to rotate the world. \
c. Right click to see the panning effect. \
3. Transform Camera & Light Sources. \
a. The camera controls on the left controller adjusts the position of the 3D
world as per the given coordinate system. \
b. The cameras field of view is user friendly . \
c. Ambient Light and Point light values can be given real time. Also, a constant
change of light occurs during the execution. The best way to look at the
effects is to disable the translation on all the axis of the group (stated as
geo.translate.X()) . \
4. Perspective Vanishing Points. \
a. The entire world vanishes after a certain point . Even if an edge reaches the
vanishing point, it disappears. \
b. Zoom out completely . After a point the objects will vanish. \
5. Mapping \
a. Both the skybox and the car (the tires) maps the texture. \
6. Window Resize \
a. As you resize the window panel, The projection of the code inclusive of the
camera, field of view and the objects resize accordingly. \
7. Stats Provider :JavaScript Performance Monitor \
a. This class provides a simple info box that will help you monitor your
code performance. \
● FPS Frames rendered in the last second. The higher the number the better. \
● MS Milliseconds needed to render a frame. The lower the number the better. \
● MB MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info) \
● CUSTOM User-defined panel support. \
8. Keyboard Controlls: \
The world can be controlled by the following keys: \
Up Arrow : Move forward \
Down Arrow : Move backwards \
Left Arrow : Move left \
Right Arrow : Move right \
Touchpad : Zoom in and Zoom out with your touchpad \
9. Mouse Controls: \
The view can also be controlled by the following: \
Left click: Rotate in either direction to view the world \ 
Right Click: Pan Movement \
Middle(Scroll Button): Zoom in or Zoom out. \
10. Shaders: \
Use the shading effect of the vignette. \
11. Design Your Own Car: \
a. Change the size of the body. \
b. Choose the color of the car from color picker \
c. Position the car \
d. Position the each body part \
e. Rotate The car on either axis \
f. Translate either the car as one object or each part of the object \
12. Reset: \
Reset to the default settings \


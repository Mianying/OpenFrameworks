#version 150

out vec4 outputColor;

void main()
{
    // gl_FragCoord contains the window relative coordinate for the fragment.
    // we use gl_FragCoord.x position to control the red color value.
    // we use gl_FragCoord.y position to control the green color value.
    // please note that all r, g, b, a values are between 0 and 1.
    
    float x = 900.0;
    float y = 350.0;
    
    float r = gl_FragCoord.x / x/2;
	float g = gl_FragCoord.y / y;
	float b = 1.0;
	float a = 1.0;
	outputColor = vec4(r, g, b, a);
}

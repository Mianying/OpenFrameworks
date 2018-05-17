#version 150

out vec4 outputColor;
uniform float finallol;
uniform float finallol2;
uniform float finallol4;
uniform float finallol5;
uniform vec2 finallol3;

void main()
{

    float x = 900.0;
    float y = 350.0;
    float r = finallol2 / finallol;
    float g = gl_FragCoord.y / finallol3.y;
    float b = gl_FragCoord.x /finallol3.y;
    float a = finallol3.y / finallol;
	outputColor = vec4(r, g, b, a);
}

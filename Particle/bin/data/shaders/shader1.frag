#version 150

out vec4 outputColor;
uniform float finallol;
uniform float finallol2;
uniform float finallol4;
uniform float finallol5;
uniform vec2 finallol3;
uniform float finallol6;

void main()
{
    float r = finallol6 / finallol;
    float g = gl_FragCoord.y / finallol3.y;
    float b = gl_FragCoord.x /finallol3.y;
    float a = finallol3.y / finallol6;
	outputColor = vec4(r, g, b, a);
}

#pragma once

#include "ofMain.h"

class Particle {
public:
    Particle();
    void setup();
    void update(float dt);
    void draw();
    
 
    ofPoint pos;
    ofPoint vel;
    float time;
    float lifeTime;
    ofColor color;
    bool live;
    
    ofShader shader;
   

};


class Params {
public:
    void setup();
    ofPoint eCenter;
    float eRad;
    float velRad;
    float lifeTime;
    float rotate;
    float force;
    float spinning;
    float friction;

    
    ofSoundPlayer beat;
    float * fftSmooth;
    int bands;
    
    void keyPressed(int key);
};


class ofApp : public ofBaseApp{
    
public:
    void setup();
    void update();
    void draw();
    // create something new
    vector<Particle> p;
    float bornRate;
    float bornCount;
    ofFbo fbo;
    float history;
    float time0;            
    
    
   

};

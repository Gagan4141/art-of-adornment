"use client";

import {useEffect,useRef} from "react";
import * as THREE from "three";

export default function AdornmentField(){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const host=ref.current;
    if(!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(45,1,.1,100);
    camera.position.z=7;
    const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:"high-performance"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));
    renderer.setClearColor(0,0);
    host.appendChild(renderer.domElement);

    const count=1100;
    const positions=new Float32Array(count*3);
    const seeds=new Float32Array(count);
    for(let i=0;i<count;i++){
      const a=Math.random()*Math.PI*2;
      const r=2.0+Math.random()*2.5;
      positions[i*3]=Math.cos(a)*r;
      positions[i*3+1]=Math.sin(a)*r*.72;
      positions[i*3+2]=(Math.random()-.5)*1.8;
      seeds[i]=Math.random();
    }
    const geometry=new THREE.BufferGeometry();
    geometry.setAttribute("position",new THREE.BufferAttribute(positions,3));
    geometry.setAttribute("aSeed",new THREE.BufferAttribute(seeds,1));
    const material=new THREE.ShaderMaterial({
      transparent:true,depthWrite:false,
      uniforms:{uTime:{value:0},uPointer:{value:new THREE.Vector2()}},
      vertexShader:`
        attribute float aSeed;
        uniform float uTime;
        uniform vec2 uPointer;
        varying float vAlpha;
        void main(){
          vec3 p=position;
          float wave=sin(uTime*.35+aSeed*18.0+p.x)*.12;
          p.z+=wave;
          p.x+=uPointer.x*(0.22+aSeed*.35);
          p.y+=uPointer.y*(0.16+aSeed*.3);
          vec4 mv=modelViewMatrix*vec4(p,1.0);
          gl_PointSize=(1.4+aSeed*2.6)*(8.0/-mv.z);
          gl_Position=projectionMatrix*mv;
          vAlpha=.16+aSeed*.45;
        }
      `,
      fragmentShader:`
        varying float vAlpha;
        void main(){
          float d=distance(gl_PointCoord,vec2(.5));
          if(d>.5) discard;
          float a=smoothstep(.5,0.,d)*vAlpha;
          gl_FragColor=vec4(.55,.36,.16,a);
        }
      `
    });
    const points=new THREE.Points(geometry,material);
    scene.add(points);

    const resize=()=>{const w=host.clientWidth,h=host.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)};
    const move=(e:PointerEvent)=>{const r=host.getBoundingClientRect();material.uniforms.uPointer.value.set((e.clientX-r.left)/r.width-.5,-((e.clientY-r.top)/r.height-.5))};
    resize();window.addEventListener("resize",resize);host.addEventListener("pointermove",move);

    let raf=0;const clock=new THREE.Clock();
    const frame=()=>{material.uniforms.uTime.value=clock.getElapsedTime();points.rotation.z+=.00025;renderer.render(scene,camera);raf=requestAnimationFrame(frame)};
    frame();

    return()=>{cancelAnimationFrame(raf);window.removeEventListener("resize",resize);host.removeEventListener("pointermove",move);geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove()};
  },[]);
  return <div ref={ref} className="webgl-field" aria-hidden="true"/>;
}

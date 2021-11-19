import { Vector2, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Path2, Curve3 } from "@babylonjs/core/Maths/math.path";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { CSG } from "@babylonjs/core/Meshes/csg";
import { PolygonMeshBuilder } from "@babylonjs/core/Meshes/polygonMesh";
import { SolidParticleSystem } from "@babylonjs/core/Particles/solidParticleSystem";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { scene } from "./scene";

import { BABYLON } from "@babylonjs/core/Legacy/legacy"; //ERROR:export 'BABYLON' (imported as 'BABYLON') was not found in '@babylonjs/core/Legacy/legacy'
//import {} from "@babylonjs/core/Legacy/legacy";
/*BABYLON = [
    Vector2,
    Vector3,
    Path2,
    Curve3,
    SolidParticleSystem,
    PolygonMeshBuilder,
    CSG,
    StandardMaterial,
    Mesh,
];*/

//import { MeshWriter } from "meshwriter"; //error: is not a funtion
//import {} from "meshwriter";
import * as MeshWriter from "meshwriter";
let Writer = MeshWriter(scene, { scale: 0.25 });
let textMesh = new Writer("Hello World", {
    //"font-family": "Arial",
    "letter-height": 30,
    "letter-thickness": 12,
    //color: "#1C3870", //not working
    anchor: "center",
    position: {
        x: 0,
        y: 10,
        z: 100, //not working
    },
});
let newMesh = textMesh.getSPS();
newMesh.mesh.rotation = new Vector3(-1.57, 0, 0);
newMesh.mesh.position = new Vector3(0, 0, 100);
textMesh.color("#fcba03"); // not working*/

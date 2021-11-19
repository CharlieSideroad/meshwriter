import {
    ArcRotateCamera,
    Engine,
    HemisphericLight,
    Scene,
    StandardMaterial,
    Vector3,
    Texture,
    MeshBuilder,
    Mesh,
    FreeCamera,
} from "@babylonjs/core";
import {} from "@babylonjs/gui";
import {} from "@babylonjs/inspector";
import {} from "@babylonjs/loaders";
import {} from "@babylonjs/materials";
import {} from "@babylonjs/post-processes";
import {} from "@babylonjs/procedural-textures";
import {} from "@babylonjs/serializers";

const canvas = document.getElementById("renderCanvas");
export const engine = new Engine(canvas);
export const scene = new Scene(engine);

const camera = new ArcRotateCamera(
    "",
    -Math.PI / 2,
    Math.PI / 2,
    10,
    new Vector3(0, 0, 0)
);
camera.attachControl(canvas, false);
//camera.detachControl();

const light = new HemisphericLight("light", new Vector3(1, 1, 0));
light.intensity = 5;

const material = new StandardMaterial("stormSky", scene);
material.diffuseTexture = new Texture(
    "https://i.ibb.co/mznH0th/Backgound1.png"
);
material.diffuseTexture.hasAlpha = true;
material.backFaceCulling = true;
material.alpha = 1;

const sky = MeshBuilder.CreatePlane(
    "",
    {
        //size = 0,
        width: 3650,
        height: 1850,
        //sideOrientation: Mesh.FRONTSIDE,
    },
    scene
);
sky.rotation = new Vector3(0.31, 0, 0);
sky.position = new Vector3(0, -650, 2020);
sky.material = material;

engine.runRenderLoop((input) => scene.render());
//window.addEventListener("resize", () => engine.resize());

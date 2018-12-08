// Compiled by ClojureScript 1.10.238 {}
goog.provide('cambio_360.core');
goog.require('cljs.core');
goog.require('cljsjs.three');
goog.require('cljsjs.three_examples.controls.OrbitControls');
goog.require('cljsjs.three_examples.controls.DeviceOrientationControls');
goog.require('cljsjs.three_examples.controls.PointerLockControls');
goog.require('cljsjs.three_examples.effects.StereoEffect');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof cambio_360.core.app_state !== 'undefined'){
} else {
cambio_360.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-type","render-type",-426326747),null], null));
}
cambio_360.core.scene = (new THREE.Scene());
cambio_360.core.camera = (new THREE.PerspectiveCamera((75),(window.innerWidth / window.innerHeight),(1),(1000)));
cambio_360.core.renderer = (new THREE.WebGLRenderer());
cambio_360.core.effect = (new THREE.StereoEffect(cambio_360.core.renderer));
cambio_360.core.set_effect_size = (function cambio_360$core$set_effect_size(){
return cambio_360.core.effect.setSize(window.innerWidth,window.innerHeight);
});
cambio_360.core.video = document.createElement("video");
cambio_360.core.set_video = (function cambio_360$core$set_video(){
var G__22439_22440 = cambio_360.core.video;
G__22439_22440.width = window.innerWidth;

G__22439_22440.height = window.innerHeight;

G__22439_22440.crossOrigin = "anonymous";

G__22439_22440.src = "/video/London-360.mp4";


cambio_360.core.video.load();

cambio_360.core.video.setAttribute("webkit-playsinline","true");

return cambio_360.core.video.setAttribute("playsinline","true");
});
cambio_360.core.set_renderer = (function cambio_360$core$set_renderer(){
cambio_360.core.renderer.setSize(window.innerWidth,window.innerHeight);

return document.body.appendChild(cambio_360.core.renderer.domElement);
});
cambio_360.core.set_render_type = (function cambio_360$core$set_render_type(type){
return cljs.core.reset_BANG_.call(null,cambio_360.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-type","render-type",-426326747),type], null));
});
cambio_360.core.controls = (new THREE.DeviceOrientationControls(cambio_360.core.camera));
cambio_360.core.set_camera_position = (function cambio_360$core$set_camera_position(){
return (cambio_360.core.camera["position"]["z"] = (200));
});
cambio_360.core.geometry = (new THREE.SphereBufferGeometry((500),(60),(40)));
cambio_360.core.set_geometric_scale = (function cambio_360$core$set_geometric_scale(){
return cambio_360.core.geometry.scale((-1),(1),(1));
});
cambio_360.core.texture = (new THREE.VideoTexture(cambio_360.core.video));
cambio_360.core.set_texture_filters = (function cambio_360$core$set_texture_filters(){
var G__22441 = cambio_360.core.texture;
G__22441.minFilter = THREE.LinearFilter;

G__22441.format = THREE.RGBFormat;

return G__22441;
});
cambio_360.core.material = (new THREE.MeshBasicMaterial(({"map": cambio_360.core.texture})));
cambio_360.core.mesh = (new THREE.Mesh(cambio_360.core.geometry,cambio_360.core.material));
cambio_360.core.set_mesh_rotation = (function cambio_360$core$set_mesh_rotation(){
return cambio_360.core.mesh.rotation.y = (- (Math.PI / (2)));
});
cambio_360.core.animate = (function cambio_360$core$animate(){
window.requestAnimationFrame(cambio_360.core.animate);

cambio_360.core.controls.update();

return cljs.core.deref.call(null,cambio_360.core.app_state).call(null,new cljs.core.Keyword(null,"render-type","render-type",-426326747)).render(cambio_360.core.scene,cambio_360.core.camera);
});
cambio_360.core.get_elem = (function cambio_360$core$get_elem(id){
return document.getElementById(id);
});
cambio_360.core.setup_buttons = (function cambio_360$core$setup_buttons(){
var vr_btn = cambio_360.core.get_elem.call(null,"vr-btn");
return vr_btn.addEventListener.call(null,"click",((function (vr_btn){
return (function (){
cambio_360.core.set_render_type.call(null,cambio_360.core.effect);

return cambio_360.core.video.play();
});})(vr_btn))
,false);
});
cambio_360.core.main = (function cambio_360$core$main(){
console.log("360 Video/VR Demo!");

cambio_360.core.set_video.call(null);

cambio_360.core.set_renderer.call(null);

cambio_360.core.set_render_type.call(null,cambio_360.core.renderer);

cambio_360.core.set_effect_size.call(null);

cambio_360.core.set_camera_position.call(null);

cambio_360.core.set_geometric_scale.call(null);

cambio_360.core.set_texture_filters.call(null);

cambio_360.core.set_mesh_rotation.call(null);

cambio_360.core.setup_buttons.call(null);

cambio_360.core.scene.add(cambio_360.core.mesh);

return cambio_360.core.animate.call(null);
});
window.onload = cambio_360.core.main;

//# sourceMappingURL=core.js.map?rel=1544241694548

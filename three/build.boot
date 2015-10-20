(set-env!
 :resource-paths #{"resources"}
 :dependencies '[[adzerk/bootlaces   "0.1.10" :scope "test"]
                 [cljsjs/boot-cljsjs "0.5.0"  :scope "test"]])

(require '[adzerk.bootlaces :refer :all]
         '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +version+ "0.0.72-css3d")
(bootlaces! +version+)

(task-options!
 pom {:project     'cljsjs/three
      :version     +version+
      :description "JavaScript 3D library"
      :url         "http://threejs.org/"
      :scm         {:url "https://github.com/sonwh98/three.js"}
      :license     {"MIT" "http://opensource.org/licenses/MIT"}})

(deftask package []
  (comp
   (download  :url      "https://raw.githubusercontent.com/sonwh98/three.js/r72-css3d/build/three.js"
              :checksum "7046d21ba5708ee8c19bff61db8409be"
              :unzip    false)
   (download  :url      "https://raw.githubusercontent.com/sonwh98/three.js/r72-css3d/build/three.min.js"
              :checksum "917960aa942b17f3a3aaefd9e0ca30cb"
              :unzip    false)
              
   (sift      :move     {#"^three.js"
                         "cljsjs/three/development/three.inc.js"
                         #"^three.min.js"
                         "cljsjs/three/production/three.min.inc.js"})
   (sift      :include  #{#"^cljsjs"})
   (deps-cljs :name     "cljsjs.three")))

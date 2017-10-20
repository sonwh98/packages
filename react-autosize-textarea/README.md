# cljsjs/react-autosize-textarea

[](dependency)
```clojure
[cljsjs/react-autosize-textarea "0.4.8-0"] ;; latest release
```
[](/dependency)

This jar comes with `deps.cljs` as used by the [Foreign Libs][flibs] feature
of the ClojureScript compiler. After adding the above dependency to your project
you can require the packaged library like so:

```clojure
(ns application.core
  (:require cljsjs.react-autosize-textarea))
```

To use the textarea component, create a component factory:

```clojure

(def textarea (.createFactory js/React (.-default js/TextareaAutosize)))

```

[flibs]: https://github.com/clojure/clojurescript/wiki/Packaging-Foreign-Dependencies

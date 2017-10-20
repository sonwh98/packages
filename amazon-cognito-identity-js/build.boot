(set-env!
  :resource-paths #{"resources"}
  :dependencies '[[cljsjs/boot-cljsjs "0.7.1" :scope "test"]])

(require '[cljsjs.boot-cljsjs.packaging :refer :all])

(def +lib-version+ "1.19.0")
(def +version+ (str +lib-version+ "-0"))

(task-options!
  pom  {:project     'cljsjs/amazon-cognito-identity-js
        :version     +version+
        :description "Amazon Cognito Identity SDK"
        :url         "https://github.com/aws/amazon-cognito-identity-js"
        :license     {"ASL" "https://aws.amazon.com/asl/"}
        :scm         {:url "https://github.com/cljsjs/packages"}})

;; These help to generate the file locations for sift
(defn dist-file [file] (re-pattern (str "^amazon-cognito-identity-js-" +lib-version+ "/dist/" file "$")))
(def out-folder "cljsjs/amazon-cognito-identity-js/")
(defn dev-file [file] (str out-folder "development/" file))
(defn prod-file [file] (str out-folder "production/" file))

(deftask package []
  (comp
   (download :url (format "https://github.com/aws/amazon-cognito-identity-js/archive/v%s.zip" +lib-version+)
             :checksum "8515F5E1CEB6AEF8B3674675DFE4BF42"
             :unzip true)

   (sift :move {(dist-file "aws-cognito-sdk.js")
                (dev-file "aws-cognito-sdk.inc.js")

                (dist-file "amazon-cognito-identity.js")
                (dev-file "amazon-cognito-identity-js.inc.js")

                (dist-file "aws-cognito-sdk.min.js")
                (prod-file "aws-cognito-sdk.inc.js")

                (dist-file "amazon-cognito-identity.min.js")
                (prod-file "amazon-cognito-identity-js.inc.js")})

   (sift :include #{#"^cljsjs" #"^deps\.cljs"})

   (pom)
   (jar)))

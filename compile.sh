closure-library/closure/bin/build/closurebuilder.py \
  --root=closure-library/ \
  --root=test/flash/geom/ \
  --root=lib/ \
  --namespace="flash.geom.Point" \
  --output_mode=compiled \
  --compiler_jar=compiler.jar \
  > test/flash/geom/point.compiled.js

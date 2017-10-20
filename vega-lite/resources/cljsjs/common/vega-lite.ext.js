/**********************************************************************
 * Extern for vl
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var vl = {
  "aggregate": {
    "AGGREGATE_OPS": {},
    "AGGREGATE_OP_INDEX": {
      "argmax": {},
      "argmin": {},
      "average": {},
      "ci0": {},
      "ci1": {},
      "count": {},
      "distinct": {},
      "max": {},
      "mean": {},
      "median": {},
      "min": {},
      "missing": {},
      "q1": {},
      "q3": {},
      "stdev": {},
      "stdevp": {},
      "sum": {},
      "valid": {},
      "values": {},
      "variance": {},
      "variancep": {}
    },
    "COUNTING_OPS": {},
    "SHARED_DOMAIN_OPS": {},
    "SHARED_DOMAIN_OP_INDEX": {
      "average": {},
      "max": {},
      "mean": {},
      "median": {},
      "min": {},
      "q1": {},
      "q3": {}
    },
    "SUM_OPS": {},
    "isCountingAggregateOp": function () {}
  },
  "axis": {
    "AXIS_PROPERTIES": {},
    "AXIS_PROPERTY_TYPE": {
      "grid": {},
      "labelOverlap": {},
      "offset": {},
      "title": {}
    },
    "VG_AXIS_PROPERTIES": {}
  },
  "bin": {
    "autoMaxBins": function () {},
    "binToString": function () {}
  },
  "channel": {
    "CHANNELS": {},
    "COLOR": {},
    "COLUMN": {},
    "Channel": {
      "COLOR": {},
      "COLUMN": {},
      "DETAIL": {},
      "OPACITY": {},
      "ORDER": {},
      "ROW": {},
      "SHAPE": {},
      "SIZE": {},
      "TEXT": {},
      "TOOLTIP": {},
      "X": {},
      "X2": {},
      "Y": {},
      "Y2": {}
    },
    "DETAIL": {},
    "LEVEL_OF_DETAIL_CHANNELS": {},
    "NONSPATIAL_CHANNELS": {},
    "NONSPATIAL_SCALE_CHANNELS": {},
    "OPACITY": {},
    "ORDER": {},
    "ROW": {},
    "SCALE_CHANNELS": {},
    "SHAPE": {},
    "SINGLE_DEF_CHANNELS": {},
    "SIZE": {},
    "SPATIAL_SCALE_CHANNELS": {},
    "STACK_BY_CHANNELS": {},
    "TEXT": {},
    "TOOLTIP": {},
    "UNIT_CHANNELS": {},
    "X": {},
    "X2": {},
    "Y": {},
    "Y2": {},
    "getSupportedMark": function () {},
    "hasScale": function () {},
    "isChannel": function () {},
    "isScaleChannel": function () {},
    "rangeType": function () {},
    "supportMark": function () {},
    "supportScaleType": function () {}
  },
  "compile": function () {},
  "compositeMark": {
    "COMPOSITE_MARK_STYLES": {},
    "VL_ONLY_COMPOSITE_MARK_SPECIFIC_CONFIG_PROPERTY_INDEX": {
      "box": {}
    },
    "add": function () {},
    "normalize": function () {},
    "remove": function () {}
  },
  "config": {
    "defaultCellConfig": {
      "height": {},
      "width": {}
    },
    "defaultConfig": {
      "area": {},
      "axis": {
        "domainColor": {},
        "tickColor": {}
      },
      "axisBand": {},
      "axisBottom": {},
      "axisLeft": {},
      "axisRight": {},
      "axisTop": {},
      "axisX": {},
      "axisY": {
        "minExtent": {}
      },
      "bar": {
        "binSpacing": {},
        "continuousBandSize": {}
      },
      "box": {
        "size": {}
      },
      "boxMid": {
        "color": {}
      },
      "boxWhisker": {},
      "cell": {
        "height": {},
        "width": {}
      },
      "circle": {},
      "countTitle": {},
      "invalidValues": {},
      "legend": {},
      "line": {},
      "mark": {
        "color": {}
      },
      "padding": {},
      "point": {},
      "rect": {},
      "rule": {
        "color": {}
      },
      "scale": {
        "bandPaddingInner": {},
        "facetSpacing": {},
        "maxFontSize": {},
        "maxOpacity": {},
        "maxStrokeWidth": {},
        "minFontSize": {},
        "minOpacity": {},
        "minSize": {},
        "minStrokeWidth": {},
        "pointPadding": {},
        "rangeStep": {},
        "round": {},
        "shapes": {},
        "textXRangeStep": {}
      },
      "selection": {
        "interval": {
          "encodings": {},
          "mark": {
            "fill": {},
            "fillOpacity": {},
            "stroke": {}
          },
          "on": {},
          "resolve": {},
          "translate": {},
          "zoom": {}
        },
        "multi": {
          "fields": {},
          "on": {},
          "resolve": {},
          "toggle": {}
        },
        "single": {
          "fields": {},
          "on": {},
          "resolve": {}
        }
      },
      "square": {},
      "style": {},
      "text": {
        "color": {}
      },
      "tick": {
        "thickness": {}
      },
      "timeFormat": {},
      "title": {}
    },
    "initConfig": function () {},
    "stripAndRedirectConfig": function () {}
  },
  "data": {
    "MAIN": {},
    "RAW": {},
    "isInlineData": function () {},
    "isNamedData": function () {},
    "isUrlData": function () {}
  },
  "datetime": {
    "DAYS": {},
    "MONTHS": {},
    "SHORT_DAYS": {},
    "SHORT_MONTHS": {},
    "dateTimeExpr": function () {},
    "isDateTime": function () {}
  },
  "encoding": {
    "channelHasField": function () {},
    "fieldDefs": function () {},
    "forEach": function () {},
    "isAggregate": function () {},
    "isRanged": function () {},
    "normalizeEncoding": function () {},
    "reduce": function () {}
  },
  "facet": {},
  "fieldDef": {
    "channelCompatibility": function () {},
    "defaultType": function () {},
    "field": function () {},
    "getFieldDef": function () {},
    "hasConditionFieldDef": function () {},
    "isConditionalDef": function () {},
    "isContinuous": function () {},
    "isCount": function () {},
    "isDiscrete": function () {},
    "isFieldDef": function () {},
    "isRepeatRef": function () {},
    "isScaleFieldDef": function () {},
    "isValueDef": function () {},
    "normalize": function () {},
    "normalizeBin": function () {},
    "normalizeFieldDef": function () {},
    "title": function () {}
  },
  "legend": {
    "LEGEND_PROPERTIES": {},
    "VG_LEGEND_PROPERTIES": {},
    "defaultLegendConfig": {}
  },
  "mark": {
    "AREA": {},
    "BAR": {},
    "CIRCLE": {},
    "FILL_CONFIG": {},
    "FILL_STROKE_CONFIG": {},
    "LINE": {},
    "Mark": {
      "AREA": {},
      "BAR": {},
      "CIRCLE": {},
      "LINE": {},
      "POINT": {},
      "RECT": {},
      "RULE": {},
      "SQUARE": {},
      "TEXT": {},
      "TICK": {}
    },
    "POINT": {},
    "PRIMITIVE_MARKS": {},
    "RECT": {},
    "RULE": {},
    "SQUARE": {},
    "STROKE_CONFIG": {},
    "TEXT": {},
    "TICK": {},
    "VL_ONLY_MARK_CONFIG_PROPERTIES": {},
    "VL_ONLY_MARK_SPECIFIC_CONFIG_PROPERTY_INDEX": {
      "bar": {},
      "text": {},
      "tick": {}
    },
    "defaultBarConfig": {
      "binSpacing": {},
      "continuousBandSize": {}
    },
    "defaultMarkConfig": {
      "color": {}
    },
    "defaultTickConfig": {
      "thickness": {}
    },
    "isMarkDef": function () {},
    "isPrimitiveMark": function () {}
  },
  "scale": {
    "CONTINUOUS_DOMAIN_SCALES": {},
    "CONTINUOUS_TO_CONTINUOUS_SCALES": {},
    "DISCRETE_DOMAIN_SCALES": {},
    "NON_TYPE_DOMAIN_RANGE_VEGA_SCALE_PROPERTIES": {},
    "SCALE_PROPERTIES": {},
    "SCALE_TYPES": {},
    "ScaleType": {
      "BAND": {},
      "BIN_LINEAR": {},
      "BIN_ORDINAL": {},
      "LINEAR": {},
      "LOG": {},
      "ORDINAL": {},
      "POINT": {},
      "POW": {},
      "QUANTILE": {},
      "QUANTIZE": {},
      "SEQUENTIAL": {},
      "SQRT": {},
      "THRESHOLD": {},
      "TIME": {},
      "UTC": {}
    },
    "TIME_SCALE_TYPES": {},
    "channelScalePropertyIncompatability": function () {},
    "defaultScaleConfig": {
      "bandPaddingInner": {},
      "facetSpacing": {},
      "maxFontSize": {},
      "maxOpacity": {},
      "maxStrokeWidth": {},
      "minFontSize": {},
      "minOpacity": {},
      "minSize": {},
      "minStrokeWidth": {},
      "pointPadding": {},
      "rangeStep": {},
      "round": {},
      "shapes": {},
      "textXRangeStep": {}
    },
    "getScaleCategory": function () {},
    "hasContinuousDomain": function () {},
    "hasDiscreteDomain": function () {},
    "isBinScale": function () {},
    "isContinuousToContinuous": function () {},
    "isExtendedScheme": function () {},
    "isSelectionDomain": function () {},
    "scaleCompatible": function () {},
    "scaleTypePrecedence": function () {},
    "scaleTypeSupportProperty": function () {}
  },
  "sort": {
    "isSortField": function () {}
  },
  "spec": {
    "fieldDefs": function () {},
    "isConcatSpec": function () {},
    "isFacetSpec": function () {},
    "isHConcatSpec": function () {},
    "isLayerSpec": function () {},
    "isRepeatSpec": function () {},
    "isStacked": function () {},
    "isUnitSpec": function () {},
    "isVConcatSpec": function () {},
    "normalize": function () {}
  },
  "stack": {
    "STACKABLE_MARKS": {},
    "STACK_BY_DEFAULT_MARKS": {},
    "stack": function () {}
  },
  "timeUnit": {
    "MULTI_TIMEUNITS": {},
    "SINGLE_TIMEUNITS": {},
    "TIMEUNITS": {},
    "TimeUnit": {
      "DATE": {},
      "DAY": {},
      "HOURS": {},
      "HOURSMINUTES": {},
      "HOURSMINUTESSECONDS": {},
      "MILLISECONDS": {},
      "MINUTES": {},
      "MINUTESSECONDS": {},
      "MONTH": {},
      "MONTHDATE": {},
      "QUARTER": {},
      "QUARTERMONTH": {},
      "SECONDS": {},
      "SECONDSMILLISECONDS": {},
      "UTCDATE": {},
      "UTCDAY": {},
      "UTCHOURS": {},
      "UTCHOURSMINUTES": {},
      "UTCHOURSMINUTESSECONDS": {},
      "UTCMILLISECONDS": {},
      "UTCMINUTES": {},
      "UTCMINUTESSECONDS": {},
      "UTCMONTH": {},
      "UTCMONTHDATE": {},
      "UTCQUARTER": {},
      "UTCQUARTERMONTH": {},
      "UTCSECONDS": {},
      "UTCSECONDSMILLISECONDS": {},
      "UTCYEAR": {},
      "UTCYEARMONTH": {},
      "UTCYEARMONTHDATE": {},
      "UTCYEARMONTHDATEHOURS": {},
      "UTCYEARMONTHDATEHOURSMINUTES": {},
      "UTCYEARMONTHDATEHOURSMINUTESSECONDS": {},
      "UTCYEARQUARTER": {},
      "UTCYEARQUARTERMONTH": {},
      "YEAR": {},
      "YEARMONTH": {},
      "YEARMONTHDATE": {},
      "YEARMONTHDATEHOURS": {},
      "YEARMONTHDATEHOURSMINUTES": {},
      "YEARMONTHDATEHOURSMINUTESSECONDS": {},
      "YEARQUARTER": {},
      "YEARQUARTERMONTH": {}
    },
    "containsTimeUnit": function () {},
    "convert": function () {},
    "fieldExpr": function () {},
    "formatExpression": function () {},
    "isDiscreteByDefault": function () {},
    "isMultiTimeUnit": function () {},
    "isSingleTimeUnit": function () {},
    "smallestUnit": function () {}
  },
  "transform": {
    "isBin": function () {},
    "isCalculate": function () {},
    "isFilter": function () {},
    "isLookup": function () {},
    "isSummarize": function () {},
    "isTimeUnit": function () {}
  },
  "type": {
    "NOMINAL": {},
    "ORDINAL": {},
    "QUANTITATIVE": {},
    "TEMPORAL": {},
    "Type": {
      "NOMINAL": {},
      "ORDINAL": {},
      "QUANTITATIVE": {},
      "TEMPORAL": {}
    },
    "getFullName": function () {}
  },
  "util": {
    "contains": function () {},
    "differ": function () {},
    "differArray": function () {},
    "duplicate": function () {},
    "every": function () {},
    "extend": function () {},
    "flatten": function () {},
    "hasIntersection": function () {},
    "hash": function () {},
    "isArray": function () {},
    "isBoolean": function () {},
    "isNumber": function () {},
    "isObject": function () {},
    "isString": function () {},
    "keys": function () {},
    "logicalExpr": function () {},
    "mergeDeep": function () {},
    "omit": function () {},
    "pick": function () {},
    "some": function () {},
    "stringValue": function () {},
    "toSet": function () {},
    "truncate": function () {},
    "union": function () {},
    "unique": function () {},
    "vals": function () {},
    "varName": function () {},
    "without": function () {}
  },
  "validate": {
    "DEFAULT_REQUIRED_CHANNEL_MAP": {
      "area": {},
      "line": {},
      "text": {}
    },
    "DEFAULT_SUPPORTED_CHANNEL_TYPE": {
      "area": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "x": {},
        "y": {}
      },
      "bar": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "size": {},
        "x": {},
        "y": {}
      },
      "circle": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "size": {},
        "x": {},
        "y": {}
      },
      "line": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "x": {},
        "y": {}
      },
      "point": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "shape": {},
        "size": {},
        "x": {},
        "y": {}
      },
      "square": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "size": {},
        "x": {},
        "y": {}
      },
      "text": {
        "color": {},
        "column": {},
        "row": {},
        "size": {},
        "text": {}
      },
      "tick": {
        "color": {},
        "column": {},
        "detail": {},
        "row": {},
        "x": {},
        "y": {}
      }
    },
    "getEncodingMappingError": function () {}
  },
  "version": {}
};
/**********************************************************************
 * End Generated Extern for vl
/**********************************************************************/

/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Result_itinerary$ref: FragmentReference;
declare export opaque type Result_itinerary$fragmentType: Result_itinerary$ref;
export type Result_itinerary = {|
  +bookingURL: ?string,
  +sectors: ?$ReadOnlyArray<?{|
    +duration: ?number,
    +departure: ?{|
      +time: ?{|
        +utc: ?number
      |}
    |},
    +arrival: ?{|
      +time: ?{|
        +utc: ?number
      |}
    |},
    +segments: ?$ReadOnlyArray<?{|
      +carrier: ?{|
        +code: ?string
      |}
    |}>,
  |}>,
  +$refType: Result_itinerary$ref,
|};
export type Result_itinerary$data = Result_itinerary;
export type Result_itinerary$key = {
  +$data?: Result_itinerary$data,
  +$fragmentRefs: Result_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "time",
    "storageKey": null,
    "args": null,
    "concreteType": "DateType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "utc",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "Result_itinerary",
  "type": "Itinerary",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bookingURL",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sectors",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "duration",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": (v0/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": (v0/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "segments",
          "storageKey": null,
          "args": null,
          "concreteType": "Segment",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "carrier",
              "storageKey": null,
              "args": null,
              "concreteType": "Carrier",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "code",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3c53868ec67c46712042c0109b96571';
module.exports = node;

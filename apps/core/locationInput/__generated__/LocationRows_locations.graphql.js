/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocationRows_locations$ref: FragmentReference;
declare export opaque type LocationRows_locations$fragmentType: LocationRows_locations$ref;
export type LocationRows_locations = $ReadOnlyArray<{|
  +id: string,
  +name: ?string,
  +city: ?{|
    +name: ?string
  |},
  +country: ?{|
    +code: ?string
  |},
  +$refType: LocationRows_locations$ref,
|}>;
export type LocationRows_locations$data = LocationRows_locations;
export type LocationRows_locations$key = {
  +$data?: LocationRows_locations$data,
  +$fragmentRefs: LocationRows_locations$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "LocationRows_locations",
  "type": "Location",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "city",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "country",
      "storageKey": null,
      "args": null,
      "concreteType": "LocationArea",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '7e383e2d94739a4a5b9ce15f47d07c03';
module.exports = node;

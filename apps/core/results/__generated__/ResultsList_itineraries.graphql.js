/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Result_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultsList_itineraries$ref: FragmentReference;
declare export opaque type ResultsList_itineraries$fragmentType: ResultsList_itineraries$ref;
export type ResultsList_itineraries = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: Result_itinerary$ref,
  +$refType: ResultsList_itineraries$ref,
|}>;
export type ResultsList_itineraries$data = ResultsList_itineraries;
export type ResultsList_itineraries$key = {
  +$data?: ResultsList_itineraries$data,
  +$fragmentRefs: ResultsList_itineraries$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultsList_itineraries",
  "type": "Itinerary",
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
    {
      "kind": "FragmentSpread",
      "name": "Result_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '69364e919172eff3ec1badb0f0823ed6';
module.exports = node;

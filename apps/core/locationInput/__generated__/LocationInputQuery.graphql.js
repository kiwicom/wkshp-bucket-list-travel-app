/**
 * @flow
 * @relayHash 2f922abf6540abfdf907a2073a5c51a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LocationRows_locations$ref = any;
export type LocationsByTermInput = {|
  term: string,
  limit?: ?number,
|};
export type LocationInputQueryVariables = {|
  input: LocationsByTermInput
|};
export type LocationInputQueryResponse = {|
  +locations: ?$ReadOnlyArray<?{|
    +$fragmentRefs: LocationRows_locations$ref
  |}>
|};
export type LocationInputQuery = {|
  variables: LocationInputQueryVariables,
  response: LocationInputQueryResponse,
|};
*/


/*
query LocationInputQuery(
  $input: LocationsByTermInput!
) {
  locations: locationsByTerm(input: $input) {
    ...LocationRows_locations
    id
  }
}

fragment LocationRows_locations on Location {
  id
  name
  city {
    name
    id
  }
  country {
    code
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LocationsByTermInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationInputQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "locations",
        "name": "locationsByTerm",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LocationRows_locations",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationInputQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "locations",
        "name": "locationsByTerm",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Location",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "city",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationArea",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
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
              },
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationInputQuery",
    "id": null,
    "text": "query LocationInputQuery(\n  $input: LocationsByTermInput!\n) {\n  locations: locationsByTerm(input: $input) {\n    ...LocationRows_locations\n    id\n  }\n}\n\nfragment LocationRows_locations on Location {\n  id\n  name\n  city {\n    name\n    id\n  }\n  country {\n    code\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db94f85e76367aa1ca4af1e50bb01257';
module.exports = node;

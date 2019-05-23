/**
 * @flow
 * @relayHash 321b3fd8a866946e7cef7727f5fbf316
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultsList_itineraries$ref = any;
export type SearchParams = {|
  origin: string,
  destination?: ?string,
  outboundDate: DateRange,
  inboundDate?: ?DateRange,
  passengers?: ?PassengersInput,
  stopovers: $ReadOnlyArray<Stopover>,
|};
export type DateRange = {|
  start: string,
  end: string,
|};
export type PassengersInput = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
|};
export type Stopover = {|
  locations?: ?$ReadOnlyArray<?string>,
  nightsFrom?: ?number,
  nightsTo?: ?number,
|};
export type ResultsQueryVariables = {|
  input: SearchParams
|};
export type ResultsQueryResponse = {|
  +itineraries: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ResultsList_itineraries$ref
  |}>
|};
export type ResultsQuery = {|
  variables: ResultsQueryVariables,
  response: ResultsQueryResponse,
|};
*/


/*
query ResultsQuery(
  $input: SearchParams!
) {
  itineraries: search(input: $input) {
    ...ResultsList_itineraries
    id
  }
}

fragment ResultsList_itineraries on Itinerary {
  id
  ...Result_itinerary
}

fragment Result_itinerary on Itinerary {
  bookingURL
  sectors {
    duration
    departure {
      time {
        utc
      }
    }
    arrival {
      time {
        utc
      }
    }
    segments {
      carrier {
        code
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SearchParams!",
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
v3 = [
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResultsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "itineraries",
        "name": "search",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Itinerary",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ResultsList_itineraries",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "itineraries",
        "name": "search",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Itinerary",
        "plural": true,
        "selections": [
          (v2/*: any*/),
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
                "selections": (v3/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v3/*: any*/)
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
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ResultsQuery",
    "id": null,
    "text": "query ResultsQuery(\n  $input: SearchParams!\n) {\n  itineraries: search(input: $input) {\n    ...ResultsList_itineraries\n    id\n  }\n}\n\nfragment ResultsList_itineraries on Itinerary {\n  id\n  ...Result_itinerary\n}\n\nfragment Result_itinerary on Itinerary {\n  bookingURL\n  sectors {\n    duration\n    departure {\n      time {\n        utc\n      }\n    }\n    arrival {\n      time {\n        utc\n      }\n    }\n    segments {\n      carrier {\n        code\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9e53f8f55446bae52c9d74e3198393c1';
module.exports = node;

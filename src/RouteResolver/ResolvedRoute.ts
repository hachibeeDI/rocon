import type { Location } from "../LocationComposer/Location";
import type { RouteRecordType } from "../RoutesBuilder/RouteRecord";
import type { WildcardRouteRecord } from "../RoutesBuilder/RouteRecord/WildcardRouteRecord";

/**
 * Object that represents one resolved route.
 */
export type ResolvedRoute<ActionType, Match> = {
  // TODO: reconsider result type
  readonly route: // TODO: test: resolved should always have action
  | RouteRecordType<ActionType, Match, true>
    | WildcardRouteRecord<ActionType, Match, true>;
  readonly match: Match;
  readonly location: Location;
};

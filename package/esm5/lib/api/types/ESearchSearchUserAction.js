/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchUserParams } from './KalturaESearchUserParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ESearchSearchUserActionArgs() { }
/** @type {?} */
ESearchSearchUserActionArgs.prototype.searchParams;
/** @type {?|undefined} */
ESearchSearchUserActionArgs.prototype.pager;
/**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
ESearchSearchUserAction = /** @class */ (function (_super) {
    tslib_1.__extends(ESearchSearchUserAction, _super);
    function ESearchSearchUserAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaESearchResponse', responseConstructor: KalturaESearchResponse }) || this;
    }
    /**
     * @return {?}
     */
    ESearchSearchUserAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'elasticsearch_esearch' },
            action: { type: 'c', default: 'searchUser' },
            searchParams: { type: 'o', subTypeConstructor: KalturaESearchUserParams, subType: 'KalturaESearchUserParams' },
            pager: { type: 'o', subTypeConstructor: KalturaPager, subType: 'KalturaPager' }
        });
        return result;
    };
    return ESearchSearchUserAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eSearch' action 'searchUser'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export { ESearchSearchUserAction };
if (false) {
    /** @type {?} */
    ESearchSearchUserAction.prototype.searchParams;
    /** @type {?} */
    ESearchSearchUserAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVNlYXJjaFNlYXJjaFVzZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VTZWFyY2hTZWFyY2hVc2VyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFbEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFzQztJQUsvRSxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDO0tBQ2hJOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQy9DLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ2xILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsWUFBWSxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7U0FDMUUsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0E1Q0w7RUFxQjZDLGNBQWMsRUF3QjFELENBQUE7Ozs7Ozs7OztBQXhCRCxtQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoVXNlclBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFQYWdlciB9IGZyb20gJy4vS2FsdHVyYVBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVTZWFyY2hTZWFyY2hVc2VyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNlYXJjaFBhcmFtcyA6IEthbHR1cmFFU2VhcmNoVXNlclBhcmFtcztcblx0cGFnZXI/IDogS2FsdHVyYVBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZVNlYXJjaCcgYWN0aW9uICdzZWFyY2hVc2VyJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBFU2VhcmNoU2VhcmNoVXNlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFFU2VhcmNoUmVzcG9uc2U+IHtcblxuICAgIHNlYXJjaFBhcmFtcyA6IEthbHR1cmFFU2VhcmNoVXNlclBhcmFtcztcblx0cGFnZXIgOiBLYWx0dXJhUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRVNlYXJjaFNlYXJjaFVzZXJBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoUmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZWxhc3RpY3NlYXJjaF9lc2VhcmNoJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VhcmNoVXNlcicgfSxcblx0XHRcdFx0c2VhcmNoUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19
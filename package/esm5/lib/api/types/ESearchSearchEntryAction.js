/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaESearchResponse } from './KalturaESearchResponse';
import { KalturaESearchEntryParams } from './KalturaESearchEntryParams';
import { KalturaPager } from './KalturaPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ESearchSearchEntryActionArgs() { }
/** @type {?} */
ESearchSearchEntryActionArgs.prototype.searchParams;
/** @type {?|undefined} */
ESearchSearchEntryActionArgs.prototype.pager;
/**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
ESearchSearchEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(ESearchSearchEntryAction, _super);
    function ESearchSearchEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaESearchResponse', responseConstructor: KalturaESearchResponse }) || this;
    }
    /**
     * @return {?}
     */
    ESearchSearchEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'elasticsearch_esearch' },
            action: { type: 'c', default: 'searchEntry' },
            searchParams: { type: 'o', subTypeConstructor: KalturaESearchEntryParams, subType: 'KalturaESearchEntryParams' },
            pager: { type: 'o', subTypeConstructor: KalturaPager, subType: 'KalturaPager' }
        });
        return result;
    };
    return ESearchSearchEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'eSearch' action 'searchEntry'.
 *
 *
 *
 * Server response type:         KalturaESearchResponse
 * Server failure response type: KalturaAPIException
 */
export { ESearchSearchEntryAction };
if (false) {
    /** @type {?} */
    ESearchSearchEntryAction.prototype.searchParams;
    /** @type {?} */
    ESearchSearchEntryAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRVNlYXJjaFNlYXJjaEVudHJ5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FU2VhcmNoU2VhcmNoRW50cnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBOEMsb0RBQXNDO0lBS2hGLGtDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUM7S0FDaEk7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDcEgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxZQUFZLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtTQUMxRSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTVDTDtFQXFCOEMsY0FBYyxFQXdCM0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELG9DQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcyc7XG5pbXBvcnQgeyBLYWx0dXJhUGFnZXIgfSBmcm9tICcuL0thbHR1cmFQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBFU2VhcmNoU2VhcmNoRW50cnlBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2VhcmNoUGFyYW1zIDogS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcztcblx0cGFnZXI/IDogS2FsdHVyYVBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZVNlYXJjaCcgYWN0aW9uICdzZWFyY2hFbnRyeScuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUVTZWFyY2hSZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRVNlYXJjaFNlYXJjaEVudHJ5QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUVTZWFyY2hSZXNwb25zZT4ge1xuXG4gICAgc2VhcmNoUGFyYW1zIDogS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcztcblx0cGFnZXIgOiBLYWx0dXJhUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRVNlYXJjaFNlYXJjaEVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFJlc3BvbnNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoUmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2VsYXN0aWNzZWFyY2hfZXNlYXJjaCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlYXJjaEVudHJ5JyB9LFxuXHRcdFx0XHRzZWFyY2hQYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoRW50cnlQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcycgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaResponseProfileCacheRecalculateResults } from './KalturaResponseProfileCacheRecalculateResults';
import { KalturaResponseProfileCacheRecalculateOptions } from './KalturaResponseProfileCacheRecalculateOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileRecalculateActionArgs() { }
/** @type {?} */
ResponseProfileRecalculateActionArgs.prototype.options;
/**
 * Build request payload for service 'responseProfile' action 'recalculate'.
 *
 * Usage: Recalculate response profile cached objects
 *
 * Server response type:         KalturaResponseProfileCacheRecalculateResults
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'responseProfile' action 'recalculate'.
 *
 * Usage: Recalculate response profile cached objects
 *
 * Server response type:         KalturaResponseProfileCacheRecalculateResults
 * Server failure response type: KalturaAPIException
 */
ResponseProfileRecalculateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResponseProfileRecalculateAction, _super);
    function ResponseProfileRecalculateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaResponseProfileCacheRecalculateResults', responseConstructor: KalturaResponseProfileCacheRecalculateResults }) || this;
    }
    /**
     * @return {?}
     */
    ResponseProfileRecalculateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'recalculate' },
            options: { type: 'o', subTypeConstructor: KalturaResponseProfileCacheRecalculateOptions, subType: 'KalturaResponseProfileCacheRecalculateOptions' }
        });
        return result;
    };
    return ResponseProfileRecalculateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'responseProfile' action 'recalculate'.
 *
 * Usage: Recalculate response profile cached objects
 *
 * Server response type:         KalturaResponseProfileCacheRecalculateResults
 * Server failure response type: KalturaAPIException
 */
export { ResponseProfileRecalculateAction };
if (false) {
    /** @type {?} */
    ResponseProfileRecalculateAction.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlUmVjYWxjdWxhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1Jlc3BvbnNlUHJvZmlsZVJlY2FsY3VsYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFFaEgsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEgsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQXNELDREQUE2RDtJQUkvRywwQ0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywrQ0FBK0MsRUFBRSxtQkFBbUIsRUFBRyw2Q0FBNkMsRUFBRyxDQUFDO0tBQzlLOzs7O0lBRVMsdURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDakUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQ2hELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkNBQTZDLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1NBQzlJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBeENMO0VBbUJzRCxjQUFjLEVBc0JuRSxDQUFBOzs7Ozs7Ozs7QUF0QkQsNENBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlUmVzdWx0cyB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZU9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQcm9maWxlUmVjYWxjdWxhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgb3B0aW9ucyA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Jlc3BvbnNlUHJvZmlsZScgYWN0aW9uICdyZWNhbGN1bGF0ZScuXG4gKlxuICogVXNhZ2U6IFJlY2FsY3VsYXRlIHJlc3BvbnNlIHByb2ZpbGUgY2FjaGVkIG9iamVjdHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHNcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc3BvbnNlUHJvZmlsZVJlY2FsY3VsYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzPiB7XG5cbiAgICBvcHRpb25zIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFJlc3BvbnNlUHJvZmlsZVJlY2FsY3VsYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUmVzcG9uc2VQcm9maWxlQ2FjaGVSZWNhbGN1bGF0ZVJlc3VsdHMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVSZXN1bHRzICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZXNwb25zZXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZWNhbGN1bGF0ZScgfSxcblx0XHRcdFx0b3B0aW9ucyA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZUNhY2hlUmVjYWxjdWxhdGVPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGVDYWNoZVJlY2FsY3VsYXRlT3B0aW9ucycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaBaseSyndicationFeedListResponseArgs() { }
var KalturaBaseSyndicationFeedListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBaseSyndicationFeedListResponse, _super);
    function KalturaBaseSyndicationFeedListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBaseSyndicationFeedListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBaseSyndicationFeedListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaBaseSyndicationFeed, subType: 'KalturaBaseSyndicationFeed' }
        });
        return result;
    };
    return KalturaBaseSyndicationFeedListResponse;
}(KalturaListResponse));
export { KalturaBaseSyndicationFeedListResponse };
if (false) {
    /** @type {?} */
    KalturaBaseSyndicationFeedListResponse.prototype.objects;
}
typesMappingStorage['KalturaBaseSyndicationFeedListResponse'] = KalturaBaseSyndicationFeedListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRMaXN0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkTGlzdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFPckYsSUFBQTtJQUE0RCxrRUFBbUI7SUFJM0UsZ0RBQVksSUFBa0Q7UUFBOUQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1NBQ3pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aURBL0JMO0VBVTRELG1CQUFtQixFQXNCOUUsQ0FBQTtBQXRCRCxrREFzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0NBQXdDLENBQUMsR0FBRyxzQ0FBc0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZCB9IGZyb20gJy4vS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnO1xuaW1wb3J0IHsgS2FsdHVyYUxpc3RSZXNwb25zZSwgS2FsdHVyYUxpc3RSZXNwb25zZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXN0UmVzcG9uc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkTGlzdFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCYXNlU3luZGljYXRpb25GZWVkTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRMaXN0UmVzcG9uc2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmplY3RzID09PSAndW5kZWZpbmVkJykgdGhpcy5vYmplY3RzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWRMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQsIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VTeW5kaWNhdGlvbkZlZWQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXNlU3luZGljYXRpb25GZWVkTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhQmFzZVN5bmRpY2F0aW9uRmVlZExpc3RSZXNwb25zZTsiXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent } from './KalturaEntryScheduleEvent';
/**
 * @record
 */
export function KalturaRecordScheduleEventArgs() { }
var KalturaRecordScheduleEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaRecordScheduleEvent, _super);
    function KalturaRecordScheduleEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaRecordScheduleEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaRecordScheduleEvent' }
        });
        return result;
    };
    return KalturaRecordScheduleEvent;
}(KalturaEntryScheduleEvent));
export { KalturaRecordScheduleEvent };
typesMappingStorage['KalturaRecordScheduleEvent'] = KalturaRecordScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFPdkcsSUFBQTtJQUFnRCxzREFBeUI7SUFJckUsb0NBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxpREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUN0RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQTVCTDtFQVNnRCx5QkFBeUIsRUFvQnhFLENBQUE7QUFwQkQsc0NBb0JDO0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50LCBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnRBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnQgZXh0ZW5kcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnQnXSA9IEthbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50OyJdfQ==
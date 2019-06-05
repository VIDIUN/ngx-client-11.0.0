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
export function KalturaLiveStreamScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamScheduleEventArgs.prototype.projectedAudience;
var KalturaLiveStreamScheduleEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamScheduleEvent, _super);
    function KalturaLiveStreamScheduleEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamScheduleEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamScheduleEvent' },
            projectedAudience: { type: 'n' }
        });
        return result;
    };
    return KalturaLiveStreamScheduleEvent;
}(KalturaEntryScheduleEvent));
export { KalturaLiveStreamScheduleEvent };
if (false) {
    /** @type {?} */
    KalturaLiveStreamScheduleEvent.prototype.projectedAudience;
}
typesMappingStorage['KalturaLiveStreamScheduleEvent'] = KalturaLiveStreamScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBT3ZHLElBQUE7SUFBb0QsMERBQXlCO0lBSXpFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBN0JMO0VBU29ELHlCQUF5QixFQXFCNUUsQ0FBQTtBQXJCRCwwQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50LCBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QXJncyB7XG4gICAgcHJvamVjdGVkQXVkaWVuY2U/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnQgZXh0ZW5kcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50IHtcblxuICAgIHByb2plY3RlZEF1ZGllbmNlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50JyB9LFxuXHRcdFx0XHRwcm9qZWN0ZWRBdWRpZW5jZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0cmVhbVNjaGVkdWxlRXZlbnQnXSA9IEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudDsiXX0=
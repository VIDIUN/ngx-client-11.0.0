/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MixingUpdateActionArgs() { }
/** @type {?} */
MixingUpdateActionArgs.prototype.entryId;
/** @type {?} */
MixingUpdateActionArgs.prototype.mixEntry;
/**
 * Build request payload for service 'mixing' action 'update'.
 *
 * Usage: Update mix entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'mixing' action 'update'.
 *
 * Usage: Update mix entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
MixingUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(MixingUpdateAction, _super);
    function MixingUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMixEntry', responseConstructor: KalturaMixEntry }) || this;
    }
    /**
     * @return {?}
     */
    MixingUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'mixing' },
            action: { type: 'c', default: 'update' },
            entryId: { type: 's' },
            mixEntry: { type: 'o', subTypeConstructor: KalturaMixEntry, subType: 'KalturaMixEntry' }
        });
        return result;
    };
    return MixingUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'mixing' action 'update'.
 *
 * Usage: Update mix entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export { MixingUpdateAction };
if (false) {
    /** @type {?} */
    MixingUpdateAction.prototype.entryId;
    /** @type {?} */
    MixingUpdateAction.prototype.mixEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4aW5nVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NaXhpbmdVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQStCO0lBS25FLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDO0tBQ2xIOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtTQUNuRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQTFDTDtFQW1Cd0MsY0FBYyxFQXdCckQsQ0FBQTs7Ozs7Ozs7O0FBeEJELDhCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWl4RW50cnkgfSBmcm9tICcuL0thbHR1cmFNaXhFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1peGluZ1VwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRtaXhFbnRyeSA6IEthbHR1cmFNaXhFbnRyeTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21peGluZycgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgbWl4IGVudHJ5LiBPbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBzZXQgd2lsbCBiZSB1cGRhdGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1peEVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNaXhpbmdVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWl4RW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1peEVudHJ5IDogS2FsdHVyYU1peEVudHJ5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1peGluZ1VwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1peEVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNaXhFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWl4aW5nJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1peEVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWl4RW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYU1peEVudHJ5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=
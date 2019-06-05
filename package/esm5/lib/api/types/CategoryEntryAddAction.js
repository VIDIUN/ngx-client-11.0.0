/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCategoryEntry } from './KalturaCategoryEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryEntryAddActionArgs() { }
/** @type {?} */
CategoryEntryAddActionArgs.prototype.categoryEntry;
/**
 * Build request payload for service 'categoryEntry' action 'add'.
 *
 * Usage: Add new CategoryEntry
 *
 * Server response type:         KalturaCategoryEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryEntry' action 'add'.
 *
 * Usage: Add new CategoryEntry
 *
 * Server response type:         KalturaCategoryEntry
 * Server failure response type: KalturaAPIException
 */
CategoryEntryAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryEntryAddAction, _super);
    function CategoryEntryAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCategoryEntry', responseConstructor: KalturaCategoryEntry }) || this;
    }
    /**
     * @return {?}
     */
    CategoryEntryAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryentry' },
            action: { type: 'c', default: 'add' },
            categoryEntry: { type: 'o', subTypeConstructor: KalturaCategoryEntry, subType: 'KalturaCategoryEntry' }
        });
        return result;
    };
    return CategoryEntryAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryEntry' action 'add'.
 *
 * Usage: Add new CategoryEntry
 *
 * Server response type:         KalturaCategoryEntry
 * Server failure response type: KalturaAPIException
 */
export { CategoryEntryAddAction };
if (false) {
    /** @type {?} */
    CategoryEntryAddAction.prototype.categoryEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlFbnRyeUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2F0ZWdvcnlFbnRyeUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBb0M7SUFJNUUsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUMvRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7U0FDbEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0F2Q0w7RUFrQjRDLGNBQWMsRUFzQnpELENBQUE7Ozs7Ozs7OztBQXRCRCxrQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5RW50cnkgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlFbnRyeUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBjYXRlZ29yeUVudHJ5IDogS2FsdHVyYUNhdGVnb3J5RW50cnk7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXRlZ29yeUVudHJ5JyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgQ2F0ZWdvcnlFbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXRlZ29yeUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUVudHJ5QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhdGVnb3J5RW50cnk+IHtcblxuICAgIGNhdGVnb3J5RW50cnkgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXRlZ29yeUVudHJ5QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnllbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0Y2F0ZWdvcnlFbnRyeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5RW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5RW50cnknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==
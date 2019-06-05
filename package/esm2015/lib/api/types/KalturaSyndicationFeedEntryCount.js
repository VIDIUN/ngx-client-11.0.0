/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSyndicationFeedEntryCountArgs() { }
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.totalEntryCount;
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.actualEntryCount;
/** @type {?|undefined} */
KalturaSyndicationFeedEntryCountArgs.prototype.requireTranscodingCount;
export class KalturaSyndicationFeedEntryCount extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSyndicationFeedEntryCount' },
            totalEntryCount: { type: 'n' },
            actualEntryCount: { type: 'n' },
            requireTranscodingCount: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.totalEntryCount;
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.actualEntryCount;
    /** @type {?} */
    KalturaSyndicationFeedEntryCount.prototype.requireTranscodingCount;
}
typesMappingStorage['KalturaSyndicationFeedEntryCount'] = KalturaSyndicationFeedEntryCount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixNQUFNLHVDQUF3QyxTQUFRLGlCQUFpQjs7OztJQU1uRSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0b3RhbEVudHJ5Q291bnQ/IDogbnVtYmVyO1xuXHRhY3R1YWxFbnRyeUNvdW50PyA6IG51bWJlcjtcblx0cmVxdWlyZVRyYW5zY29kaW5nQ291bnQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHRvdGFsRW50cnlDb3VudCA6IG51bWJlcjtcblx0YWN0dWFsRW50cnlDb3VudCA6IG51bWJlcjtcblx0cmVxdWlyZVRyYW5zY29kaW5nQ291bnQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50JyB9LFxuXHRcdFx0XHR0b3RhbEVudHJ5Q291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWN0dWFsRW50cnlDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZXF1aXJlVHJhbnNjb2RpbmdDb3VudCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudCddID0gS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQ7Il19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAssetFilter } from './KalturaAssetFilter';
/**
 * @record
 */
export function KalturaThumbAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.thumbParamsIdEqual;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.thumbParamsIdIn;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaThumbAssetBaseFilterArgs.prototype.statusNotIn;
export class KalturaThumbAssetBaseFilter extends KalturaAssetFilter {
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
            objectType: { type: 'c', default: 'KalturaThumbAssetBaseFilter' },
            thumbParamsIdEqual: { type: 'n' },
            thumbParamsIdIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaThumbAssetStatus, subType: 'KalturaThumbAssetStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.thumbParamsIdEqual;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.thumbParamsIdIn;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaThumbAssetBaseFilter.prototype.statusNotIn;
}
typesMappingStorage['KalturaThumbAssetBaseFilter'] = KalturaThumbAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iQXNzZXRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixNQUFNLGtDQUFtQyxTQUFRLGtCQUFrQjs7OztJQVEvRCxZQUFZLElBQXVDO1FBRS9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNoRixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJBc3NldFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVRodW1iQXNzZXRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUFzc2V0RmlsdGVyLCBLYWx0dXJhQXNzZXRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQXNzZXRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFUaHVtYkFzc2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUFzc2V0RmlsdGVyQXJncyB7XG4gICAgdGh1bWJQYXJhbXNJZEVxdWFsPyA6IG51bWJlcjtcblx0dGh1bWJQYXJhbXNJZEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVRodW1iQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c3RhdHVzTm90SW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQXNzZXRGaWx0ZXIge1xuXG4gICAgdGh1bWJQYXJhbXNJZEVxdWFsIDogbnVtYmVyO1xuXHR0aHVtYlBhcmFtc0lkSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVRodW1iQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVRodW1iQXNzZXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUaHVtYkFzc2V0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYkFzc2V0U3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYkFzc2V0U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNOb3RJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVGh1bWJBc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFUaHVtYkFzc2V0QmFzZUZpbHRlcjsiXX0=
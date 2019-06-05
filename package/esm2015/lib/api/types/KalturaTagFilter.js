/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaTaggedObjectType } from './KalturaTaggedObjectType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaTagFilterArgs() { }
/** @type {?|undefined} */
KalturaTagFilterArgs.prototype.objectTypeEqual;
/** @type {?|undefined} */
KalturaTagFilterArgs.prototype.tagEqual;
/** @type {?|undefined} */
KalturaTagFilterArgs.prototype.tagStartsWith;
/** @type {?|undefined} */
KalturaTagFilterArgs.prototype.instanceCountEqual;
/** @type {?|undefined} */
KalturaTagFilterArgs.prototype.instanceCountIn;
export class KalturaTagFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaTagFilter' },
            objectTypeEqual: { type: 'es', subTypeConstructor: KalturaTaggedObjectType, subType: 'KalturaTaggedObjectType' },
            tagEqual: { type: 's' },
            tagStartsWith: { type: 's' },
            instanceCountEqual: { type: 'n' },
            instanceCountIn: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTagFilter.prototype.objectTypeEqual;
    /** @type {?} */
    KalturaTagFilter.prototype.tagEqual;
    /** @type {?} */
    KalturaTagFilter.prototype.tagStartsWith;
    /** @type {?} */
    KalturaTagFilter.prototype.instanceCountEqual;
    /** @type {?} */
    KalturaTagFilter.prototype.instanceCountIn;
}
typesMappingStorage['KalturaTagFilter'] = KalturaTagFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRhZ0ZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRhZ0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVduRSxNQUFNLHVCQUF3QixTQUFRLGFBQWE7Ozs7SUFRL0MsWUFBWSxJQUE0QjtRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDckUsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDcEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVRhZ2dlZE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFUYWdnZWRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGFnRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgb2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFUYWdnZWRPYmplY3RUeXBlO1xuXHR0YWdFcXVhbD8gOiBzdHJpbmc7XG5cdHRhZ1N0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRpbnN0YW5jZUNvdW50RXF1YWw/IDogbnVtYmVyO1xuXHRpbnN0YW5jZUNvdW50SW4/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVGFnRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBvYmplY3RUeXBlRXF1YWwgOiBLYWx0dXJhVGFnZ2VkT2JqZWN0VHlwZTtcblx0dGFnRXF1YWwgOiBzdHJpbmc7XG5cdHRhZ1N0YXJ0c1dpdGggOiBzdHJpbmc7XG5cdGluc3RhbmNlQ291bnRFcXVhbCA6IG51bWJlcjtcblx0aW5zdGFuY2VDb3VudEluIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVGFnRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUYWdGaWx0ZXInIH0sXG5cdFx0XHRcdG9iamVjdFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFUYWdnZWRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFUYWdnZWRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHR0YWdFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGluc3RhbmNlQ291bnRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpbnN0YW5jZUNvdW50SW4gOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRhZ0ZpbHRlciddID0gS2FsdHVyYVRhZ0ZpbHRlcjsiXX0=
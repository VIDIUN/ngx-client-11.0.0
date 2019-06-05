/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFileAssetObjectType } from './KalturaFileAssetObjectType';
import { KalturaFileAssetStatus } from './KalturaFileAssetStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaFileAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.fileAssetObjectTypeEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.objectIdEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.objectIdIn;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaFileAssetBaseFilterArgs.prototype.statusIn;
export class KalturaFileAssetBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaFileAssetBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            fileAssetObjectTypeEqual: { type: 'es', subTypeConstructor: KalturaFileAssetObjectType, subType: 'KalturaFileAssetObjectType' },
            objectIdEqual: { type: 's' },
            objectIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'n' },
            updatedAtGreaterThanOrEqual: { type: 'n' },
            updatedAtLessThanOrEqual: { type: 'n' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaFileAssetStatus, subType: 'KalturaFileAssetStatus' },
            statusIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.fileAssetObjectTypeEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.objectIdEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.objectIdIn;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaFileAssetBaseFilter.prototype.statusIn;
}
typesMappingStorage['KalturaFileAssetBaseFilter'] = KalturaFileAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGaWxlQXNzZXRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEYsTUFBTSxpQ0FBa0MsU0FBUSxvQkFBb0I7Ozs7SUFlaEUsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNuSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZUFzc2V0U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRmlsZUFzc2V0U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmlsZUFzc2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0ZmlsZUFzc2V0T2JqZWN0VHlwZUVxdWFsPyA6IEthbHR1cmFGaWxlQXNzZXRPYmplY3RUeXBlO1xuXHRvYmplY3RJZEVxdWFsPyA6IHN0cmluZztcblx0b2JqZWN0SWRJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFGaWxlQXNzZXRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0ZmlsZUFzc2V0T2JqZWN0VHlwZUVxdWFsIDogS2FsdHVyYUZpbGVBc3NldE9iamVjdFR5cGU7XG5cdG9iamVjdElkRXF1YWwgOiBzdHJpbmc7XG5cdG9iamVjdElkSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRmlsZUFzc2V0U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaWxlQXNzZXRPYmplY3RUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsZUFzc2V0T2JqZWN0VHlwZScgfSxcblx0XHRcdFx0b2JqZWN0SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvYmplY3RJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWxlQXNzZXRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbGVBc3NldFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZpbGVBc3NldEJhc2VGaWx0ZXInXSA9IEthbHR1cmFGaWxlQXNzZXRCYXNlRmlsdGVyOyJdfQ==
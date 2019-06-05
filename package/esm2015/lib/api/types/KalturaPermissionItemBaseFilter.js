/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemType } from './KalturaPermissionItemType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaPermissionItemBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionItemBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaPermissionItemBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaPermissionItemBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaPermissionItemType, subType: 'KalturaPermissionItemType' },
            typeIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPermissionItemBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaPermissionItemBaseFilter'] = KalturaPermissionItemBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBlcm1pc3Npb25JdGVtQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhGLE1BQU0sc0NBQXVDLFNBQVEsb0JBQW9COzs7O0lBZXJFLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUNsSCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uSXRlbVR5cGUgfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uSXRlbVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHR0eXBlRXF1YWw/IDogS2FsdHVyYVBlcm1pc3Npb25JdGVtVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBlcm1pc3Npb25JdGVtQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbCA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbVR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBlcm1pc3Npb25JdGVtQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uSXRlbVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25JdGVtVHlwZScgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGVybWlzc2lvbkl0ZW1CYXNlRmlsdGVyJ10gPSBLYWx0dXJhUGVybWlzc2lvbkl0ZW1CYXNlRmlsdGVyOyJdfQ==
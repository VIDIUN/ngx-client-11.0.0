/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaPartnerGroupType } from './KalturaPartnerGroupType';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaPartnerBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.nameMultiLikeOr;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.nameMultiLikeAnd;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerPackageEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerPackageGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerPackageLessThanOrEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerPackageIn;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerGroupTypeEqual;
/** @type {?|undefined} */
KalturaPartnerBaseFilterArgs.prototype.partnerNameDescriptionWebsiteAdminNameAdminEmailLike;
export class KalturaPartnerBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaPartnerBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            nameLike: { type: 's' },
            nameMultiLikeOr: { type: 's' },
            nameMultiLikeAnd: { type: 's' },
            nameEqual: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaPartnerStatus, subType: 'KalturaPartnerStatus' },
            statusIn: { type: 's' },
            partnerPackageEqual: { type: 'n' },
            partnerPackageGreaterThanOrEqual: { type: 'n' },
            partnerPackageLessThanOrEqual: { type: 'n' },
            partnerPackageIn: { type: 's' },
            partnerGroupTypeEqual: { type: 'en', subTypeConstructor: KalturaPartnerGroupType, subType: 'KalturaPartnerGroupType' },
            partnerNameDescriptionWebsiteAdminNameAdminEmailLike: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.nameMultiLikeOr;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.nameMultiLikeAnd;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerPackageEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerPackageGreaterThanOrEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerPackageLessThanOrEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerPackageIn;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerGroupTypeEqual;
    /** @type {?} */
    KalturaPartnerBaseFilter.prototype.partnerNameDescriptionWebsiteAdminNameAdminEmailLike;
}
typesMappingStorage['KalturaPartnerBaseFilter'] = KalturaPartnerBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGFydG5lckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCbkUsTUFBTSwrQkFBZ0MsU0FBUSxhQUFhOzs7O0lBa0J2RCxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDMUcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsZ0NBQWdDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pELDZCQUE2QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUMxSCxvREFBb0QsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUQsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lckdyb3VwVHlwZSB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJHcm91cFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFQYXJ0bmVyQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0aWROb3RJbj8gOiBzdHJpbmc7XG5cdG5hbWVMaWtlPyA6IHN0cmluZztcblx0bmFtZU11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0bmFtZU11bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFQYXJ0bmVyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJQYWNrYWdlRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVyUGFja2FnZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2VJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJHcm91cFR5cGVFcXVhbD8gOiBLYWx0dXJhUGFydG5lckdyb3VwVHlwZTtcblx0cGFydG5lck5hbWVEZXNjcmlwdGlvbldlYnNpdGVBZG1pbk5hbWVBZG1pbkVtYWlsTGlrZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQYXJ0bmVyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0aWROb3RJbiA6IHN0cmluZztcblx0bmFtZUxpa2UgOiBzdHJpbmc7XG5cdG5hbWVNdWx0aUxpa2VPciA6IHN0cmluZztcblx0bmFtZU11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFQYXJ0bmVyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0cGFydG5lclBhY2thZ2VFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2VHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVyUGFja2FnZUluIDogc3RyaW5nO1xuXHRwYXJ0bmVyR3JvdXBUeXBlRXF1YWwgOiBLYWx0dXJhUGFydG5lckdyb3VwVHlwZTtcblx0cGFydG5lck5hbWVEZXNjcmlwdGlvbldlYnNpdGVBZG1pbk5hbWVBZG1pbkVtYWlsTGlrZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBhcnRuZXJCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQYXJ0bmVyQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlkTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZU11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJQYWNrYWdlRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lclBhY2thZ2VHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lclBhY2thZ2VMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lclBhY2thZ2VJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyR3JvdXBUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lckdyb3VwVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lckdyb3VwVHlwZScgfSxcblx0XHRcdFx0cGFydG5lck5hbWVEZXNjcmlwdGlvbldlYnNpdGVBZG1pbk5hbWVBZG1pbkVtYWlsTGlrZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGFydG5lckJhc2VGaWx0ZXInXSA9IEthbHR1cmFQYXJ0bmVyQmFzZUZpbHRlcjsiXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaPermissionStatus } from './KalturaPermissionStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaPermissionBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.nameIn;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.friendlyNameLike;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.dependsOnPermissionNamesMultiLikeOr;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.dependsOnPermissionNamesMultiLikeAnd;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPermissionBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
export class KalturaPermissionBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaPermissionBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            typeEqual: { type: 'en', subTypeConstructor: KalturaPermissionType, subType: 'KalturaPermissionType' },
            typeIn: { type: 's' },
            nameEqual: { type: 's' },
            nameIn: { type: 's' },
            friendlyNameLike: { type: 's' },
            descriptionLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaPermissionStatus, subType: 'KalturaPermissionStatus' },
            statusIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            dependsOnPermissionNamesMultiLikeOr: { type: 's' },
            dependsOnPermissionNamesMultiLikeAnd: { type: 's' },
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
    KalturaPermissionBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.nameIn;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.friendlyNameLike;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.dependsOnPermissionNamesMultiLikeOr;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.dependsOnPermissionNamesMultiLikeAnd;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPermissionBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaPermissionBaseFilter'] = KalturaPermissionBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCeEYsTUFBTSxrQ0FBbUMsU0FBUSxvQkFBb0I7Ozs7SUF1QmpFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixtQ0FBbUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEQsb0NBQW9DLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JELGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFQZXJtaXNzaW9uVHlwZTtcblx0dHlwZUluPyA6IHN0cmluZztcblx0bmFtZUVxdWFsPyA6IHN0cmluZztcblx0bmFtZUluPyA6IHN0cmluZztcblx0ZnJpZW5kbHlOYW1lTGlrZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTGlrZT8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFQZXJtaXNzaW9uU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRkZXBlbmRzT25QZXJtaXNzaW9uTmFtZXNNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0dHlwZUVxdWFsIDogS2FsdHVyYVBlcm1pc3Npb25UeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0bmFtZUluIDogc3RyaW5nO1xuXHRmcmllbmRseU5hbWVMaWtlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkxpa2UgOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRkZXBlbmRzT25QZXJtaXNzaW9uTmFtZXNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQZXJtaXNzaW9uQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQZXJtaXNzaW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvblR5cGUnIH0sXG5cdFx0XHRcdHR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZyaWVuZGx5TmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb25MaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyJ10gPSBLYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXI7Il19
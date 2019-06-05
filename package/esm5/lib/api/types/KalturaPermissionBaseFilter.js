/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaPermissionBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPermissionBaseFilter, _super);
    function KalturaPermissionBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPermissionBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaPermissionBaseFilter;
}(KalturaRelatedFilter));
export { KalturaPermissionBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQnhGLElBQUE7SUFBaUQsdURBQW9CO0lBdUJqRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUNoSCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixtQ0FBbUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEQsb0NBQW9DLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JELGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQXhGTDtFQThCaUQsb0JBQW9CLEVBMkRwRSxDQUFBO0FBM0RELHVDQTJEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25UeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGVybWlzc2lvblR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBlcm1pc3Npb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFQZXJtaXNzaW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHR0eXBlRXF1YWw/IDogS2FsdHVyYVBlcm1pc3Npb25UeXBlO1xuXHR0eXBlSW4/IDogc3RyaW5nO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRuYW1lSW4/IDogc3RyaW5nO1xuXHRmcmllbmRseU5hbWVMaWtlPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb25MaWtlPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVBlcm1pc3Npb25TdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhUGVybWlzc2lvblR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRuYW1lSW4gOiBzdHJpbmc7XG5cdGZyaWVuZGx5TmFtZUxpa2UgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTGlrZSA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhUGVybWlzc2lvblN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbiA6IHN0cmluZztcblx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGRlcGVuZHNPblBlcm1pc3Npb25OYW1lc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBlcm1pc3Npb25CYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBlcm1pc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQZXJtaXNzaW9uVHlwZScgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZnJpZW5kbHlOYW1lTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGVybWlzc2lvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhUGVybWlzc2lvblN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVwZW5kc09uUGVybWlzc2lvbk5hbWVzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGVybWlzc2lvbkJhc2VGaWx0ZXInXSA9IEthbHR1cmFQZXJtaXNzaW9uQmFzZUZpbHRlcjsiXX0=
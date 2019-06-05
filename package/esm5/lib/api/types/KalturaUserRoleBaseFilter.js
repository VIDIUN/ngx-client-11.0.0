/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaUserRoleBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.nameEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.nameIn;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.systemNameEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.systemNameIn;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserRoleBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaUserRoleBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserRoleBaseFilter, _super);
    function KalturaUserRoleBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserRoleBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserRoleBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            nameEqual: { type: 's' },
            nameIn: { type: 's' },
            systemNameEqual: { type: 's' },
            systemNameIn: { type: 's' },
            descriptionLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaUserRoleStatus, subType: 'KalturaUserRoleStatus' },
            statusIn: { type: 's' },
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
    };
    return KalturaUserRoleBaseFilter;
}(KalturaRelatedFilter));
export { KalturaUserRoleBaseFilter };
if (false) {
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.nameEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.nameIn;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.systemNameEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.systemNameIn;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserRoleBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaUserRoleBaseFilter'] = KalturaUserRoleBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCeEYsSUFBQTtJQUErQyxxREFBb0I7SUFvQi9ELG1DQUFZLElBQXFDO2VBRTdDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0E5RUw7RUEwQitDLG9CQUFvQixFQXFEbEUsQ0FBQTtBQXJERCxxQ0FxREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyUm9sZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJSb2xlU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlclJvbGVCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0bmFtZUVxdWFsPyA6IHN0cmluZztcblx0bmFtZUluPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsPyA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb25MaWtlPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVVzZXJSb2xlU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyUm9sZUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRuYW1lRXF1YWwgOiBzdHJpbmc7XG5cdG5hbWVJbiA6IHN0cmluZztcblx0c3lzdGVtTmFtZUVxdWFsIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lSW4gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTGlrZSA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhVXNlclJvbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlclJvbGVCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyUm9sZVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhVXNlclJvbGVTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlclJvbGVCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVXNlclJvbGVCYXNlRmlsdGVyOyJdfQ==
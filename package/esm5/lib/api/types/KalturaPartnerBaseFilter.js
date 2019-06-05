/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaPartnerBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPartnerBaseFilter, _super);
    function KalturaPartnerBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPartnerBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaPartnerBaseFilter;
}(KalturaFilter));
export { KalturaPartnerBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBhcnRuZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGFydG5lckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQm5FLElBQUE7SUFBOEMsb0RBQWE7SUFrQnZELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzFHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLGdDQUFnQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqRCw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDMUgsb0RBQW9ELEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVELENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBekVMO0VBeUI4QyxhQUFhLEVBaUQxRCxDQUFBO0FBakRELG9DQWlEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJHcm91cFR5cGUgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyR3JvdXBUeXBlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGFydG5lckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdG5hbWVNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdG5hbWVNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRuYW1lRXF1YWw/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhUGFydG5lclN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVyUGFja2FnZUVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2VHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVyUGFja2FnZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVyR3JvdXBUeXBlRXF1YWw/IDogS2FsdHVyYVBhcnRuZXJHcm91cFR5cGU7XG5cdHBhcnRuZXJOYW1lRGVzY3JpcHRpb25XZWJzaXRlQWRtaW5OYW1lQWRtaW5FbWFpbExpa2U/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGFydG5lckJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGlkTm90SW4gOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHRuYW1lTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdG5hbWVNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdG5hbWVFcXVhbCA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhUGFydG5lclN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHBhcnRuZXJQYWNrYWdlRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJQYWNrYWdlR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVyUGFja2FnZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lclBhY2thZ2VJbiA6IHN0cmluZztcblx0cGFydG5lckdyb3VwVHlwZUVxdWFsIDogS2FsdHVyYVBhcnRuZXJHcm91cFR5cGU7XG5cdHBhcnRuZXJOYW1lRGVzY3JpcHRpb25XZWJzaXRlQWRtaW5OYW1lQWRtaW5FbWFpbExpa2UgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQYXJ0bmVyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGFydG5lckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYXJ0bmVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFQYXJ0bmVyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyUGFja2FnZUVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJQYWNrYWdlR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJQYWNrYWdlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJQYWNrYWdlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lckdyb3VwVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJHcm91cFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJHcm91cFR5cGUnIH0sXG5cdFx0XHRcdHBhcnRuZXJOYW1lRGVzY3JpcHRpb25XZWJzaXRlQWRtaW5OYW1lQWRtaW5FbWFpbExpa2UgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVBhcnRuZXJCYXNlRmlsdGVyJ10gPSBLYWx0dXJhUGFydG5lckJhc2VGaWx0ZXI7Il19
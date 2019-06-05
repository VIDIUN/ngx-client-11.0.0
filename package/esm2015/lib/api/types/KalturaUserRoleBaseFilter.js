/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaUserRoleBaseFilter extends KalturaRelatedFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJ4RixNQUFNLGdDQUFpQyxTQUFRLG9CQUFvQjs7OztJQW9CL0QsWUFBWSxJQUFxQztRQUU3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUUsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUM1RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlclJvbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyUm9sZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdG5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdG5hbWVJbj8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbD8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVJbj8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uTGlrZT8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFVc2VyUm9sZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlclJvbGVCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0bmFtZUVxdWFsIDogc3RyaW5nO1xuXHRuYW1lSW4gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWVFcXVhbCA6IHN0cmluZztcblx0c3lzdGVtTmFtZUluIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkxpa2UgOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVVzZXJSb2xlU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyUm9sZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWVFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3lzdGVtTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlclJvbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJSb2xlU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlciddID0gS2FsdHVyYVVzZXJSb2xlQmFzZUZpbHRlcjsiXX0=
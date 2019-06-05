/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaUserBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.screenNameLike;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.screenNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.emailLike;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.emailStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.firstNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.lastNameStartsWith;
/** @type {?|undefined} */
KalturaUserBaseFilterArgs.prototype.isAdminEqual;
export class KalturaUserBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaUserBaseFilter' },
            partnerIdEqual: { type: 'n' },
            typeEqual: { type: 'en', subTypeConstructor: KalturaUserType, subType: 'KalturaUserType' },
            typeIn: { type: 's' },
            screenNameLike: { type: 's' },
            screenNameStartsWith: { type: 's' },
            emailLike: { type: 's' },
            emailStartsWith: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaUserStatus, subType: 'KalturaUserStatus' },
            statusIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            firstNameStartsWith: { type: 's' },
            lastNameStartsWith: { type: 's' },
            isAdminEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUserBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.screenNameLike;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.screenNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.emailLike;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.emailStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.firstNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.lastNameStartsWith;
    /** @type {?} */
    KalturaUserBaseFilter.prototype.isAdminEqual;
}
typesMappingStorage['KalturaUserBaseFilter'] = KalturaUserBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J4RixNQUFNLDRCQUE2QixTQUFRLG9CQUFvQjs7OztJQW1CM0QsWUFBWSxJQUFpQztRQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDOUYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDcEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDdEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhVXNlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFVc2VyQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHR5cGVFcXVhbD8gOiBLYWx0dXJhVXNlclR5cGU7XG5cdHR5cGVJbj8gOiBzdHJpbmc7XG5cdHNjcmVlbk5hbWVMaWtlPyA6IHN0cmluZztcblx0c2NyZWVuTmFtZVN0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHRlbWFpbExpa2U/IDogc3RyaW5nO1xuXHRlbWFpbFN0YXJ0c1dpdGg/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYVVzZXJTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRmaXJzdE5hbWVTdGFydHNXaXRoPyA6IHN0cmluZztcblx0bGFzdE5hbWVTdGFydHNXaXRoPyA6IHN0cmluZztcblx0aXNBZG1pbkVxdWFsPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhVXNlclR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0c2NyZWVuTmFtZUxpa2UgOiBzdHJpbmc7XG5cdHNjcmVlbk5hbWVTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRlbWFpbExpa2UgOiBzdHJpbmc7XG5cdGVtYWlsU3RhcnRzV2l0aCA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFVc2VyU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0Zmlyc3ROYW1lU3RhcnRzV2l0aCA6IHN0cmluZztcblx0bGFzdE5hbWVTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRpc0FkbWluRXF1YWwgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVXNlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVzZXJCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJUeXBlJyB9LFxuXHRcdFx0XHR0eXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NyZWVuTmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2NyZWVuTmFtZVN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW1haWxMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsU3RhcnRzV2l0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyU3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGZpcnN0TmFtZVN0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGFzdE5hbWVTdGFydHNXaXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzQWRtaW5FcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVzZXJCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVXNlckJhc2VGaWx0ZXI7Il19
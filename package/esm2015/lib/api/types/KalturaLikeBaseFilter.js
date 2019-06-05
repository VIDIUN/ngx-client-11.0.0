/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaLikeBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaLikeBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaLikeBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaLikeBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaLikeBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaLikeBaseFilterArgs.prototype.createdAtLessThanOrEqual;
export class KalturaLikeBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaLikeBaseFilter' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            userIdEqual: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLikeBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaLikeBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaLikeBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaLikeBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaLikeBaseFilter.prototype.createdAtLessThanOrEqual;
}
typesMappingStorage['KalturaLikeBaseFilter'] = KalturaLikeBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpa2VCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGlrZUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVd4RixNQUFNLDRCQUE2QixTQUFRLG9CQUFvQjs7OztJQVEzRCxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaWtlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkSW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpa2VCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgZW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkSW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGlrZUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpa2VCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpa2VCYXNlRmlsdGVyJ10gPSBLYWx0dXJhTGlrZUJhc2VGaWx0ZXI7Il19
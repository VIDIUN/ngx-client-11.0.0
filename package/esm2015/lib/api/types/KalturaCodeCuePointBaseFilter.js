/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaCodeCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeLike;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeMultiLikeOr;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeMultiLikeAnd;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.codeIn;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionLike;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionMultiLikeOr;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.descriptionMultiLikeAnd;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.endTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCodeCuePointBaseFilterArgs.prototype.durationLessThanOrEqual;
export class KalturaCodeCuePointBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaCodeCuePointBaseFilter' },
            codeLike: { type: 's' },
            codeMultiLikeOr: { type: 's' },
            codeMultiLikeAnd: { type: 's' },
            codeEqual: { type: 's' },
            codeIn: { type: 's' },
            descriptionLike: { type: 's' },
            descriptionMultiLikeOr: { type: 's' },
            descriptionMultiLikeAnd: { type: 's' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeLike;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeMultiLikeOr;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeMultiLikeAnd;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.codeIn;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionLike;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionMultiLikeOr;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.descriptionMultiLikeAnd;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.endTimeLessThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaCodeCuePointBaseFilter.prototype.durationLessThanOrEqual;
}
typesMappingStorage['KalturaCodeCuePointBaseFilter'] = KalturaCodeCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvZGVDdWVQb2ludEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCM0YsTUFBTSxvQ0FBcUMsU0FBUSxxQkFBcUI7Ozs7SUFlcEUsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7WUFDbEYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50RmlsdGVyLCBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIHtcbiAgICBjb2RlTGlrZT8gOiBzdHJpbmc7XG5cdGNvZGVNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGNvZGVNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjb2RlRXF1YWw/IDogc3RyaW5nO1xuXHRjb2RlSW4/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbkxpa2U/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb25NdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29kZUN1ZVBvaW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlciB7XG5cbiAgICBjb2RlTGlrZSA6IHN0cmluZztcblx0Y29kZU11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRjb2RlTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRjb2RlRXF1YWwgOiBzdHJpbmc7XG5cdGNvZGVJbiA6IHN0cmluZztcblx0ZGVzY3JpcHRpb25MaWtlIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbk11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29kZUN1ZVBvaW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29kZUN1ZVBvaW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Y29kZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29kZU11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvZGVNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29kZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvZGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbkxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb25NdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbk11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvZGVDdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFDb2RlQ3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==
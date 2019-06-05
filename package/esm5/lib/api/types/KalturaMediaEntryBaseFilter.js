/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaPlayableEntryFilter } from './KalturaPlayableEntryFilter';
/**
 * @record
 */
export function KalturaMediaEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaTypeEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaTypeIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeNotEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeNotIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaDateGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaDateLessThanOrEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.flavorParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.flavorParamsIdsMatchAnd;
var KalturaMediaEntryBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMediaEntryBaseFilter, _super);
    function KalturaMediaEntryBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMediaEntryBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMediaEntryBaseFilter' },
            mediaTypeEqual: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            mediaTypeIn: { type: 's' },
            sourceTypeEqual: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            sourceTypeNotEqual: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            sourceTypeIn: { type: 's' },
            sourceTypeNotIn: { type: 's' },
            mediaDateGreaterThanOrEqual: { type: 'd' },
            mediaDateLessThanOrEqual: { type: 'd' },
            flavorParamsIdsMatchOr: { type: 's' },
            flavorParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    };
    return KalturaMediaEntryBaseFilter;
}(KalturaPlayableEntryFilter));
export { KalturaMediaEntryBaseFilter };
if (false) {
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaTypeEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaTypeIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeNotEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeNotIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaDateGreaterThanOrEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaDateLessThanOrEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.flavorParamsIdsMatchOr;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.flavorParamsIdsMatchAnd;
}
typesMappingStorage['KalturaMediaEntryBaseFilter'] = KalturaMediaEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0IxRyxJQUFBO0lBQWlELHVEQUEwQjtJQWF2RSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JHLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDeEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUMzRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBMURMO0VBb0JpRCwwQkFBMEIsRUF1QzFFLENBQUE7QUF2Q0QsdUNBdUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU291cmNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNvdXJjZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlhYmxlRW50cnlGaWx0ZXIsIEthbHR1cmFQbGF5YWJsZUVudHJ5RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVBsYXlhYmxlRW50cnlGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZWRpYUVudHJ5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVBsYXlhYmxlRW50cnlGaWx0ZXJBcmdzIHtcbiAgICBtZWRpYVR5cGVFcXVhbD8gOiBLYWx0dXJhTWVkaWFUeXBlO1xuXHRtZWRpYVR5cGVJbj8gOiBzdHJpbmc7XG5cdHNvdXJjZVR5cGVFcXVhbD8gOiBLYWx0dXJhU291cmNlVHlwZTtcblx0c291cmNlVHlwZU5vdEVxdWFsPyA6IEthbHR1cmFTb3VyY2VUeXBlO1xuXHRzb3VyY2VUeXBlSW4/IDogc3RyaW5nO1xuXHRzb3VyY2VUeXBlTm90SW4/IDogc3RyaW5nO1xuXHRtZWRpYURhdGVHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0bWVkaWFEYXRlTGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGZsYXZvclBhcmFtc0lkc01hdGNoT3I/IDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZHNNYXRjaEFuZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZWRpYUVudHJ5QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFQbGF5YWJsZUVudHJ5RmlsdGVyIHtcblxuICAgIG1lZGlhVHlwZUVxdWFsIDogS2FsdHVyYU1lZGlhVHlwZTtcblx0bWVkaWFUeXBlSW4gOiBzdHJpbmc7XG5cdHNvdXJjZVR5cGVFcXVhbCA6IEthbHR1cmFTb3VyY2VUeXBlO1xuXHRzb3VyY2VUeXBlTm90RXF1YWwgOiBLYWx0dXJhU291cmNlVHlwZTtcblx0c291cmNlVHlwZUluIDogc3RyaW5nO1xuXHRzb3VyY2VUeXBlTm90SW4gOiBzdHJpbmc7XG5cdG1lZGlhRGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdG1lZGlhRGF0ZUxlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGZsYXZvclBhcmFtc0lkc01hdGNoT3IgOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkc01hdGNoQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1lZGlhRW50cnlCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRtZWRpYVR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhVHlwZScgfSxcblx0XHRcdFx0bWVkaWFUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNvdXJjZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNvdXJjZVR5cGUnIH0sXG5cdFx0XHRcdHNvdXJjZVR5cGVOb3RFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTb3VyY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTb3VyY2VUeXBlJyB9LFxuXHRcdFx0XHRzb3VyY2VUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlVHlwZU5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhRGF0ZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRtZWRpYURhdGVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZHNNYXRjaEFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFNZWRpYUVudHJ5QmFzZUZpbHRlcjsiXX0=
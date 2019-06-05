/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
/**
 * @record
 */
export function KalturaExternalMediaEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.externalSourceTypeEqual;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.externalSourceTypeIn;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.assetParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaExternalMediaEntryBaseFilterArgs.prototype.assetParamsIdsMatchAnd;
export class KalturaExternalMediaEntryBaseFilter extends KalturaMediaEntryFilter {
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
            objectType: { type: 'c', default: 'KalturaExternalMediaEntryBaseFilter' },
            externalSourceTypeEqual: { type: 'es', subTypeConstructor: KalturaExternalMediaSourceType, subType: 'KalturaExternalMediaSourceType' },
            externalSourceTypeIn: { type: 's' },
            assetParamsIdsMatchOr: { type: 's' },
            assetParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.externalSourceTypeEqual;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.externalSourceTypeIn;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.assetParamsIdsMatchOr;
    /** @type {?} */
    KalturaExternalMediaEntryBaseFilter.prototype.assetParamsIdsMatchAnd;
}
typesMappingStorage['KalturaExternalMediaEntryBaseFilter'] = KalturaExternalMediaEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWpHLE1BQU0sMENBQTJDLFNBQVEsdUJBQXVCOzs7O0lBTzVFLFlBQVksSUFBK0M7UUFFdkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw4QkFBOEIsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDMUksb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRXh0ZXJuYWxNZWRpYVNvdXJjZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXIsIEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckFyZ3Mge1xuICAgIGV4dGVybmFsU291cmNlVHlwZUVxdWFsPyA6IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZTtcblx0ZXh0ZXJuYWxTb3VyY2VUeXBlSW4/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoT3I/IDogc3RyaW5nO1xuXHRhc3NldFBhcmFtc0lkc01hdGNoQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlciB7XG5cbiAgICBleHRlcm5hbFNvdXJjZVR5cGVFcXVhbCA6IEthbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZTtcblx0ZXh0ZXJuYWxTb3VyY2VUeXBlSW4gOiBzdHJpbmc7XG5cdGFzc2V0UGFyYW1zSWRzTWF0Y2hPciA6IHN0cmluZztcblx0YXNzZXRQYXJhbXNJZHNNYXRjaEFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGV4dGVybmFsU291cmNlVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV4dGVybmFsTWVkaWFTb3VyY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFeHRlcm5hbE1lZGlhU291cmNlVHlwZScgfSxcblx0XHRcdFx0ZXh0ZXJuYWxTb3VyY2VUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRQYXJhbXNJZHNNYXRjaE9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFzc2V0UGFyYW1zSWRzTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnlCYXNlRmlsdGVyOyJdfQ==
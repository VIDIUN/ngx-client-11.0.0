/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaEntryTranscriptAssetSearchItemArgs() { }
/** @type {?|undefined} */
KalturaEntryTranscriptAssetSearchItemArgs.prototype.contentLike;
/** @type {?|undefined} */
KalturaEntryTranscriptAssetSearchItemArgs.prototype.contentMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryTranscriptAssetSearchItemArgs.prototype.contentMultiLikeAnd;
var KalturaEntryTranscriptAssetSearchItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryTranscriptAssetSearchItem, _super);
    function KalturaEntryTranscriptAssetSearchItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryTranscriptAssetSearchItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryTranscriptAssetSearchItem' },
            contentLike: { type: 's' },
            contentMultiLikeOr: { type: 's' },
            contentMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaEntryTranscriptAssetSearchItem;
}(KalturaSearchItem));
export { KalturaEntryTranscriptAssetSearchItem };
if (false) {
    /** @type {?} */
    KalturaEntryTranscriptAssetSearchItem.prototype.contentLike;
    /** @type {?} */
    KalturaEntryTranscriptAssetSearchItem.prototype.contentMultiLikeOr;
    /** @type {?} */
    KalturaEntryTranscriptAssetSearchItem.prototype.contentMultiLikeAnd;
}
typesMappingStorage['KalturaEntryTranscriptAssetSearchItem'] = KalturaEntryTranscriptAssetSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBUy9FLElBQUE7SUFBMkQsaUVBQWlCO0lBTXhFLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDMUYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBbkNMO0VBVzJELGlCQUFpQixFQXlCM0UsQ0FBQTtBQXpCRCxpREF5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEl0ZW0sIEthbHR1cmFTZWFyY2hJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeVRyYW5zY3JpcHRBc3NldFNlYXJjaEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgY29udGVudExpa2U/IDogc3RyaW5nO1xuXHRjb250ZW50TXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRjb250ZW50TXVsdGlMaWtlQW5kPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbSBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIGNvbnRlbnRMaWtlIDogc3RyaW5nO1xuXHRjb250ZW50TXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeVRyYW5zY3JpcHRBc3NldFNlYXJjaEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbScgfSxcblx0XHRcdFx0Y29udGVudExpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudE11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbSddID0gS2FsdHVyYUVudHJ5VHJhbnNjcmlwdEFzc2V0U2VhcmNoSXRlbTsiXX0=
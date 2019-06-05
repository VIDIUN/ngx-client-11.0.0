/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaEntryCaptionAssetSearchItemArgs() { }
/** @type {?|undefined} */
KalturaEntryCaptionAssetSearchItemArgs.prototype.contentLike;
/** @type {?|undefined} */
KalturaEntryCaptionAssetSearchItemArgs.prototype.contentMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryCaptionAssetSearchItemArgs.prototype.contentMultiLikeAnd;
export class KalturaEntryCaptionAssetSearchItem extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaEntryCaptionAssetSearchItem' },
            contentLike: { type: 's' },
            contentMultiLikeOr: { type: 's' },
            contentMultiLikeAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryCaptionAssetSearchItem.prototype.contentLike;
    /** @type {?} */
    KalturaEntryCaptionAssetSearchItem.prototype.contentMultiLikeOr;
    /** @type {?} */
    KalturaEntryCaptionAssetSearchItem.prototype.contentMultiLikeAnd;
}
typesMappingStorage['KalturaEntryCaptionAssetSearchItem'] = KalturaEntryCaptionAssetSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q2FwdGlvbkFzc2V0U2VhcmNoSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5Q2FwdGlvbkFzc2V0U2VhcmNoSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTL0UsTUFBTSx5Q0FBMEMsU0FBUSxpQkFBaUI7Ozs7SUFNckUsWUFBWSxJQUE4QztRQUV0RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoSXRlbSwgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5Q2FwdGlvbkFzc2V0U2VhcmNoSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBjb250ZW50TGlrZT8gOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlDYXB0aW9uQXNzZXRTZWFyY2hJdGVtIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW0ge1xuXG4gICAgY29udGVudExpa2UgOiBzdHJpbmc7XG5cdGNvbnRlbnRNdWx0aUxpa2VPciA6IHN0cmluZztcblx0Y29udGVudE11bHRpTGlrZUFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5Q2FwdGlvbkFzc2V0U2VhcmNoSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlDYXB0aW9uQXNzZXRTZWFyY2hJdGVtJyB9LFxuXHRcdFx0XHRjb250ZW50TGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50TXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudE11bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlDYXB0aW9uQXNzZXRTZWFyY2hJdGVtJ10gPSBLYWx0dXJhRW50cnlDYXB0aW9uQXNzZXRTZWFyY2hJdGVtOyJdfQ==
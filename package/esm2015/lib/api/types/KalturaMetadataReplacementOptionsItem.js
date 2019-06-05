/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPluginReplacementOptionsItem } from './KalturaPluginReplacementOptionsItem';
/**
 * @record
 */
export function KalturaMetadataReplacementOptionsItemArgs() { }
/** @type {?|undefined} */
KalturaMetadataReplacementOptionsItemArgs.prototype.shouldCopyMetadata;
export class KalturaMetadataReplacementOptionsItem extends KalturaPluginReplacementOptionsItem {
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
            objectType: { type: 'c', default: 'KalturaMetadataReplacementOptionsItem' },
            shouldCopyMetadata: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataReplacementOptionsItem.prototype.shouldCopyMetadata;
}
typesMappingStorage['KalturaMetadataReplacementOptionsItem'] = KalturaMetadataReplacementOptionsItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhUmVwbGFjZW1lbnRPcHRpb25zSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBMkMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7OztBQU9ySSxNQUFNLDRDQUE2QyxTQUFRLG1DQUFtQzs7OztJQUkxRixZQUFZLElBQWlEO1FBRXpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsdWdpblJlcGxhY2VtZW50T3B0aW9uc0l0ZW0sIEthbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVBsdWdpblJlcGxhY2VtZW50T3B0aW9uc0l0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YVJlcGxhY2VtZW50T3B0aW9uc0l0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFQbHVnaW5SZXBsYWNlbWVudE9wdGlvbnNJdGVtQXJncyB7XG4gICAgc2hvdWxkQ29weU1ldGFkYXRhPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YVJlcGxhY2VtZW50T3B0aW9uc0l0ZW0gZXh0ZW5kcyBLYWx0dXJhUGx1Z2luUmVwbGFjZW1lbnRPcHRpb25zSXRlbSB7XG5cbiAgICBzaG91bGRDb3B5TWV0YWRhdGEgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZXRhZGF0YVJlcGxhY2VtZW50T3B0aW9uc0l0ZW0nIH0sXG5cdFx0XHRcdHNob3VsZENvcHlNZXRhZGF0YSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtJ10gPSBLYWx0dXJhTWV0YWRhdGFSZXBsYWNlbWVudE9wdGlvbnNJdGVtOyJdfQ==
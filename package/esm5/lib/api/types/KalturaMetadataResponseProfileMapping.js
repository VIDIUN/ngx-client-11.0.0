/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaResponseProfileMapping } from './KalturaResponseProfileMapping';
/**
 * @record
 */
export function KalturaMetadataResponseProfileMappingArgs() { }
var KalturaMetadataResponseProfileMapping = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataResponseProfileMapping, _super);
    function KalturaMetadataResponseProfileMapping(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataResponseProfileMapping.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataResponseProfileMapping' }
        });
        return result;
    };
    return KalturaMetadataResponseProfileMapping;
}(KalturaResponseProfileMapping));
export { KalturaMetadataResponseProfileMapping };
typesMappingStorage['KalturaMetadataResponseProfileMapping'] = KalturaMetadataResponseProfileMapping;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhUmVzcG9uc2VQcm9maWxlTWFwcGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhUmVzcG9uc2VQcm9maWxlTWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsNkJBQTZCLEVBQXFDLE1BQU0saUNBQWlDLENBQUM7Ozs7O0FBT25ILElBQUE7SUFBMkQsaUVBQTZCO0lBSXBGLCtDQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7U0FDakYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnREE1Qkw7RUFTMkQsNkJBQTZCLEVBb0J2RixDQUFBO0FBcEJELGlEQW9CQztBQUVELG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDLEdBQUcscUNBQXFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcsIEthbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YVJlc3BvbnNlUHJvZmlsZU1hcHBpbmdBcmdzICBleHRlbmRzIEthbHR1cmFSZXNwb25zZVByb2ZpbGVNYXBwaW5nQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YVJlc3BvbnNlUHJvZmlsZU1hcHBpbmcgZXh0ZW5kcyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlTWFwcGluZyB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldGFkYXRhUmVzcG9uc2VQcm9maWxlTWFwcGluZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFSZXNwb25zZVByb2ZpbGVNYXBwaW5nJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFSZXNwb25zZVByb2ZpbGVNYXBwaW5nJ10gPSBLYWx0dXJhTWV0YWRhdGFSZXNwb25zZVByb2ZpbGVNYXBwaW5nOyJdfQ==
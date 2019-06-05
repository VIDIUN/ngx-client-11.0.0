/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperator } from './KalturaSearchOperator';
/**
 * @record
 */
export function KalturaMetadataSearchItemArgs() { }
/** @type {?|undefined} */
KalturaMetadataSearchItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaMetadataSearchItemArgs.prototype.orderBy;
var KalturaMetadataSearchItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaMetadataSearchItem, _super);
    function KalturaMetadataSearchItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaMetadataSearchItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaMetadataSearchItem' },
            metadataProfileId: { type: 'n' },
            orderBy: { type: 's' }
        });
        return result;
    };
    return KalturaMetadataSearchItem;
}(KalturaSearchOperator));
export { KalturaMetadataSearchItem };
if (false) {
    /** @type {?} */
    KalturaMetadataSearchItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaMetadataSearchItem.prototype.orderBy;
}
typesMappingStorage['KalturaMetadataSearchItem'] = KalturaMetadataSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixJQUFBO0lBQStDLHFEQUFxQjtJQUtoRSxtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0FoQ0w7RUFVK0MscUJBQXFCLEVBdUJuRSxDQUFBO0FBdkJELHFDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaE9wZXJhdG9yLCBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoT3BlcmF0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFNZXRhZGF0YVNlYXJjaEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hPcGVyYXRvckFyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0b3JkZXJCeT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFNZXRhZGF0YVNlYXJjaEl0ZW0gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoT3BlcmF0b3Ige1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG9yZGVyQnkgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFNZXRhZGF0YVNlYXJjaEl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbScgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b3JkZXJCeSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTWV0YWRhdGFTZWFyY2hJdGVtJ10gPSBLYWx0dXJhTWV0YWRhdGFTZWFyY2hJdGVtOyJdfQ==
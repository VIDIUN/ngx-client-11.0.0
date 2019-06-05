/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDataCenterContentResource } from './KalturaGenericDataCenterContentResource';
/**
 * @record
 */
export function KalturaServerFileResourceArgs() { }
/** @type {?|undefined} */
KalturaServerFileResourceArgs.prototype.localFilePath;
/** @type {?|undefined} */
KalturaServerFileResourceArgs.prototype.keepOriginalFile;
var KalturaServerFileResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaServerFileResource, _super);
    function KalturaServerFileResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaServerFileResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaServerFileResource' },
            localFilePath: { type: 's' },
            keepOriginalFile: { type: 'b' }
        });
        return result;
    };
    return KalturaServerFileResource;
}(KalturaGenericDataCenterContentResource));
export { KalturaServerFileResource };
if (false) {
    /** @type {?} */
    KalturaServerFileResource.prototype.localFilePath;
    /** @type {?} */
    KalturaServerFileResource.prototype.keepOriginalFile;
}
typesMappingStorage['KalturaServerFileResource'] = KalturaServerFileResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlcnZlckZpbGVSZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlcnZlckZpbGVSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUNBQXVDLEVBQStDLE1BQU0sMkNBQTJDLENBQUM7Ozs7Ozs7OztBQVFqSixJQUFBO0lBQStDLHFEQUF1QztJQUtsRixtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBaENMO0VBVStDLHVDQUF1QyxFQXVCckYsQ0FBQTtBQXZCRCxxQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSwgS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlQXJncyB9IGZyb20gJy4vS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VydmVyRmlsZVJlc291cmNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhR2VuZXJpY0RhdGFDZW50ZXJDb250ZW50UmVzb3VyY2VBcmdzIHtcbiAgICBsb2NhbEZpbGVQYXRoPyA6IHN0cmluZztcblx0a2VlcE9yaWdpbmFsRmlsZT8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VydmVyRmlsZVJlc291cmNlIGV4dGVuZHMgS2FsdHVyYUdlbmVyaWNEYXRhQ2VudGVyQ29udGVudFJlc291cmNlIHtcblxuICAgIGxvY2FsRmlsZVBhdGggOiBzdHJpbmc7XG5cdGtlZXBPcmlnaW5hbEZpbGUgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VydmVyRmlsZVJlc291cmNlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTZXJ2ZXJGaWxlUmVzb3VyY2UnIH0sXG5cdFx0XHRcdGxvY2FsRmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a2VlcE9yaWdpbmFsRmlsZSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2VydmVyRmlsZVJlc291cmNlJ10gPSBLYWx0dXJhU2VydmVyRmlsZVJlc291cmNlOyJdfQ==
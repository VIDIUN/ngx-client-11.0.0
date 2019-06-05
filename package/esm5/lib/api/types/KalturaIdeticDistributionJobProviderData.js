/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaIdeticDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaIdeticDistributionJobProviderDataArgs.prototype.thumbnailUrl;
/** @type {?|undefined} */
KalturaIdeticDistributionJobProviderDataArgs.prototype.flavorAssetUrl;
var KalturaIdeticDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaIdeticDistributionJobProviderData, _super);
    function KalturaIdeticDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaIdeticDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIdeticDistributionJobProviderData' },
            thumbnailUrl: { type: 's' },
            flavorAssetUrl: { type: 's' }
        });
        return result;
    };
    return KalturaIdeticDistributionJobProviderData;
}(KalturaConfigurableDistributionJobProviderData));
export { KalturaIdeticDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaIdeticDistributionJobProviderData.prototype.thumbnailUrl;
    /** @type {?} */
    KalturaIdeticDistributionJobProviderData.prototype.flavorAssetUrl;
}
typesMappingStorage['KalturaIdeticDistributionJobProviderData'] = KalturaIdeticDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7OztBQVF0SyxJQUFBO0lBQThELG9FQUE4QztJQUt4RyxrREFBWSxJQUFvRDtlQUU1RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLCtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzdGLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN0QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQWhDTDtFQVU4RCw4Q0FBOEMsRUF1QjNHLENBQUE7QUF2QkQsb0RBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMENBQTBDLENBQUMsR0FBRyx3Q0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIHRodW1ibmFpbFVybD8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0VXJsPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgdGh1bWJuYWlsVXJsIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldFVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSWRldGljRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHR0aHVtYm5haWxVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRVcmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYUlkZXRpY0Rpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YTsiXX0=